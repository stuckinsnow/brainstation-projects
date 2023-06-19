import { useState } from 'react';
import axios from 'axios';

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [photoName, setPhotoName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setPhotoName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('photo', selectedFile);
      formData.append('photoName', photoName);

      axios
        .post(`${process.env.REACT_APP_API_URL}/upload`, formData)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="file" name="photo" accept="image/*" onChange={handleFileChange} />
      <input type="text" name="photoName" placeholder="Photo Name" value={photoName} onChange={handleNameChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default PhotoUpload;
