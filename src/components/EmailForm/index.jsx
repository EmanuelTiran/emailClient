import React, { useState } from 'react';
import styles from './style.module.css';
import EmailItem from '../TextArea';
const EmailForm = () => {
  const [subject, setSubject] = useState('');
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    // פה תוכל להוסיף את הלוגיקה לשליחת המייל
    console.log('Sending email...');
  };

  return (
    <div className={styles.long}>
        <h1>Send new message </h1><br />
    <div className={styles.emailForm}>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={handleSubjectChange}
        className={styles.input}
      />
      <input
        type="email"
        placeholder="To"
        value={to}
        onChange={handleToChange}
        className={styles.input}
        // onChange={handleMessageChange}
      />
      <EmailItem/>
      <button onClick={handleSubmit} className={styles.button}>
        Send
      </button>
    </div>
    </div>
  );
};

export default EmailForm;