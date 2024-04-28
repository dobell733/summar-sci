from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows the backend to receive requests from the frontend

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