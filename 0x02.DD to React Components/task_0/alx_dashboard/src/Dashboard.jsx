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

    // Create an array of courses
    listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
    ];

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
                    {/* Modify to Show the list of courses */}
                    {isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}

                    {/* Footer Section */}
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Dashboard;
