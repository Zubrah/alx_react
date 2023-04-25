import React from 'react';
import styles from './App.module.css';
//import { getFooterCopy, getFullYear } from './utils'
import Notifications from "./Notifications";
//import logo from './assets/ALX+PNG.png';
import Header from './Header/header';
import Login from './Login/Login';
import Footer from './Footer/Footer';

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.column1}></div>
            <div className={styles.column2}>

                {/* Header Section */}
                <Header />

                {/* Body  Section */}
                <Login />

                {/* Notification Section Here!! */}
                <Notifications />


                {/* Footer Section */}
                <Footer />

            </div >
        </div >
    );
}

export default App;
