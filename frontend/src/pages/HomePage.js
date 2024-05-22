import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icons
import { FaRegTrashCan } from "react-icons/fa6";
import { GrUploadOption } from "react-icons/gr";



const FileUpload = () => {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const inputRef = useRef();


    const handleFileChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setFile(e.target.files[0]);
      }
    };

    const onChooseFile = () => {
      inputRef.current.click();
      
    };

    const removeFile = () => {
      setFile(null);
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('pdfFile', file);
  
      try {
        const response = await fetch('http://127.0.0.1:5000/summarize', {
           method: 'POST',
           body: formData
        });
  
        if (response.ok) {
            const data = await response.json();
            console.log(data.summary);
            navigate('/summary', {state: data.summary});
        } else {
            console.error('Failed to upload file or retrieve summary.');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
  
    return (
      <div className = "box">
        <p></p>
        <p>Please upload a scientific article below and press the Submit button for a SummarSci summary.</p>


        <input type="file" ref = {inputRef} style = {{display: "none"}} onChange = {handleFileChange} accept=".pdf"/>
        
        <button className = "file-btn" onClick = {onChooseFile}>
          <span class="material-symbols-rounded"><GrUploadOption /></span> Upload File
        </button>

        {file && <div className = "selected-file">
          <p>{file.name}</p>
          
          <button onClick = {removeFile}>
            <span class = "material-symbols-rounded"><FaRegTrashCan/></span>
          </button>
        </div>
        }


        <form onSubmit={handleSubmit} className = "submit">
          <button type="submit">Submit</button>
        </form>


      </div>
    );
  };

export default FileUpload;