//Home page
//still need to implement pdf transfer to backend
//receive summary from backend

import React, { useState } from 'react';
import axios from 'axios'

//import { Document, Page} from 'react-pdf';


const FileUpload = () => {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('pdfFile', file);
  
      try {
        const response = await fetch('http://127.0.0.1:5000/upload', {
           method: 'POST',
           body: formData
        });
  
        if (response.ok) {
            console.log('File uploaded successfully');
        } else {
            console.error('Failed to upload file');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
  
    return (
      <div>
        <h2>Upload PDF</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} accept=".pdf" />
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  };



// rename to PDFViewer?

//class HomePage extends React.Component {
//    state = {
//        selectedFile: null,
//        numPages: null,
//        pageNumber: 1,
//    }

//    onFileLoad = ({target: { result}}) => {
//        this.setState({ pdfData: result});
//    }

//    onDocumentLoadSuccess = ({numPages}) => {
//         this.setState({numPages});
//     }

//     render() {
//         const { pageNumber, numPages, pdfData} = this.state;
//         return (
//             <>
//                 <p>This is the Home Page</p>
//                 <p></p>
                
//                 <input type="file" accept=".pdf" onChange={(event) => this.onFileLoad(event)} />

//                 {pdfData && (
//                 <Document file={pdfData} onLoadSuccess={this.onDocumentLoadSuccess}>
//                     <Page pageNumber={pageNumber} />
//                 </Document>
//                 )}

//                 {pdfData && (
//                 <p>Page {pageNumber} of {numPages}</p>
//                 )}

//             </>
//         )
//     }
// }


//function HomePage() {
//    return (
//        <>
//            <p>This is the Home Page</p>
//            PDFViewer;
//        </>
//    );
//}

export default FileUpload;