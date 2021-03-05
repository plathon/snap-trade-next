import React, { FC } from 'react'

import styles from './index.module.css'

const Home: FC = () => {
  return (
    <div>
      <div className={styles.topBar}>
        <span>SNAP TRADE</span>
        <a className={styles.signInButton} href="#">
          Sign In
        </a>
      </div>
    </div>
  )
}

export default Home
