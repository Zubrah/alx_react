import React from "react";
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html, markAsRead, id }) {
    const color = type === 'default' ? 'blue' : 'red';

    const handleClick = () => {
        //console.log(`Notification ${id} has been marked as read`);
        markAsRead(id);
    };

    return (
        <li data-notification-type={type} style={{ color }} onClick={handleClick}>
            {html ? <div dangerouslySetInnerHTML={html} /> : value}
        </li>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }),
    markAsRead: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};

export default NotificationItem;
