import React, { Component } from "react";
import styles from '../Dashboard.module.css';
import CloseButton from '../assets/close-icon.jpeg'
import { getLatestNotification } from '../utils'
import NotificationItem from './NotificationItem'

class Notifications extends Component {

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { displayDrawer } = this.props;

        return (
            <div className={styles.Notifications}>
                <div
                    style={{
                        position: 'absolute',
                        right: '0',
                        top: '0',
                        margin: '1rem',
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        outline: 'none',
                    }}
                    aria-label="Close"
                    onClick={() => console.log('Close button has been clicked')}
                >
                    <img
                        src={CloseButton}
                        alt="Close"
                        style={{
                            width: '20px',
                            height: '20px',
                        }}
                    />
                </div>
                {displayDrawer ? (
                    <ul>
                        {/* Update the li tags with NotificationItems */}
                        <NotificationItem type="urgent" value="New course available" markAsRead={this.markAsRead} id={1} />
                        <NotificationItem type="default" value="New resume available" markAsRead={this.markAsRead} id={2} />
                        <NotificationItem html={{ __html: getLatestNotification() }} markAsRead={this.markAsRead} id={3} />
                    </ul>
                ) : (
                    <p>No new notifications!</p>
                )}
            </div>
        );
    }
}

export default Notifications;
