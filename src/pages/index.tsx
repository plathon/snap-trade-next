import React, { FC } from 'react'

import styles from './index.module.css'

const Home: FC = () => {
  return (
    <div>
      <div className={styles.topBar}>
        <span className={styles.title}>SNAP TRADE</span>
        <a className={styles.signInButton} href="#">
          Sign In
        </a>
      </div>
      <div className={styles.hero}>
        <div>
          <h1>SNAP TRADE</h1>
          <p>
            Apply algorithms and professional metrics to evaluate
            <br />
            your strategies and validate your trade system
          </p>
          <div className={styles.actions}>
            <a href="#">Sign Up Now!</a>
          </div>
        </div>
      </div>
      <div className={styles.more}>
        <a href="#">
          <i className="fas fa-chevron-down animate__animated animate__bounce animate__repeat-3"></i>
        </a>
      </div>
    </div>
  )
}

export default Home
