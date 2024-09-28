import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PhotoUpload.scss';

const PhotoUpload = () => {
  const navigate = useNavigate();
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
    const happyButton = document.querySelector('.form-container__button');
    event.preventDefault();
  
    if (selectedFile && photoName.trim() !== '') {
      const formData = new FormData();
      formData.append('photo', selectedFile);
      formData.append('photoName', photoName);
      formData.append('selectedRegion', selectedRegion);
  
      happyButton.classList.add('hidden');
  
      axios
        .post(`${process.env.REACT_APP_API_URL}/upload`, formData, {
          headers: {
            'x-api-key': process.env.REACT_APP_API_KEY,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response.data);
          setUploadSuccess(true);
  
          setTimeout(() => {
            navigate('/photogallery');
          }, 2000);
        })
        .catch((error) => {
          console.error('Error:', error);
          happyButton.classList.remove('hidden'); // Show the button again if there was an error
        });
    } else {
      const photoField = document.querySelector('input[name="photo"]');
      const photoNameField = document.querySelector('input[name="photoName"]');
      happyButton.classList.remove('hidden');
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

        <button type="submit" className="form-container__button">
          Upload
        </button>
      </form>
    </div>
  );
};

export default PhotoUpload;
