import React from 'react'
import styles from './styles.module.css';
import { useState } from 'react';

export default function Registration() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const passwordsMatch = () => {
      return password === confirmPassword;
    };
  
    const handleRegistration = (event) => {
      event.preventDefault();
      if (passwordsMatch()) {
        // כאן נוכל להמשיך עם הרישום למערכת
        console.log('Registration successful!');
      } else {
        alert("Passwords don't match. Please make sure your passwords match.");
      }
    };
  
    return (
      <div className={styles.register}>
        <h2>Your first MailBox is here</h2>
        <form onSubmit={handleRegistration}>
          <div className={styles.inputWithLabel}>
            <label>First Name:</label>
            <input
              type="text"
              placeholder="First Name"
              className={styles.input}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputWithLabel}>
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="Last Name"
              className={styles.input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputWithLabel}>
            <label>Email Address:</label>
            <input
              type="text"
              placeholder="Our Email Address"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputWithLabel}>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputWithLabel}>
            <label>Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.loginOptions}>
            <button type="submit" className={styles.loginBtn}>Register</button>
            <div>Forgot Password?</div>
          </div>
        </form>
        <div className={styles.login}>
          Already have an account? <a href="">Login Here</a>
        </div>
        <div className={styles.terms}>
          By registering, you agree to our <a href="">Terms of Use</a>
        </div>
      </div>
    );
  }
