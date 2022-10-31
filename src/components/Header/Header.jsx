import React from 'react'
import { headerStyles } from '../style'
import { Link, IconButton, styled, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

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
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="warning">
              <ShoppingCart sx={{ color: 'white' }} />
            </StyledBadge>
          </IconButton>

        </div>
      </div>


    </div>
  )
}

export default Header