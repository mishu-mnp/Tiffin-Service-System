import React from 'react'
import { headerStyles } from '../style'
import { IconButton, styled, Badge, Avatar, Button } from '@mui/material';
import { Person, ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

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


  const navigate = useNavigate();


  const baseURL = 'http://localhost:5000'


  const handleLogin = () => {
    navigate('/login')
  }

  const token = localStorage.getItem("token")
  const user = localStorage.getItem("user")
  console.log(token)

  const handleLogout = async () => {
    await axios.post(`${baseURL}/user/logout`).then((response) => {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      navigate('/')
    }).catch(err => {
      alert(err)
    })
  }

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
            {/* <Link to='/login' className={classes.link}>Login</Link> */}
            {token ?
              <Button size='large' color="error" onClick={handleLogout} variant='contained'>Logout</Button> :
              <Button size='large' color="success" onClick={handleLogin} variant='contained'>Login</Button>
            }
          </div>
          {/* <div className={classes.nav_item}>
            <Link to='/register' className={classes.link}>Register</Link>
          </div> */}
          <Avatar sx={{ bgcolor: 'purple' }}>
            {token && <Person />}
          </Avatar>
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