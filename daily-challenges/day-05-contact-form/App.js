import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setIsSubmitted(true);
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Contact Us</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ 
            padding: '10px', 
            fontSize: '16px', 
            borderRadius: '4px', 
            border: '1px solid #ccc' 
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ 
            padding: '10px', 
            fontSize: '16px', 
            borderRadius: '4px', 
            border: '1px solid #ccc' 
          }}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          style={{ 
            padding: '10px', 
            fontSize: '16px', 
            borderRadius: '4px', 
            border: '1px solid #ccc',
            resize: 'vertical'
          }}
        />
        <button 
          onClick={handleSubmit}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Submit
        </button>
        {error && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            {error}
          </div>
        )}
      </div>
        {isSubmitted && (
          <div style={{ marginTop: '20px' }}>
            <h1>Thank you for your message</h1>
            <p>( Name: {name} , Email: {email} , Message: {message} )</p>
          </div>
        )}
      </div>
  );
}

export default ContactForm;