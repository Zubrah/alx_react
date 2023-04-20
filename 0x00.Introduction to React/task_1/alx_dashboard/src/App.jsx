import React from 'react';
import styles from './App.module.css';
import { getFooterCopy, getFullYear } from './utils'
import Notifications from "./Notifications";
import logo from './assets/ALX+PNG.png';

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.column1}></div>
            <div className={styles.column2}>

                {/* Header Section */}
                <div className={styles.app_header}>
                    <div className={styles.logo}>
                        {/* Insert an image */}
                        <img src={logo} className={styles.logo} alt='logo' />
                    </div>
                    <h1>School dashboard</h1>
                </div>

                {/* Body  Section */}
                <div className={styles.app_body}>
                    <p>Let's get started to learn,develop, create and join the Community! </p>
                    <div className={styles.body_btn}>
                        <div className={styles.btn_wrap}>
                            <div className={styles.button}>
                                Welcome!

                            </div>
                        </div>
                    </div>

                </div>

                {/* Notification Section Here!! */}
                <Notifications />


                {/* Footer Section */}
                <div className={styles.app_footer}>
                    {/* Insert utils fuction here */}
                    <p className={styles.button_18}>{getFooterCopy(true)}</p>
                    <p className={styles.button_18}>{getFullYear()}</p>






                </div>
            </div >
        </div >
    );
}

export default App;
