import React, { useState } from 'react';

const ImportSheet = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Generate a URL for displaying the file
    const fileURL = URL.createObjectURL(selectedFile);
    setFileUrl(fileURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Replace with your API endpoint
      const response = await fetch('/import', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      // Optionally, you can display a success message or handle post-upload logic
      alert('File uploaded successfully');
    } catch (error) {
      console.error(error);
      alert('An error occurred during file upload.');
    }
  };

  return (
    <div>
      <h1>Upload and Display File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>

      {fileUrl && (
        <div>
          <h2>Preview:</h2>
          {/* Display image preview or file download link */}
          {file.type.startsWith('image/') ? (
            <img src={fileUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          ) : (
            <a href={fileUrl} download>
              Download {file.name}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ImportSheet;
