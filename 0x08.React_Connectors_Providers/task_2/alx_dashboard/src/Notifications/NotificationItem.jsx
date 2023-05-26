import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    default: {
        color: 'blue',
    },
    urgent: {
        color: 'red',
    },
});

function NotificationItem({ type, value, html, markAsRead, id }) {
    const handleClick = () => {
        markAsRead(id);
    };

    const notificationStyle = type === 'default' ? styles.default : styles.urgent;

    return (
        <li className={css(notificationStyle)} onClick={handleClick}>
            {html ? <div dangerouslySetInnerHTML={html} /> : value}
        </li>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number,
};

export default React.memo(NotificationItem);
