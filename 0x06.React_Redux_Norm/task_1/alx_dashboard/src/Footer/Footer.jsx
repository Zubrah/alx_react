import React, { useContext } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { getFooterCopy, getFullYear } from '../utils'
import DashboardContext from '../pages/Dashboard/DashboardContext'

const styles = StyleSheet.create({
    appFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        padding: '1rem',
        borderTop: '0.5px solid #ccc',
        marginTop: '710px',
        height: '50px',
        position: 'fixed',
        width: '92%',
        '@media (max-width: 900px)': {
            width: '90.5%',
        }
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
        fontFamily: '-apple-system, system-ui, system-ui',
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
    link: {
        color: 'white',
        textDecoration: 'none',
    }
})

const Footer = () => {
    const { user } = useContext(DashboardContext);

    return (
        <div className={css(styles.appFooter)}>
            <p className={css(styles.button18)}>{getFooterCopy(true)}</p>
            {user.isLoggedIn && <p className={css(styles.button18)}
                onClick={{}}>Contact us!</p>}
            <p className={css(styles.button18)}>© {getFullYear()}</p>
        </div>
    )
}

export default Footer
