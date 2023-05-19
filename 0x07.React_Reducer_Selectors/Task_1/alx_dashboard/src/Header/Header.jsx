import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/ALX+PNG.png';


const styles = StyleSheet.create({
    app_header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        height: '200px',
        borderBottom: '1px solid #ccc',
        marginTop: '10px',
        position: 'fixed',

    },
    h1: {
        fontSize: '2rem',
        fontWeight: 'bold',
        height: '200px',
        marginLeft: '70px',
        fontFamily: 'Nunito, sans-serif',
    },
    logo: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        marginRight: '20px',
        marginLeft: '20px',
        marginBottom: '20px',
        position: 'relative',
        '@media (max-width: 900px)': {
            width: '50px',
            height: '50px',
        }
    },
    logoutSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
    },
    email: {
        fontWeight: 'bold',
        marginRight: '5px',
    },
    logout: {
        color: 'blue',
        cursor: 'pointer',
    }
});

class Header extends React.Component {

    render() {

        return (
            <div className={css(styles.app_header)}>
                <div className={css(styles.logo)}>
                    <img src={logo} alt="logo" className={css(styles.logo)} />
                </div>
                <h1 className={css(styles.h1)}>School dashboard</h1>

            </div>
        );
    }
}

export default Header;

