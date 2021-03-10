import React, { FC } from 'react'
import Link from 'next/link'

import styles from './signup.module.css'

const Signup: FC = () => {
  return (
    <>
      <Link href="/">
        <a className={styles.backIcon}>
          <i className="far fa-arrow-alt-circle-left"></i>
        </a>
      </Link>
      <div className={styles.signUpPage}>
        <div>
          <h1>Sign Up now for free! ;)</h1>
        </div>
        <div>
          <form>
            <div>
              <p>Name</p>
              <input type="text" name="name" />
            </div>
            <div>
              <p>Email</p>
              <input type="email" name="email" />
            </div>
            <div>
              <p>Password</p>
              <input type="password" name="password" />
            </div>
            <button>Register</button>

            <Link href="/signin">
              <a>already have a account?</a>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
