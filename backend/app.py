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

if __name__ == '__main__':
    app.run(debug=True)