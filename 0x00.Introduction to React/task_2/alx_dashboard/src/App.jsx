import React from 'react';
import styles from './App.module.css';
import { getFooterCopy, getFullYear } from './utils'
import Notifications from "./Notifications";
import logo from './assets/ALX+PNG.png';

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.column1}></div>
            <div className={styles.column2}>

                {/* Header Section */}
                <div className={styles.app_header}>
                    <div className={styles.logo}>
                        {/* Insert an image */}
                        <img src={logo} className={styles.logo} alt='logo' />
                    </div>
                    <h1>School dashboard</h1>
                </div>

                {/* Body  Section */}
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
                            padding: "10px"

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
                            padding: "10px"

                        }}>
                            <label htmlFor='password'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginRight: "20px",
                                    alignContent: 'center'
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

                {/* Notification Section Here!! */}
                <Notifications />


                {/* Footer Section */}
                <div className={styles.app_footer}>
                    {/* Insert utils fuction here */}
                    <p className={styles.button_18}>{getFooterCopy(true)}</p>
                    <p className={styles.button_18}>{getFullYear()}</p>






                </div>
            </div >
        </div >
    );
}

export default App;
