import React from 'react';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.column1}></div>
            <div className={styles.column2}>
                <div className={styles.textContainer}>
                    <div className={styles.centeredText}>
                        <h1>Welcome to ALX SWE 😎</h1>
                    </div>
                    <div className={styles.centeredText}>
                        <h2>We Learn and Develop By Doing!</h2>
                    </div>
                    <footer className={styles.footer}>
                        <p> Copyright 2023 - ALX</p>
                    </footer>

                </div>
            </div>
        </div>
    );
}

export default App;
