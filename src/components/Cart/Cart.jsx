import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import tiffin8 from '../../assets/tiffin8.jpg';
import { removeFromCart } from '../../redux/cartSlice';
import { addToOrder } from '../../redux/orderSlice';
import { cartStyle } from '../style'

const Cart = () => {
    const classes = cartStyle();

    const tiffins = useSelector((state) => state.cart.tiffins);
    console.log("Tiffins >>> ", tiffins);

    // remove item from cart
    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(removeFromCart(id))
        console.log('ID >>> ', id)
    }

    const orderTiffin = (id) => {
        let tfData = tiffins.find(tf => tf.tiffinId === id)
        dispatch(addToOrder(tfData))
        removeItem(id);
        console.log("TF Data >>> ", tfData)
        console.log("ID >>> ", id)
    }
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
                                        Qty: {tiffin.qty}
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
                                        <Button variant="contained" className={classes.addToCart} onClick={() => removeItem(tiffin.tiffinId)}>
                                            Remove
                                        </Button>
                                        <Button variant="contained" className={classes.orderNow} onClick={() => orderTiffin(tiffin.tiffinId)}>
                                            Order Now
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