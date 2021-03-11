import React, { FC } from 'react'
import Link from 'next/link'

import styles from './index.module.css'

const Home: FC = () => {
  return (
    <div>
      <div className={styles.topBar}>
        <span className={styles.title}>SNAP TRADE</span>
        <Link href="/signin">
          <a className={styles.signInButton}>Sign In</a>
        </Link>
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
            <Link href="/signup">
              <a>Sign Up Now!</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.more}>
        <p>Need help?</p>
        <a href="#contact">
          <i className="fas fa-chevron-down animate__animated animate__bounce animate__repeat-3"></i>
        </a>
      </div>
      <div id="contact" className={styles.contact}>
        <h2>Contact</h2>
        <p>Lets talk!</p>
        <form>
          <div className={styles.fluidInputs}>
            <div>
              <p>Name</p>
              <input type="text" name="name" />
            </div>
            <div>
              <p>Email</p>
              <input type="email" name="email" />
            </div>
          </div>
          <div>
            <p>Message</p>
            <textarea rows={10} name="message" />
            <button>Send</button>
          </div>
        </form>
      </div>
      <div className={styles.footer}>
        <p>Snap Trade © 2021.</p>
      </div>
    </div>
  )
}

export default Home
