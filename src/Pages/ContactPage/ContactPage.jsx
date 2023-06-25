import { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactPage.scss'; 
import SingleImage from '../../Components/SingleImage/SingleImage';

function ContactPage() {
  useEffect(() => {
    document.title = 'Portfolio - Contact'; 
  }, []);


  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    content: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/contact`, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Needs more here, for the status messages
      });

    setFormData({
      email: '',
      subject: '',
      content: ''
    });
  }; 

  return (
    <>
      <div className='maindiv'> 
          <div className="contact-container">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label>Subject:</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="contact-form__content">
                <label>Message:</label>
                <textarea className='contact-form__content--writing' name="content" value={formData.content} onChange={handleChange} required />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
       
        <SingleImage />
       </div>
    </>
  );
}

export default ContactPage;
