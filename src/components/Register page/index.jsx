import React from 'react'
import { useState,useEffect  } from 'react';
import axios from 'axios';

import styles from './styles.module.css';

export default function Registration() {
  const [formDataObj, setFormDataObj] = useState({});

  const handleChange = e => setFormDataObj(prev => ({ ...prev, [e.target.name]: e.target.value }))


  const passwordsMatch = () => {
    return formDataObj.password === formDataObj.confirmPassword;
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    // console.log(formDataObj);
    createNewUser(formDataObj);
    if (passwordsMatch()) {

      console.log('Registration successful!');
    } else {
      alert("Passwords don't match. Please make sure your passwords match.");
    }
  };

  const createNewUser = (formDataObj) =>{
    axios.post(`http://localhost:5050/auth/register`, formDataObj)
      .then(response => {
        console.log("fetch",response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }

  return (
    <div className={styles.register}>
      <h2>Your first MailBox is here</h2>
      <form onSubmit={handleRegistration}>
        <div className={styles.inputWithLabel}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={styles.input}
            // value={firstName || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputWithLabel}>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={styles.input}
            // value={lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputWithLabel}>
          <label>Email Address:</label>
          <input
            type="text"
            placeholder="Our Email Address"
            name="email"
            className={styles.input}
            // value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputWithLabel}>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            name="password"
            // value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputWithLabel}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={styles.input}
            // value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.loginOptions}>
          <button type="submit" className={styles.loginBtn}>Register</button>
          <div>Forgot Password?</div>
        </div>
      </form>
      <div className={styles.login}>
        Already have an account? <a href="login">Login Here</a>
      </div>
      <div className={styles.terms}>
        By registering, you agree to our <a href="">Terms of Use</a>
      </div>
    </div>
  );
}
