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
    },
    closeButton_img: {
        width: '20px',
        height: '20px',
    },
});

class Notifications extends Component {
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { displayDrawer } = this.props;

        return (
            <div className={css(styles.Notifications)}>
                <div
                    className={css(styles.closeButton)}
                    aria-label="Close"
                    onClick={() => console.log('Close button has been clicked')}
                >
                    <img
                        className={css(styles.closeButton_img)}
                        src={CloseButton}
                        alt="Close"
                    />
                </div>
                {displayDrawer ? (
                    <ul>
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
