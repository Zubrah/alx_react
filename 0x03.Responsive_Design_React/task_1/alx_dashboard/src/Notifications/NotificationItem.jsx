import React from "react";
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html, markAsRead, id }) {
    const color = type === 'default' ? 'blue' : 'red';

    const handleClick = () => {
        markAsRead(id);
    };

    return (
        <li
            data-notification-type={type}
            style={{ color }}
            onClick={handleClick}
        >
            {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : value}
        </li>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({
            __html: PropTypes.string.isRequired,
        }).isRequired,
    ]),
    value: PropTypes.string,
    html: PropTypes.oneOfType([
        PropTypes.shape({
            __html: PropTypes.string.isRequired,
        }),
        PropTypes.string,
    ]),
    markAsRead: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};


export default React.memo(NotificationItem);
