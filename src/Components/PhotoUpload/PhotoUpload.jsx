import { useState } from 'react';
import axios from 'axios';
import './PhotoUpload.scss';

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [photoName, setPhotoName] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

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

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile && photoName.trim() !== '') {
      const formData = new FormData();
      formData.append('photo', selectedFile);
      formData.append('photoName', photoName);
      formData.append('selectedRegion', selectedRegion);

      axios
        .post(`${process.env.REACT_APP_API_URL}/upload`, formData)
        .then((response) => {
          console.log(response.data);
          setUploadSuccess(true);
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
    <div className="form-container">

{uploadSuccess && <p className="success-message">File uploaded successfully!</p>}


      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="photo" accept="image/*" onChange={handleFileChange} />
        <input type="text" name="photoName" placeholder="Photo Name" value={photoName} onChange={handleNameChange} />

        <select name="selectedRegion" value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Select Region</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
        </select>

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default PhotoUpload;
