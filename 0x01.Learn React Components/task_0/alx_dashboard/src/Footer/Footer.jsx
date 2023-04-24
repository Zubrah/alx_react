import React from 'react'
import styles from './Footer.module.css'
import { getFooterCopy, getFullYear } from '../utils'

const Footer = () => {
    return (

        // Implement footer section
        <div className={styles.app_footer}>
            {/* Insert utils fuction here */}
            <p className={styles.button_18}>{getFooterCopy(true)}</p>
            <p className={styles.button_18}>{getFullYear()}</p>
        </div>
    )
}

export default Footer