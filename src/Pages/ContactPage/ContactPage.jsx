import { useState, useEffect, _useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ContactPage.scss';
import SingleImage from '../../Components/SingleImage/SingleImage';

function ContactPage() {
  useEffect(() => {
    document.title = 'Portfolio - Contact';
  }, []);
  const [messageSuccess, setMessageSuccess] = useState(false);
  // const messageSuccessRef = useRef(messageSuccess);


  // useEffect(() => {
  //   messageSuccessRef.current = messageSuccess;
  // }, [messageSuccess]);


  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    content: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const submitBtn = document.querySelector('.submit-btn');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/contact`, formData)
      .then((response) => {
        console.log(response.data);

        if (response.data.message === 'Success!') {
          setMessageSuccess(true);
          submitBtn.classList.add('hidden');

          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
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
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Please fill in your email address' required />
            </div>
            <div>
              <label>Subject:</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder='Please write a subject' required />
            </div>
            <div className="contact-form__content">
              <label>Message:</label>
              <textarea className='contact-form__content--writing' name="content" value={formData.content} onChange={handleChange} placeholder='Write your message here' required />
            </div>

            <div>
              {messageSuccess === true ? <div className='btn' type="submit">Success</div> : <button className='submit-btn' type="submit">Submit</button>}
            </div>
          </form>
        </div>

        <SingleImage />
      </div>
    </>
  );
}

export default ContactPage;
