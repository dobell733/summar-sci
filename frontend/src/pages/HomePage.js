import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Icons
import { FaRegTrashCan } from "react-icons/fa6";
import { GrUploadOption } from "react-icons/gr";


const FileUpload = () => {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const inputRef = useRef();

    const handleFileChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0];
        // Check file size
        if (selectedFile.size > 2000000) {
          window.alert("File is too large. Please enter files with size < 2000 KB.");
          return;
        }

        setFile(e.target.files[0]);
      }
    };

    const onChooseFile = () => {
      inputRef.current.click();
    };

    const removeFile = () => {
      setFile(null);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!file) {
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
        <div className="upload-container">
          <p></p>
          <p>Please upload a scientific article in the form of a pdf below and press the Submit button for a SummarSci summary. The maximum file size is 2000 KB.</p>
          
          <input type="file" ref = {inputRef} style = {{display: "none"}} onChange = {handleFileChange} accept=".pdf"/>

          <button className = "file-btn" onClick = {onChooseFile}>
            <span> <GrUploadOption/> </span> Upload File
          </button>

          {file && <div className = "selected-file">
          <p>{file.name}</p>
          
          <button onClick = {removeFile}>
            <span><FaRegTrashCan/></span>
          </button>
          </div>
          }
          
          <form onSubmit={handleSubmit} className = "submit">
            <button type="submit">Submit</button>
          </form>


          {loading ? <div className="loader"></div>: null}
          {loading ? <p>Loading...</p>: null}

        </div>
      </>
    );
  };

export default FileUpload;