import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('pdfFile', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/summarize', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setSummary(data.summary);
      } else {
        console.error('Failed to summarize file');
      }
    } catch (error) {
      console.error('Error summarizing file:', error);
    }
  };

  return (
    <div>
      <h2>Upload PDF</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".pdf" />
        <button type="submit">Summarize</button>
      </form>
      {summary && (
        <div>
          <h3>Summary:</h3>
          {summary.split('\n\n').map((paragraph, index) => (
            <p key={index} className="paragraph-indent">{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;