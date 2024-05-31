import React, { useRef, useState } from 'react';
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { isValidEmail } from './emailUtils'; // Adjust the import path as necessary

const Contacts = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
  
    const senderEmail = form.current.email.value; // Get the sender's email address from the form
  
    // Validate the sender's email address
    if (!isValidEmail(senderEmail)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
  
    // Set the destination email address
    const destinationEmail = 'anushachiruvolu24@gmail.com';
  
    // Send email using EmailJS
    emailjs.send('service_kpzxgqz', 'template_kk9ipl8', {
      from_name: form.current.name.value, // Get the sender's name from the form
      reply_to: senderEmail, // Set the sender's email address as the reply-to address
      to_email: destinationEmail, // Set the destination email address
      message: form.current.message.value // Get the message from the form
    }, 'uKELRhBOpArKOozDJ')
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        alert('Failed to send message, please try again later.');
      });
  
    // Clear any previous email validation errors
    setEmailError('');
  
    // Reset the form after sending the email
    e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>anushachiruvolu24@gmail.com</h5>
            <a href="mailto:anushachiruvolu24@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder='Your Email' required />
          {emailError && <p className="error-message">{emailError}</p>}
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;