import React from "react";
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html }) {

    //Implement the color properties
    const color = type === 'default' ? 'blue' : 'red';

    return (
        <li data-notification-type={type} style={{ color }}>
            {html ? <div dangerouslySetInnerHTML={html} /> : value}
        </li>
    );
}

// NotificationItem Props 
NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }),
};

export default NotificationItem;
