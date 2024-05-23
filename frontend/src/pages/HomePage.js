import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [summary, setSummary] = useState(null);
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      // Check if file is selcted
      if (file.size == undefined ) {
        return;
      }
      // Checks file size
      if (file.size > 2000000 ) {
        // window.alert(file.size);
        window.alert("File is too large");
        return;
      }

      const formData = new FormData();
      formData.append('pdfFile', file);
  
      try {
        // Shows loading
        setloading(true)

        const response = await fetch('http://127.0.0.1:5000/summarize', {
           method: 'POST',
           body: formData
        });
  
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log(data.summary);
            // setSummary(data.summary);
            // console.log(summary);

            navigate('/summary', {state: data.summary});
        } else {
            console.error('Failed to upload file or retrieve summary.');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
  
    return (
      <>
        <div class="upload-container">
          <h1>Upload PDF</h1>
          <p>Maximum file size: 2000 kb</p>
          <div class="upload-form">
            <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleFileChange} accept=".pdf" />
              <button type="submit">Upload</button>
            </form>
          </div>
          {loading ? <div class="loader"></div>: null}
          {loading ? <p>Loading...</p>: null}
        </div>
      </>
    );
  };

export default FileUpload;