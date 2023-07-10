import React, { PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";
import CloseButton from '../assets/close-icon.jpeg';
import NotificationItem from './NotificationItem';
import { connect } from 'react-redux';
import { fetchNotifications } from "../actions/notificationActionCreators";

const styles = StyleSheet.create({
    Notifications: {
        position: 'relative',
        border: '1px dotted black',

        padding: '10px',
        bottom: '0',
        right: '10px',
        left: '20px',
        width: '500px',
        margin: '10px 50px',
        textAlign: 'start',
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
            position: 'absolute',
            top: '20px',
            left: '0',
            width: '98.7%',
            //border: 'none',
            height: '100%',
            padding: '0px',
            fontSize: '20px',
            paddingRight: 0,
            marginRight: '30px',
            marginLeft: '5px',
            background: "#ccc",




        }
    },
    Notifications_p: {
        textAlign: 'center',
        border: 'none',
    },
    closeButton: {
        position: 'absolute',
        right: '0',
        top: '0',
        margin: '1rem',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        outline: 'none',
        display: 'block',
        '@media (max-width: 900px)': {
            display: 'block',
        }
    },
    closeButton_img: {
        width: '20px',
        height: '20px',
    },
});

class Notifications extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: true,
        };
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleNotifications = this.handleNotifications.bind(this); // Define the handleNotifications function

    }

    //Component did mount 
    componentDidMount() {
        const { fetchNotifications } = this.props;
        fetchNotifications();
    }



    handleDisplayDrawer() {
        this.setState((prevState) => ({
            isDrawerOpen: !prevState.isDrawerOpen,
        }));
    }

    handleNotifications() {
        this.setState({
            displayDrawer: true,
        });
    }

    render() {
        const { displayDrawer, notifications, markNotificationAsRead, handleNotifications } = this.props;
        const { isDrawerOpen } = this.state;

        return (
            <div className={css(styles.Notifications)}>
                <div
                    className={css(styles.closeButton)}
                    aria-label="Close"
                    onClick={() => {
                        if (window.innerWidth > 900) {
                            console.log('Close button has been clicked');
                            handleNotifications();
                        } else {
                            handleNotifications();
                        }
                    }}
                >
                    <img
                        className={css(styles.closeButton_img)}
                        src={CloseButton}
                        alt="Close"
                    />
                </div>
                {displayDrawer ? (
                    <ul style={{ display: isDrawerOpen ? 'block' : 'none', padding: '20px', }}>
                        {notifications.length === 0 ? (
                            <p className={css(styles.Notifications_p)}>
                                No new notifications!
                            </p>
                        ) : (
                            notifications.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    id={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                    markAsRead={markNotificationAsRead} // pass the function as a prop
                                />
                            ))
                        )}
                    </ul>
                ) : (
                    <p className={css(styles.Notifications_p)}>
                        No new notifications!
                    </p>
                )}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    notifications: state.notifications.notifications
});

const mapDispatchToProps = (dispatch) => ({
    fetchNotifications: () => dispatch(fetchNotifications()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);