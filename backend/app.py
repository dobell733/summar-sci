from flask import Flask, request, jsonify
from flask_cors import CORS

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
def summarize():
    # Assuming the PDF file is sent as a file in the request
    pdf_file = request.files['pdf']
    
    # Save the PDF file temporarily, we will probably need to use Google Cloud Storage for this when deployed and delete the file after processing
    pdf_path = 'temp.pdf'
    pdf_file.save(pdf_path)
    
    # Call the main function from summarizer.py
    summary = main(pdf_path)
    
    return summary

if __name__ == '__main__':
    app.run(debug=True)