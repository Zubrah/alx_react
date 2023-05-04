import React from 'react'
//import styles from './Login.module.css'
import { StyleSheet, css } from 'aphrodite';
import { useNavigate } from 'react-router-dom';


//Aphrodite Implementations :: 
const styles = StyleSheet.create({
    app_body: {
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 'calc(100vh - 800px)'
    },
    app_body_p: {
        display: 'flex',
        fontSize: '1.5rem',
        fontWeight: 'normal',
        marginTop: '300px',
        marginRight: '100px',
        marginLeft: '170px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body_btn: {
        marginLeft: '10px'
    },
    btn_wrap: {
        height: '100%',
        display: 'flex',
        marginTop: '20px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        minWidth: '30px',
        minHeight: '40px',
        fontFamily: 'Nunito, sans-serif',
        fontSize: '15px',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: '1.3px',
        fontWeight: '700',
        color: 'whitesmoke',
        //background: '#186b9b',
        background: 'linear-gradient(90deg, rgb(17, 142, 180) 0%, rgb(13, 123, 170) 100%)',
        border: 'none',
        borderRadius: '1000px',
        boxShadow: '12px 12px 24px rgba(17, 165, 224, 0.64)',
        transition: 'all 0.3s ease-in-out 0s',
        cursor: 'pointer',
        outline: 'none',
        position: 'relative',
        padding: '10px',
        ':before': {
            content: '""',
            borderRadius: '700px',
            border: '6px solid #186b9b',
            boxShadow: '0 0 60px rgba(224, 231, 238, 0.65)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: '0',
            transition: 'all .3s ease-in-out 0s'
        },
    }
});






const Login = () => {
    const navigate = useNavigate();
    return (
        <div className={css(styles.app_body)}>
            {/* <p>Login to Access the full Dashboard  </p> */}
            <div styles={{ padding: "20px", alignItems: "center", display: "flex", width: '300px' }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    borderTop: "1px solid #ccc",
                    marginRight: "150px",
                    marginLeft: "600px",
                    padding: "10px",
                    width: "500px"

                }}>
                    <label htmlFor='email'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: "20px",
                            alignContent: 'center'
                        }}>Email Address:</label>
                    <input type='email' id='email' name='email' style={{ flexGrow: 1, }} />
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    borderTop: "1px solid #ccc",
                    marginRight: "150px",
                    marginLeft: "600px",
                    padding: "10px",
                    width: "500px"

                }}>
                    <label htmlFor='password'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: "20px",
                            alignContent: 'center',
                        }}>Password:</label>
                    <input type='password' id='password' name='password' style={{ flexGrow: 1, marginLeft: "38px", width: "40px" }} />
                </div>
            </div>
            <div className={css(styles.body_btn)}>
                <div className={css(styles.btn_wrap)}>
                    <button className={css(styles.button)}
                        onClick={() => navigate('/dashboard')}>
                        Sign In
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Login;
