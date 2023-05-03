import React from "react";
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html, markAsRead, id }) {
    const color = type === 'default' ? 'blue' : 'red';

    const handleClick = () => {
        markAsRead(id);
    };

    return (
        <li data-notification-type={type} style={{ color }} onClick={handleClick}>
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
