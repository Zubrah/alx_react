import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';
import Notifications from './Notifications/Notifications';
import logo from './assets/ALX+PNG.png';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import CourseList from './CourseList/CourseList';
import BodySectionWithMarginBottom from './BodySection/BodySectionWithMarginBottom';
import BodySection from './BodySection/BodySection';
import WithLogging from './HOC/WithLogging';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    static propTypes = {
        isLoggedIn: PropTypes.bool,
        displayDrawer: PropTypes.bool,
        logOut: PropTypes.func,
    }

    static defaultProps = {
        isLoggedIn: true,
        displayDrawer: true,
        logOut: () => { },
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(event) {
        const { ctrlKey, key } = event;
        if (ctrlKey && key === 'h') {
            alert('Logging you out');
            this.props.logOut();
        }
    }
    // Test to Display list of Courses...
    listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
    ];

    render() {
        const { isLoggedIn, displayDrawer } = this.props;
        const CourseListWithLogging = WithLogging(CourseList);
        const LoginWithLogging = WithLogging(Login);
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
                    <BodySectionWithMarginBottom title="Course list">
                        <CourseListWithLogging listCourses={this.listCourses} />
                    </BodySectionWithMarginBottom>
                    <BodySectionWithMarginBottom title="Log in Access Full Dashboard">
                        <LoginWithLogging />
                    </BodySectionWithMarginBottom>
                    <BodySection title="News from the School">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quidem dolor aperiam magnam esse laudantium temporibus ipsam dolorum rem molestiae, maxime pariatur aliquam, impedit officiis ullam nostrum sapiente animi adipisci.</p>
                    </BodySection>

                    {/* Footer Section */}
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Dashboard;
