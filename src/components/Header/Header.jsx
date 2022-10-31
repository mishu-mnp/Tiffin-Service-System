import React from 'react'
import { headerStyles } from '../style'
import { Link } from '@mui/material';

const Header = () => {
  const classes = headerStyles();

  return (
    <div className={classes.Header}>
      <div className={classes.nav}>
        <div className="left">
          <div className={classes.nav_menu}>
            <div className={classes.nav_item}>
              <Link href='/' className={classes.link}>Home</Link>
            </div>
            <div className={classes.nav_item}>
              <Link href='/about' className={classes.link}>About</Link>
            </div>
            <div className={classes.nav_item}>
              <Link href='/contact' className={classes.link}>Contact</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className={classes.nav_menu}>
          <div className={classes.nav_item}>
            <Link href='/login' className={classes.link}>Login</Link>
          </div>
          <div className={classes.nav_item}>
            <Link href='/register' className={classes.link}>Register</Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Header