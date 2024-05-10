from flask import Flask, request, jsonify
from flask_cors import CORS
from google.cloud import datastore

app = Flask(__name__)
CORS(app)  # Allows the backend to receive requests from the frontend

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'pdfFile' not in request.files:
        return 'No file part', 400

    pdf_file = request.files['pdfFile']

    # # Do something with the PDF file, such as saving it
    # # throw in some type of threading logic.
    pdf_file.save('uploads/' + pdf_file.filename)

    return 'File uploaded successfully', 200



@app.route('/api', methods=['GET'])
def respond():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/summarize', methods=['POST'])
async def summarize():
    # Assuming the PDF file is sent as a file in the request
    pdf_file = request.files['pdf']
    
    # Save the PDF file to Google Cloud Datastore
    client = datastore.Client()
    key = client.key('PDF')
    entity = datastore.Entity(key=key)
    entity['filename'] = pdf_file.filename
    entity['content'] = pdf_file.read()
    client.put(entity)
    
    # Get the file path in Google Cloud Datastore
    pdf_path = key.path
    
    # Call the summarize_file function from summarizer.py
    summary = await summarize_file(pdf_path)
    
    # Delete the file from Google Cloud Datastore
    client.delete(key)
    
    return summary

if __name__ == '__main__':
    app.run(debug=True)
