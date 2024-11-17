import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    emailjs
      .sendForm('service_0bgmxiv', 'template_dkt4cfc', form.current, {
        publicKey: 'BI7T6U9OqzuiHcLOw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSending(false);
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSending(false);
          setError('Form submission failed. Please try again.');
        }
      );
  };

  return (
    <div className="contactus mt-5 pt-5 container mb-5">
      <div className="row g-4 mt-5">
        {/* Contact Details */}
        <div className="col-lg-6 px-4 d-flex flex-column">
          <h4 className="mb-4">Get answers and advice from professional consultants</h4>
          <div className="mb-3">
            <i className="fa-solid fa-square-phone fs-2 "></i>
            <p className="mt-2">+1 (415) 876-3250 / +1 (415) 876-3251</p>
          </div>
          <hr />
          <div className="mb-3">
            <i className="fa-regular fa-envelope fs-2 "></i>
            <p className="mt-2">eiid.ahmed4444@gmail.com</p>
          </div>
          <hr />
          <div>
            <i className="fa-regular fa-map fs-2 "></i>
            <p className="mt-2">1650 Lombard Street, San Francisco, CA 94123</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-6">
          <form ref={form} onSubmit={sendEmail} className="p-4 shadow rounded-4">
            <h4 className="text-center mb-4">Contact Us</h4>
            <div className="mb-3">
              <label htmlFor="user_name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="user_name"
                name="user_name"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="user_email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="user_email"
                name="user_email"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-5 py-2 rounded-pill fs-5"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {error && <p className="text-danger mt-3">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
