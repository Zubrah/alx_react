import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';
import Notifications from "./Notifications/Notifications";
import logo from './assets/ALX+PNG.png';
import Header from './Header/header';
import Login from './Login/Login';
import Footer from './Footer/Footer';


const Dashboard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.column1}></div>
            <div className={styles.column2}>
                {/* Notification Section Here!! */}
                <div className={styles.header}>
                    {/* Header Section */}
                    <div className={styles.logo}>
                        {/* Insert an image */}
                        <img src={logo} className={styles.logo} alt='logo' />
                    </div>
                    <h1>School dashboard</h1>
                    <Notifications />
                </div>

                {/* --------------Body  Section ----------------- */}
                <Login />

                {/*--------------- Footer Section ----------------- */}
                <Footer />
            </div>
        </div>
    );
};



export default Dashboard;
