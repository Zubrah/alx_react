import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import CloseButton from '../assets/close-icon.jpeg';
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';

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

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
        };
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    handleDisplayDrawer() {
        this.setState((prevState) => ({
            isDrawerOpen: !prevState.isDrawerOpen,
        }));
    }

    render() {
        const { displayDrawer } = this.props;
        const { isDrawerOpen } = this.state;

        return (
            <div className={css(styles.Notifications)}>
                <div
                    className={css(styles.closeButton)}
                    aria-label="Close"
                    onClick={() => {
                        if (window.innerWidth > 900) {
                            console.log('Close button has been clicked');
                            this.handleDisplayDrawer();
                        } else {
                            this.handleDisplayDrawer();
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
                        <NotificationItem
                            type="urgent"
                            value="New course available"
                            markAsRead={this.markAsRead}
                            id={1}
                        />
                        <NotificationItem
                            type="default"
                            value="New resume available"
                            markAsRead={this.markAsRead}
                            id={2}
                        />
                        <NotificationItem
                            html={{ __html: getLatestNotification() }}
                            markAsRead={this.markAsRead}
                            id={3}
                        />
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

export default Notifications;
