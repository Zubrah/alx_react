import React from "react";
import styles from './App.module.css';
import CloseButton from './assets/close-icon.jpeg'
import { getLatestNotification } from './utils'



function Notifications() {
    return (

        <div className={styles.Notifications}>
            {/* Implement the code here for Get Latest Notification */}
            <div
                style={{
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    margin: '1rem',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: "pointer",
                    outline: "none",
                }}
                aria-label="Close"
                onClick={() => console.log('Close button has been clicked')}
            >
                <img src={CloseButton}
                    alt="Close"
                    style={{
                        width: '20px',
                        height: '20px',

                    }}
                />
            </div>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default" style={{ color: "blue" }}>New course available</li>
                <li data-priority="urgent" style={{ color: "red" }}>New resume available</li>
                <li style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>







    );
}

export default Notifications;
