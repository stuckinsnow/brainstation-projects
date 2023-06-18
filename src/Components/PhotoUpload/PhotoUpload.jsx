import { useState } from 'react';
import axios from 'axios';

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('photo', selectedFile);

      axios.post('http://localhost:8080/upload', formData)
        .then((response) => {
          console.log(response.data);
          window.location.reload(); // Reload the page after successful upload
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="file" name="photo" accept="image/*" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default PhotoUpload;
