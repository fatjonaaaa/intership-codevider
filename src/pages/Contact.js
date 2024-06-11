// src/pages/ContactUs.js
import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to talk about pets, we are here for you.</p>
      
      <h2>Contact Information</h2>
      <p>
        <strong>Email:</strong> info@petexpo.com<br />
        <strong>Phone:</strong> (123) 456-7890
      </p>
     
      <h2>Our Address</h2>
      <p>
        Pet Expo Headquarters<br />
        1234 Pet Street<br />
        Pet City, PC 56789
      </p>
      
      <h2>Business Hours</h2>
      <p>
        <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
        <strong>Saturday:</strong> 10:00 AM - 4:00 PM<br />
        <strong>Sunday:</strong> Closed
      </p>

      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;