import { useEffect, useState } from 'react';
import axios from 'axios';

const PhotoPage = ({ history }) => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    const url = `${process.env.REACT_APP_API_URL}${pathname}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setPhotoData(data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = () => {
    if (photoData && photoData.id) {
      const idToDelete = photoData.id;
      axios
        .delete(`${process.env.REACT_APP_API_URL}/delete/${idToDelete}`)
        .then((response) => {
          console.log(response.data);
          history.push('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <>
      {photoData ? (
        <div>
          <pre>{JSON.stringify(photoData, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <div>
        {photoData && (
          <button onClick={handleDelete}>Delete</button>
        )}
      </div>
    </>
  );
};

export default PhotoPage;
