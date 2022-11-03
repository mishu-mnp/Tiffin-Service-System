import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Container } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux';
import tiffin8 from '../../assets/tiffin8.jpg';
import { cartStyle } from '../style'

const Cart = () => {
    const classes = cartStyle();

    const tiffins = useSelector((state) => state.cart.tiffins);
    console.log("Tiffins >>> ", tiffins);


    return (
        <div className='cart'>
            <Container className={classes.cartContainer}>

                <h2 className={classes.title}>Your Cart</h2>
                {tiffins.map(tiffin => {
                    return (
                        <Card key={tiffin.id} Card sx={{ display: 'flex', mb: '5px' }} className={classes.tiffinCart}>
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
                                </CardContent>
                            </Box>
                        </Card>)
                })}
            </Container>
        </div >
    )
}

export default Cart