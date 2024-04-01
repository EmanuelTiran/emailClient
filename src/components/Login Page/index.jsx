import React from 'react';
import styles from './style.module.css';

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userMail = formData.get('userMail');
        const password = formData.get('password');
        // כאן תוכל להמשיך עם הטיפול בנתונים
        console.log('User Mail:', userMail);
        console.log('Password:', password);
    };

    return (
        <div className={styles.login}>
            <h2>Welcome To MailBox</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userMail" placeholder="User mail" className={styles.input} />
                <input type="password" name="password" placeholder="Password" className={styles.input} />
                <div className={styles.loginOptions}>
                    <button type="submit" className={styles.loginBtn}>Login</button>
                    <div>Forgot Password?</div>
                </div>
            </form>
            <div className={styles.register}>
                Don't have an account? <a href="">Register Here</a>
            </div>
        </div>
    );
}