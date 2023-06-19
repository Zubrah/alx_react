import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../../actions/uiActionCreators';
import Notifications from '../../Notifications/Notifications';
import logo from '../../assets/ALX+PNG.png';
import Login from '../../Login/Login';
import Footer from '../../Footer/Footer';
import CourseList from '../../CourseList/CourseList';
import BodySectionWithMarginBottom from '../../BodySection/BodySectionWithMarginBottom';
import BodySection from '../../BodySection/BodySection';
import WithLogging from '../../HOC/WithLogging';
import backgroundImage from '../../assets/Learn.jpg';
import DashboardContext from './DashboardContext';

// CSS for Dashboard using plain styles
const styles = {
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
            marginLeft: '20px',
            marginBottom: '20px',
            position: 'relative',
        },
    },
    h1: {
        '@media (max-width: 900px)': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginLeft: '160px',
            width: '300px',
        },
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
        },
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
        ':hover': {
            animationName: {
                '0%': {
                    transform: 'translateY(0px)',
                    opacity: '0.5',
                },
                '50%': {
                    transform: 'translateY(-5px)',
                },
                '100%': {
                    transform: 'translateY(0px)',
                    opacity: '1',
                },
            },
            animationDuration: '1s',
            animationIterationCount: 'infinite',
        },
    },
};

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        const { displayNotificationDrawer } = this.props;
        displayNotificationDrawer();
    }

    componentWillUnmount() {
        const { hideNotificationDrawer } = this.props;
        hideNotificationDrawer();
    }

    handleLogout(event) {
        event.preventDefault();
        const { history } = this.props;
        history.push('/');
    }

    render() {
        const { isLoggedIn } = this.props;
        const { user } = this.context;
        return (
            <React.Fragment>
                <Notifications />
                <div style={styles.body}>
                    <div style={styles.container}>
                        <div style={styles.column1} />
                        <div style={styles.column2}>
                            <div style={styles.header}>
                                <img src={logo} alt="logo" style={styles.logo} />
                                <h1 style={styles.h1}>Course dashboard</h1>
                                {isLoggedIn && <p>Welcome {user.email}!</p>}
                            </div>
                            <div>
                                {!isLoggedIn && <Login />}
                                {isLoggedIn && (
                                    <React.Fragment>
                                        <BodySectionWithMarginBottom title="Course list" className="course-list">
                                            <CourseList />
                                        </BodySectionWithMarginBottom>
                                        <BodySection title="News from the School" className="body-section">
                                            <p>Some news</p>
                                        </BodySection>
                                    </React.Fragment>
                                )}
                            </div>
                            <div style={styles.footer}>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Dashboard.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    displayNotificationDrawer: PropTypes.func.isRequired,
    hideNotificationDrawer: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

Dashboard.defaultProps = {
    isLoggedIn: false,
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.ui.isNotificationDrawerVisible,
});

const mapDispatchToProps = {
    displayNotificationDrawer,
    hideNotificationDrawer,
};

const ConnectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default WithLogging(ConnectedDashboard);
