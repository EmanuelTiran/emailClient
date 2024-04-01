import React from 'react';
import styles from './style.module.css';

export default function Login() {
    return (
        <div className={styles.login}>
            <h2>Welcome To MailBox</h2>
            <input type="text" placeholder="User mail" className={styles.input} />
            <input type="password" placeholder="Password" className={styles.input} />
            <div className={styles.loginOptions}>
                <div className={styles.loginBtn}>Login</div>
                <div>Forgot Password?</div>
            </div>
            <div className={styles.register}>
                Don't have an account? <a href="">Register Here</a>
            </div>
        </div>
    );
}
