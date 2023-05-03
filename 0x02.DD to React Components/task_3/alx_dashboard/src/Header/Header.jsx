import React from 'react'
import styles from './Header.module.css'
import logo from '../assets/ALX+PNG.png'

const Header = () => {
    return (
        <div className={styles.app_header}>
            <div className={styles.logo}>
                {/* Insert an image */}
                <img src={logo} className={styles.logo} alt='logo' />
            </div>
            <h1>School dashboard</h1>
        </div>
    )
}

export default Header