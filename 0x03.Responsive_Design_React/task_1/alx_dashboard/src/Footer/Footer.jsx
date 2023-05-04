import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { getFooterCopy, getFullYear } from '../utils'

const styles = StyleSheet.create({
    appFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        padding: '1rem',
        borderTop: '0.5px solid #ccc',
        marginTop: '1000px',
        height: '100px',
        position: 'fixed',
        width: '160vh',
    },
    button18: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        paddingLeft: '20px',
        paddingRight: '20px',
        minHeight: '40px',
        minWidth: 0,
        overflow: 'hidden',
        border: 0,
        borderRadius: '100px',
        color: '#ffffff',
        backgroundColor: '#186b9b',
        fontFamily: '-apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '20px',
        maxWidth: '480px',
        textAlign: 'center',
        touchAction: 'manipulation',
        transition: 'background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        verticalAlign: 'middle',
        ':hover': {
            backgroundColor: '#16437E',
            color: '#ffffff',
        },
        ':focus': {
            backgroundColor: '#16437E',
            color: '#ffffff',
        },
        ':active': {
            backgroundColor: '#09223b',
            color: 'rgba(255, 255, 255, 0.7)',
        },
        ':disabled': {
            cursor: 'not-allowed',
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            color: 'rgba(0, 0, 0, 0.3)',
        },
    },
})

const Footer = () => {
    return (
        <div className={css(styles.appFooter)}>
            <p className={css(styles.button18)}>{getFooterCopy(true)}</p>
            <p className={css(styles.button18)}> © {getFullYear()}</p>
        </div>
    )
}

export default Footer
