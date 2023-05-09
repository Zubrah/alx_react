import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Notifications from "../Notifications/Notifications";
import { getFooterCopy, getFullYear } from '../utils'
import logo from '../assets/ALX+PNG.png';
import { useNavigate } from 'react-router-dom';
import backImage from '../assets/Learn.jpg';


// Define your styles using Aphrodite
const styles = StyleSheet.create({

    body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',

    },
    container: {
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        height: '100vh',
        width: '100%',
    },
    column1: {
        backgroundImage: `url(${backImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        marginLeft: 0,
        paddingLeft: 0,
        overflowY: 'hidden',
        overflowX: 'hidden',



    },
    column2: {
        display: 'flex',
        overflowX: 'hidden',
        position: 'relative',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    app_header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '300px',
        borderBottom: '1px  #ccc',
        marginTop: '10px',
        padding: 'auto',

    },
    logo: {
        height: '300px',
        width: '300px',
        marginTop: '20px',
        marginRight: '20px',
        marginLeft: '20px',
        marginBottom: '20px',
    },
    h1: {
        fontSize: '33px',
        fontWeight: 'bold',
        color: '#525252',
        height: '200px',
        marginLeft: '70px',
        fontFamily: 'Nunito, sans-serif',
        marginTop: '40px',

    },
    app_body: {
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 850px)',
    },
    app_body_p: {
        fontSize: '1.5rem',
        display: 'flex',
        fontWeight: 'normal',
        marginTop: '300px',
        marginRight: '120px',
        marginLeft: '120px',
    },
    body_btn: {
        marginLeft: '20px',
    },
    btn_wrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        marginLeft: '20px',
        height: '100%',

    },
    button: {
        alignItems: 'center',
        minWidth: '200px',
        minHeight: '40px',
        fontFamily: 'Nunito, sans-serif',
        fontSize: '22px',
        textTransform: 'uppercase',
        justifyContent: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        display: 'inline-flex',
        fontWeight: 'bold',
        color: 'whitesmoke',
        backgroundColor: '#186b9b',
        border: 'none',
        borderRadius: '1000px',
        boxShadow: '12px 12px 24px rgba(17, 165, 224, 0.64)',
        outline: 'none',
        position: 'relative',
        padding: '10px',









    },
    app_footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50px',
        backgroundColor: 'whitesmoke',
        borderTop: '1px solid #ccc',
        paddingTop: '20px 50px 20px',
        marginTop: '470px',
        position: 'relative',
    },

    app_footer_p: {
        fontSize: '18px',
        margin: '20px',
    },

    button_18: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#186b9b',
        border: 0,
        borderRadius: '100px',
        boxSizing: 'border-box',
        color: '#ffffff',
        cursor: 'pointer',
        display: 'inline-flex',
        fontFamily: 'Nunito, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        justifyContent: 'center',
        maxWidth: '480px',
        minWidth: '0px',
        minHeight: '40px',
        overflow: 'hidden',
        padding: '0px',
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'center',
        touchAction: 'manipulation',
        userSelect: 'none',
        verticalAlign: 'middle',
        transition: [
            'background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s',
            'box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s',
            'color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s',
        ],






    },
});

function Home() {
    const navigate = useNavigate();
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.column1)}></div>
            <div className={css(styles.column2)}>

                {/* Header Section */}
                <div className={css(styles.app_header)}>
                    <div className={css(styles.logo)}>
                        {/* Insert an image */}
                        <img src={logo} className={css(styles.logo)} alt='logo' />
                    </div>
                    <h1 className={css(styles.h1)}>School dashboard</h1>
                </div>

                {/* Body  Section */}
                <div className={css(styles.app_body)}>
                    <p className={css(styles.app_body_p)}>Let's get started to Learn, Develop projects <br /> and Join the Community of Developers! </p>
                    <div className={css(styles.body_btn)}>
                        <div className={css(styles.btn_wrap)}>
                            <div className={css(styles.button)}
                                onClick={
                                    () => navigate('/dashboard')
                                }>
                                Welcome!

                            </div>
                        </div>
                    </div>

                </div>




                {/* Footer Section */}
                <div className={css(styles.app_footer)}>
                    {/* Insert utils fuction here */}
                    <p className={css(styles.button_18)}>{getFooterCopy(true)}</p>
                    <p className={css(styles.button_18)}>{getFullYear()}</p>

                </div>
            </div >
        </div >
    );
}

export default Home;
