import { useEffect } from 'react';

function ContactPage() {
  useEffect(() => {
    document.title = 'Portfolio - Contact'; 
  }, []);

  return (
    <> 
      <div className="contact-area">
        Please use the form below to contact me...
      </div>
    </>
  );
}

export default ContactPage;
