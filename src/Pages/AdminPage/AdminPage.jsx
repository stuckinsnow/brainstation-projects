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
      
      
        <div className='admin-page'>
        <PhotoUpload />
        <section className='messages'>
          {contactData.map((contact) => (
            <article className="messages__message" key={contact.id}>
              <div className='messages__content'>
              <div>
                Email: {contact.email}
              </div>
              <div>
                Subject: {contact.subject}
              </div>
              <div>
                Content: {contact.content}
              </div> 
              </div>
              <div className='delete-btn btn' onClick={() => handleDeleteContact(contact.id)} >
                Delete
              </div>
            </article>
          ))}
      </section>
        </div>
    </>
  );
}

export default AdminPage;
