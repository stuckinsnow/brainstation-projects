import { useState } from 'react';
import axios from 'axios';
import './PhotoUpload.scss';

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [photoName, setPhotoName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setPhotoName(event.target.value);
    const photoNameField = document.querySelector('input[name="photoName"]');
    if (photoNameField && photoNameField.classList.contains('error')) {
      photoNameField.classList.remove('error');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile && photoName.trim() !== '') {
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
    } else {
      const photoField = document.querySelector('input[name="photo"]');
      const photoNameField = document.querySelector('input[name="photoName"]');
      photoField.classList.add('error-2');
      photoNameField.classList.add('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="file" name="photo" accept="image/*" onChange={handleFileChange} />
      <input type="text" name="photoName" placeholder="Photo Name" value={photoName} onChange={handleNameChange} />
      <button type="submit">Upload</button>
      {/* {error && <p>{error}</p>} */}
    </form>
  );
};

export default PhotoUpload;
