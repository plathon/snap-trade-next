import React, { FC } from 'react'
import Link from 'next/link'

import styles from './signin.module.css'

const Signin: FC = () => {
  return (
    <>
      <Link href="/">
        <a className={styles.backIcon}>
          <i className="far fa-arrow-alt-circle-left"></i>
        </a>
      </Link>
      <div className={styles.signInPage}>
        <div>
          <h1>Sign In with your credentials! ;)</h1>
        </div>
        <div>
          <form>
            <div>
              <p>Email</p>
              <input type="email" name="email" />
            </div>
            <div>
              <p>Password</p>
              <input type="password" name="password" />
            </div>
            <button>Log In</button>

            <Link href="/signup">
              <a>don&apos;t have a account yet?</a>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin
