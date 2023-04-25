import React from "react";
import styles from '../App.module.css';
import CloseButton from '../assets/close-icon.jpeg'
import { getLatestNotification } from '../utils'
import NotificationItem from './NotificationItem'

function Notifications({ displayDrawer }) {
    const color = displayDrawer ? 'black' : null;

    return (
        // Implement the Notification section
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
            <p>Here is the list of notifications</p>

            <ul>
                {/* Update the li tags with NotificationItems */}
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem html={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
}

export default Notifications;
