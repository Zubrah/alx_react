import React from 'react'
import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.app_body}>
            <p>Login to Access the full Dashboard  </p>
            <div styles={{ padding: "20px", alignItems: "center", display: "flex" }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    borderTop: "1px solid #ccc",
                    marginRight: "150px",
                    marginLeft: "200px",
                    padding: "10px",

                }}>
                    <label htmlFor='email'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: "20px",
                            alignContent: 'center'
                        }}>Email Address:</label>
                    <input type='email' id='email' name='email' style={{ flexGrow: 1 }} />
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    borderTop: "1px solid #ccc",
                    marginRight: "150px",
                    marginLeft: "200px",
                    padding: "10px",

                }}>
                    <label htmlFor='password'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: "20px",
                            alignContent: 'center',
                        }}>Password:</label>
                    <input type='password' id='password' name='password' style={{ flexGrow: 1, marginLeft: "38px" }} />
                </div>
            </div>
            <div className={styles.body_btn}>
                <div className={styles.btn_wrap}>
                    <button className={styles.button}>
                        Sign In

                    </button>
                </div>
            </div>

        </div>
    )
}

export default Login