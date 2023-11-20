import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import { logo, heroImg } from '../assets'
import styles from '../styles'

const pageHOC = (Component, title, descritpion) => () => {
  const navigate = useNavigate();
  return (
    <div className={styles.hocContainer}>
      <div className={styles.hocContentBox}>
        <img src={logo} alt="logo" className={styles.hocLogo} onClick={() => navigate('/')}/>
        <div className={styles.hocBodyWrapper}>
          <div className="flex flex-row w-full">
            <h1 className={`flex ${styles.headText} head-text`}>
              {title}
            </h1>
          </div>
          <p className={`${styles.normalText} my-10`}>{descritpion}</p>
          <Component />

        </div>
      </div>
    </div>
  )
}

export default pageHOC
