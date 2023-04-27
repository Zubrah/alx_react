import React from 'react';
import styles from './Home.module.css';
import Notifications from "./Notifications/Notifications";
import { getFooterCopy, getFullYear } from './utils'
import logo from './assets/ALX+PNG.png';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
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

                {/* Login  Section */}
                <div className={styles.app_body}>
                    <p>Let's get started to learn,develop, create and join the Community! </p>
                    <div className={styles.body_btn}>
                        <div className={styles.btn_wrap}>
                            <div className={styles.button}
                                onClick={
                                    () => navigate('/dashboard')
                                }>
                                Welcome!
                            </div>
                        </div>
                    </div>

                </div>




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

export default Home;
