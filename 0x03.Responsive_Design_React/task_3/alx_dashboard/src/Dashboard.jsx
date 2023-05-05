import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import styles from './Dashboard.module.css';
import { StyleSheet, css } from 'aphrodite';

import Notifications from './Notifications/Notifications';
import logo from './assets/ALX+PNG.png';
import Header from './Header/header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import CourseList from './CourseList/CourseList';
import BodySectionWithMarginBottom from './BodySection/BodySectionWithMarginBottom';
import BodySection from './BodySection/BodySection';
import WithLogging from './HOC/WithLogging';
import backgroundImage from './assets/Learn.jpg';



// CSS for Dashboard using aphrodite;;;
const styles = StyleSheet.create({
    body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '5% 95%',
        height: '100vh',
        width: '100%',
    },
    column1: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    },
    column2: {
        display: 'flex',
        overflowX: 'hidden',
        position: 'relative',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        height: 200,
        borderBottom: '1px solid #ccc',
        padding: 'auto',
        '@media (max-width: 900px)': {
            display: 'flex',
            justifyContent: 'space-between',
        },
    },


    logo: {
        '@media (max-width: 900px)': {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            //marginRight: '20px',
            marginLeft: '20px',
            marginBottom: '20px',
            position: 'relative',
        }
    },


    h1: {

        '@media (max-width: 900px)': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginLeft: '160px',
            width: '300px',



        }
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: 'lightgrey',
        textAlign: 'center',
        paddingTop: 10,
        '@media (max-width: 900px)': {
            position: 'relative',
            width: '98.7%',
        }

    },
    menuItem: {
        display: 'flex',
        position: 'relative',
        cursor: 'pointer',
        alignItems: 'end',
        justifyContent: 'flex-end',
        height: 10,
        marginRight: 30,
        marginTop: '10px',
        borderRadius: 5,
        fontSize: '1rem',
        marginBottom: '1rem',
        '@media (max-width: 900px)': {
            display: 'flex',
            marginTop: '20px',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            height: '200px',
            marginLeft: 0,
            marginRight: '10px',
            position: 'relative',
            width: '140px',
            border: 'none',

        }
    },
});



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.state = {
            showNotifications: false,
        };

    }



    static propTypes = {
        isLoggedIn: PropTypes.bool,
        displayDrawer: PropTypes.bool,
        logOut: PropTypes.func,
    }

    static defaultProps = {
        isLoggedIn: true,
        displayDrawer: false,
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

    listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
    ];




    handleNotifications = () => {

        this.setState((prevState) => ({
            showNotifications: !prevState.showNotifications,
        }));
        // const { displayDrawer } = this.props;
        // this.props.displayDrawer(!displayDrawer);




    };





    render() {
        const { isLoggedIn, displayDrawer, handleNotifications } = this.props;
        const CourseListWithLogging = WithLogging(CourseList);
        const LoginWithLogging = WithLogging(Login);
        const { showNotifications } = this.state;



        return (
            <div className={css(styles.body)}>
                <div className={css(styles.container)}>
                    <div className={css(styles.column1)}></div>
                    <div className={css(styles.column2)}>
                        {/* Notification Section Here!! */}
                        <div className={css(styles.header)}>
                            {/* Header Section */}
                            <div className={css(styles.logo)}>
                                {/* Insert an image */}
                                <img src={logo} className={css(styles.logo)} alt='logo' />
                            </div>
                            <h1 className={css(styles.h1)}>School dashboard</h1>
                            <div className>
                                <div className={css(styles.menuItem)}
                                    onClick={this.handleNotifications}
                                >Your notifications</div>
                                {showNotifications && <Notifications displayDrawer={showNotifications} />}
                            </div>
                        </div>

                        {/* Body  Section */}
                        {isLoggedIn ?
                            <BodySectionWithMarginBottom title="Course list">
                                <CourseListWithLogging listCourses={this.listCourses} />
                            </BodySectionWithMarginBottom> :
                            <BodySectionWithMarginBottom title="Log in Access Full Dashboard">
                                <LoginWithLogging />
                            </BodySectionWithMarginBottom>}

                        <BodySection title="News from the School">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, incidunt quibusdam laborum earum tempore impedit quis voluptatibus, quo obcaecati cumque necessitatibus rem accusamus nisi laudantium est? Eos quibusdam necessitatibus officiis.</p>
                        </BodySection>

                        {/* Footer Section */}
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
