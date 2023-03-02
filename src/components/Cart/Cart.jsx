import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import tiffin8 from '../../assets/tiffin8.jpg';
import { removeFromCart, updateQuantity } from '../../redux/cartSlice';
import { addToOrder } from '../../redux/orderSlice';
import { cartStyle } from '../style'

const Cart = () => {
    const classes = cartStyle();

    // const tiffins = useSelector((state) => state.cart.tiffins);
    // console.log("Tiffins >>> ", tiffins);

    const baseURL = 'http://localhost:5000'

    // remove item from cart
    const dispatch = useDispatch();



    const navigate = useNavigate();

    // const orderTiffin = (id) => {
    //     // let tfData = tiffins.find(tf => tf.tiffinId === id)
    //     // dispatch(addToOrder(tfData))
    //     // removeItem(id);

    //     navigate('/order/');
    //     // console.log("TF Data >>> ", tfData)
    //     console.log("ID >>> ", id)
    // }

    const user = JSON.parse(localStorage.getItem("user"));
    // const userID = user._id;
    // console.log("Useris ", user);
    console.log("User id is ", user._id);



    // fetching cart items
    const [tiffins, setTiffins] = useState([]);

    const getCartItems = async () => {
        console.log("getting cart items")

        await axios.get(`${baseURL}/cart/items/${user._id}`).then((res) => {
            console.log("Tiffins ", res.data)
            setTiffins(res.data)
            dispatch(updateQuantity(res.data.length))
        }).catch(err => {
            alert(err.message)
        })
    }

    // remove tiffins from Cart
    const removeItem = async (id) => {
        // dispatch(removeFromCart(id))
        // console.log('ID >>> ', id)

        await axios.delete(`${baseURL}/cart/remove/${id}`).then(res => {
            console.log(res.data);
            setTiffins(tiffins.filter(tiffin => tiffin._id != id))
            alert("Item Deleted Successfully")
        }).catch(err => {
            alert(err.message)
        })

    }

    useEffect(() => {
        getCartItems()
    }, [])

    return (
        <div className='cart'>
            <Container className={classes.cartContainer}>

                <h2 className={classes.title}>Your Cart</h2>
                {tiffins.map((tiffin, i) => {
                    return (
                        <Card key={i} Card sx={{ display: 'flex', mb: '5px' }} className={classes.tiffinCart}>
                            <CardMedia
                                component="img"
                                sx={{ width: 300 }}
                                image={tiffin.img}
                                alt="Tiffin"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="p" variant="h5" sx={{ fontSize: '16px !important' }}>
                                        Desc: {tiffin.desc}
                                    </Typography>
                                    <Typography component='p'>
                                        Qty: {tiffin.quantity}
                                    </Typography>
                                    {tiffin.fixed && (
                                        <>
                                            <Typography component='p'>
                                                Days: {tiffin.days}
                                            </Typography>
                                            <Typography component='p'>
                                                Shift: {tiffin.shift.lunch && 'Lunch'} {tiffin.shift.lunch && tiffin.shift.dinner && '+'} {tiffin.shift.dinner && 'Dinner'}
                                            </Typography>
                                        </>
                                    )}
                                    <Typography variant="subtitle1" color="text.secondary" component="p">
                                        Price: {tiffin.price}
                                    </Typography>
                                    <Stack direction="row" spacing={2} className={classes.tiffinBtn}>
                                        <Button variant="contained" className={classes.addToCart} onClick={() => removeItem(tiffin._id)}>
                                            Remove
                                        </Button>
                                        <Button variant="contained" className={classes.orderNow}>
                                            <Link to={`/order/${tiffin._id}`}>Order Now</Link>
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Box>
                        </Card>)
                })}
            </Container>
        </div >
    )
}

export default Cart