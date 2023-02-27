import React from 'react'
import { headerStyles } from '../style'
import { IconButton, styled, Badge, Avatar } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

  const items = useSelector((state) => state.cart.tiffins.length);
  console.log("Total Items", items);

  return (
    <div className={classes.Header}>
      <div className={classes.nav}>
        <div className="left">
          <div className={classes.nav_menu}>
            <div className={classes.nav_item}>
              <Link to='/' className={classes.link}>Home</Link>
            </div>
            <div className={classes.nav_item}>
              <Link to='/myorders' className={classes.link}>MyOrders</Link>
            </div>
            <div className={classes.nav_item}>
              <Link to='/about' className={classes.link}>About</Link>
            </div>
            <div className={classes.nav_item}>
              <Link to='/contact' className={classes.link}>Contact</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className={classes.nav_menu}>
          <div className={classes.nav_item}>
            <Link to='/login' className={classes.link}>Login</Link>
          </div>
          {/* <div className={classes.nav_item}>
            <Link to='/register' className={classes.link}>Register</Link>
          </div> */}
          <Avatar sx={{ bgcolor: 'purple' }}>{"vaibhav"[0].toUpperCase() + "mishra"[0].toUpperCase()}</Avatar>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={items} color="warning">
              <Link to='/cart'>
                <ShoppingCart sx={{ color: 'white' }} />
              </Link>
            </StyledBadge>
          </IconButton>
        </div>
      </div>


    </div>
  )
}

export default Header