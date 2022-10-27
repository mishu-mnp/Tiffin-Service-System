import React from 'react'
import { headerStyles } from '../style'

const Header = () => {
  const classes = headerStyles();

  return (
    <div className={classes.Header}>
      <div className={classes.nav}>
        <div className="left">
          <div className={classes.nav_menu}>
            <div className={classes.nav_item}>Home</div>
            <div className={classes.nav_item}>About</div>
            <div className={classes.nav_item}>Contact</div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className={classes.nav_menu}>
          <div className={classes.nav_item}>Login</div>
          <div className={classes.nav_item}>Register</div>
        </div>
      </div>


    </div>
  )
}

export default Header