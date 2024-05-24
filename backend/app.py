from flask import Flask, request, jsonify
from flask_cors import CORS
from google.cloud import storage
from file_summarization.summarizer import summarize_file

app = Flask(__name__)
CORS(app)

@app.route('/summarize', methods=['POST'])
async def summarize():
    """
    Endpoint for summarizing a PDF file.

    This endpoint receives a PDF file in the request and saves it to Google Cloud Storage.
    It then passes the cloud storage path of the file to the `summarize_file` function to generate a summary.
    Finally, it deletes the file from Google Cloud Storage and returns the summary as a JSON response.

    Returns:
        A JSON response containing the summary of the PDF file.

    Raises:
        400: If no file part is found in the request.
    """
    if 'pdfFile' not in request.files:
        return 'No file part', 400

    pdf_file = request.files['pdfFile']

    # Save the file to Google Cloud Storage
    storage_client = storage.Client()
    # bucket_name = 'summar-sci'
    bucket_name = 'temporary_reasearch_article_storage'
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(pdf_file.filename) # Create blob with the name of the file
    blob.upload_from_file(pdf_file) # Upload the file to the blob

    # Pass cloud storage path to the summarize_file function
    summary = await summarize_file(f'gs://{bucket_name}/{pdf_file.filename}')

    # Delete the file from Google Cloud Storage
    blob.delete()

    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)
    