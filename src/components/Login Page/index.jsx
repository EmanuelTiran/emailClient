import React, { useContext } from 'react';
import { useState } from 'react';
import styles from './style.module.css';
import axios from 'axios';

export default function Login({setUser}) {
    
    const [formDataObj, setFormDataObj] = useState({});
    const [userObj, setUserObj] = useState({});

    const handleChange = e => setFormDataObj(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("formDataObj:",formDataObj);
        checkUser(formDataObj)
    };

    const checkUser = (formDataObj) => {
        axios.post(`http://localhost:5050/auth/login`, formDataObj)
            .then(response => {
                console.log("fetch of <Login />", response.data);
                setUser(response.data)
                // setUser(true)
                localStorage.token = response.data.token;
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }

    return (
        <div className={styles.login}>
            <h2>Welcome To MailBox</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="User mail"
                    className={styles.input}
                    onChange={handleChange} />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={styles.input}
                    onChange={handleChange} />
                <div className={styles.loginOptions}>
                    <button type="submit" className={styles.loginBtn}>Login</button>
                    <div>Forgot Password?</div>
                </div>
            </form>
            <div className={styles.register}>
                Don't have an account? <a href="/register">Register Here</a>
            </div>
        </div>
    );
}