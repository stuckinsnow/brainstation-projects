import { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoUpload from '../../Components/PhotoUpload/PhotoUpload';
import './AdminPage.scss';

function AdminPage() {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    document.title = 'Portfolio - Admin';

    axios
      .get(`${process.env.REACT_APP_API_URL}/emails/`)
      .then((response) => {
        const sortedData = response.data.sort((a, b) => b.id - a.id);
        setContactData(sortedData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleDeleteContact = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/emails/${id}`)
      .then(() => {
        const updatedData = contactData.filter((contact) => contact.id !== id);
        setContactData(updatedData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <PhotoUpload />
      <div>
        {contactData.map((contact) => (
          <div key={contact.id}>
            <div>
              Email: {contact.email}
            </div>
            <div>
              Subject: {contact.subject}
            </div>
            <div>
              Content: {contact.content}
            </div> <button onClick={() => handleDeleteContact(contact.id)} >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminPage;
