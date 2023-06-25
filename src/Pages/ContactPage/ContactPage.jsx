import { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactPage.scss';

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
      <div className="contact-area">
        <h2>Contact Me</h2>
        <form id="contactform" onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Subject:</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div contact-area__content>
            <label>Message:</label>
            <textarea className='contact-area__content--writing' name="content" value={formData.content} onChange={handleChange} required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
