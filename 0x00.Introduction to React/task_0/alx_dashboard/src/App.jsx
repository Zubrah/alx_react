import React from 'react';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.column1}></div>
            <div className={styles.column2}>

                <div className={styles.textContainer}>
                    <div className={styles.centeredText}>
                        <h1>Welcome</h1>
                        <h2>
                            Let's explore and get involved in our community of learners where learn,discover,develop and grow together! 😎

                        </h2>
                        <div className={styles.btn_wrap}>
                            <button className={styles.button}>I'm Interested!</button>

                        </div>


                    </div>
                </div>
                <footer className={styles.footer}>
                    <p> Copyright 2023 - ALX</p>
                </footer>

            </div>
        </div>

    );
}

export default App;
