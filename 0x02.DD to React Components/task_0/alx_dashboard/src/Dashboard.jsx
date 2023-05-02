import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';
import Notifications from './Notifications/Notifications';
import logo from './assets/ALX+PNG.png';
import Header from './Header/header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import CourseList from './CourseList/CourseList';

class Dashboard extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool,
        displayDrawer: PropTypes.bool,
    };

    static defaultProps = {
        isLoggedIn: true,
        displayDrawer: false,
    };

    render() {
        const { isLoggedIn, displayDrawer } = this.props;
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
                        <div className>
                            <div className={styles.menuItem}>Your notifications</div>
                            <Notifications displayDrawer={displayDrawer} />
                        </div>
                    </div>

                    {/* Body  Section */}
                    {isLoggedIn ? <CourseList /> : <Login />}

                    {/* Footer Section */}
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Dashboard;
