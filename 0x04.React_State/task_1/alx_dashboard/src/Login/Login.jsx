import React, { Component } from 'react';
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
        height: 'calc(100vh - 800px)',
        '@media (max-width: 900px)': {
            height: 'calc(100vh - 600px)',

        }
    },
    app_body_p: {
        display: 'flex',
        fontSize: '1.5rem',
        fontWeight: 'normal',
        marginTop: '50px',
        marginRight: '100px',
        marginLeft: '170px',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-width: 900px)': {
            marginTop: '0px',
            marginLeft: '10px',
            marginRight: '10px',
            alignItems: 'center',

        }
    },
    body_btn: {
        marginLeft: '100px'
    },
    btn_wrap: {
        height: '100%',
        display: 'flex',
        marginTop: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '650px',
        width: '400px'
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
    },

    form: {
        padding: "20px",
        alignItems: "center",
        display: "flex run-in",
        width: '300px',
        flexDirection: "column",
        justifyContent: "center",
        '@media (max-width: 900px)': {
            width: '50px',
            display: 'flex',
            marginLeft: '0px',
            marginRight: '0px',
        }

    },
    form_h: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderTop: "1px solid #ccc",
        marginRight: "150px",
        marginLeft: "600px",
        padding: "20px",
        width: "500px",
        marginBottom: "20px",
        '@media (max-width: 900px)': {
            width: '400px',
            display: 'flex',
            marginRight: '100px',
            marginLeft: '750px'
        }


    },
    form_label: {
        display: 'flex',
        alignItems: 'center',
        marginRight: "20px",
        alignContent: 'center'

    },
    form_input: {
        flexGrow: 1,
        '@media (max-width: 900px)': {
            width: '20px',
            display: 'flex',
        }


    },
    form_input_p: {
        flexGrow: 1,
        marginLeft: "38px",
        width: "40px"


    },







});








class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            enableSubmit: false,
        };
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        this.setState({ isLoggedIn: true });
        console.log("isLoggedIn State : ", this.state.isLoggedIn);
    };

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value }, () => {
            if (this.state.email !== '' && this.state.password !== '') {
                this.setState({ enableSubmit: true });
                console.log("when Email is true : ", this.state.enableSubmit)
            } else {
                this.setState({ enableSubmit: false });
                console.log("when  Email is false : ", this.state.enableSubmit)
            }
        });
    };

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value }, () => {
            if (this.state.email !== '' && this.state.password !== '') {
                this.setState({ enableSubmit: true });
                console.log("when Pass true change: ", this.state.enableSubmit)
            } else {
                this.setState({ enableSubmit: false });
                console.log("when Pass false change: ", this.state.enableSubmit)
            }
        });
    };

    render() {
        const { isLoggedIn, enableSubmit } = this.state;

        return (
            <div className={css(styles.app_body)}>
                <p className={css(styles.app_body_p)}>Login to Dashboard </p>
                <form onSubmit={this.handleLoginSubmit} className={css(styles.form)}>
                    <div className={css(styles.form_h)}>
                        <label htmlFor='email' className={css(styles.form_label)}>
                            Email Address:
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className={css(styles.form_input)}
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                        />
                    </div>
                    <div className={css(styles.form_h)}>
                        <label htmlFor='password' className={css(styles.form_label)}>
                            Password:
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            className={css(styles.form_input_p)}
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                        />
                    </div>
                    <div className={css(styles.body_btn)}>
                        <div className={css(styles.btn_wrap)}>
                            <button className={css(styles.button)} disabled={!enableSubmit}>Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;