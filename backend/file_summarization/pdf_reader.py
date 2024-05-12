from io import BytesIO
from google.cloud import storage
import pypdf

def extract_text_from_pdf(file_path):
    """
    Extracts the text content from a PDF file stored locally or in Google Cloud Storage.

    Args:
        file_path (str): The path to the PDF file (local path or Google Cloud Storage path).

    Returns:
        str: The extracted text content.
    """
    storage_client = storage.Client()
    # Extract the bucket name and blob name from the file path
    bucket_name, blob_name = file_path.replace('gs://', '').split('/', 1)
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)

    pdf_data = blob.download_as_bytes()
    pdf_reader = pypdf.PdfReader(BytesIO(pdf_data))
    num_pages = len(pdf_reader.pages)

    text = ""
    for page_num in range(num_pages):
        page = pdf_reader.pages[page_num]
        page_text = page.extract_text()
        text += page_text

    return text
