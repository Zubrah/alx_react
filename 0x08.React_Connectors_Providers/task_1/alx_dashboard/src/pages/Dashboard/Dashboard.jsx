import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import styles from './Dashboard.module.css';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../../utils';
import Notifications from '../../Notifications/Notifications';
import logo from '../../assets/ALX+PNG.png';
//import Header from '../../Header/header';
import Login from '../../Login/Login';
import Footer from '../../Footer/Footer';
import CourseList from '../../CourseList/CourseList';
import BodySectionWithMarginBottom from '../../BodySection/BodySectionWithMarginBottom';
import BodySection from '../../BodySection/BodySection';
import WithLogging from '../../HOC/WithLogging';
import backgroundImage from '../../assets/Learn.jpg';
import DashboardContext from './DashboardContext';
import { connect } from 'react-redux';





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
        ':hover': {
            animationName: {
                '0%': {
                    transform: 'translateY(0px)',
                    opacity: '0.5'
                },
                '50%': {
                    transform: 'translateY(-5px)',
                },
                '100%': {
                    transform: 'translateY(5px)',
                    opacity: 1,
                },
            },
            animationDuration: '1s',
            animationIterationCount: 3,
        },
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
    logoutSection: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 0,
        position: 'relative',
        cursor: 'pointer',
        alignItems: 'end',
        justifyContent: 'flex-end',
        height: 2,
        width: '900px',
        marginRight: 30,
        fontWeight: 'bold',
    },
    email: {
        color: 'blue',
        display: 'flex'
    },
    logout: {
        color: 'red',
        display: 'flex',
        position: 'relative',
        cursor: 'pointer',
    }

});



class Dashboard extends Component {
    static contextType = DashboardContext;

    //Adding constructors
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
        //this.handleNotificationClick = this.handleNotificationClick.bind(this);

        //Display drawer state to show Notifications
        this.state = {
            showNotifications: false,
            listNotifications: [
                { id: 1, type: 'default', value: 'New course available' },
                { id: 2, type: 'urgent', value: 'New resume available' },
                { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
            ],
            user: {
                email: '',
                password: '',
                isLoggedIn: false
            },







            // User object Logout function
            logOut: () => {
                this.setState((prevState) => ({
                    user: {
                        ...prevState.user,
                        isLoggedIn: false
                    }

                }));
            }
        }
    }


    // Adding static props
    static propTypes = {
        displayDrawer: PropTypes.bool,

    }

    //deafult props
    static defaultProps = {
        displayDrawer: false,

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
            //this.props.logOut();
        }
    }

    listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
    ];


    markNotificationAsRead(id) {
        const updatedNotifications = this.state.listNotifications.filter(
            (listNotifications) => listNotifications.id !== id
        );
        this.setState({ listNotifications: updatedNotifications });
    }




    handleNotifications = () => {

        this.setState((prevState) => ({
            showNotifications: !prevState.showNotifications,
        }));

    };

    // handleNotificationClick(id) {
    //     this.context.markNotificationAsRead(id);
    // }





    // Login function
    logIn = (email, password) => {
        this.setState({
            user: {
                email: email,
                password: password,
                isLoggedIn: true,
            },
        });
    };

    // LogOut function
    logOut = () => {
        this.setState({
            user: {
                email: '',
                password: '',
                isLoggedIn: false,
            },
        });
    };





    render() {
        //const { isLoggedIn } = this.props;
        const CourseListWithLogging = WithLogging(CourseList);
        const LoginWithLogging = WithLogging(Login);
        const { showNotifications, user, listNotifications } = this.state;
        const { logOut } = this.context;




        return (

            <DashboardContext.Provider value={{ user, logOut: this.logOut }}>
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
                                <div>

                                    <div className={css(styles.menuItem)}
                                        onClick={this.handleNotifications}

                                    >Your notifications</div>
                                    {showNotifications && <Notifications
                                        displayDrawer={showNotifications}
                                        notifications={listNotifications}
                                        handleNotifications={this.handleNotifications}
                                        markNotificationAsRead={this.markNotificationAsRead} />}


                                </div>

                            </div>
                            {/* // Create a Context API */}
                            {user.isLoggedIn && (
                                <div className={css(styles.logoutSection)}
                                    id="logoutSection"
                                    onClick={() => this.logOut()}>
                                    <span className={css(styles.email)}
                                    >
                                        Welcome , {user.email} </span>
                                    <span
                                        className={css(styles.logout)}
                                        onClick={() => logOut()}
                                    >
                                        (logout)
                                    </span>
                                </div>
                            )}

                            {/* Body  Section */}
                            {user.isLoggedIn ?
                                <BodySectionWithMarginBottom title="Course list">
                                    <CourseListWithLogging listCourses={this.listCourses} user={user} logOut={this.logOut} />
                                </BodySectionWithMarginBottom> :
                                <BodySectionWithMarginBottom title="Log in Access Full Dashboard">
                                    <LoginWithLogging logIn={this.logIn} />
                                </BodySectionWithMarginBottom>}

                            <BodySection title="News from the School">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, incidunt quibusdam laborum earum tempore impedit quis voluptatibus, quo obcaecati cumque necessitatibus rem accusamus nisi laudantium est? Eos quibusdam necessitatibus officiis.</p>
                            </BodySection>

                            {/* Footer Section */}
                            <Footer />
                        </div>
                    </div>
                </div>
            </DashboardContext.Provider>
        );

    }
}

//Connect with mapStateToProps
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.get(['ui', 'isUserLoggedIn']),
    }
}





export default connect(mapStateToProps)(Dashboard);
