import React, { useState } from 'react';

const RightBar = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files.map(file => URL.createObjectURL(file)));
  };

  return (
    <div className="right-bar">
      <h2>Uploaded Files</h2>
      <input type="file" multiple onChange={handleFileUpload} />
      <div className="uploaded-files">
        {uploadedFiles.map((file, index) => (
          <div key={index}>
            <img src={file} alt={`Upload ${index}`} style={{ width: '100%', marginBottom: '10px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBar;
