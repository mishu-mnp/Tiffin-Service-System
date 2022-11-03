import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux';
import tiffin8 from '../../assets/tiffin8.jpg';
import { myOrderStyle } from '../style'

const MyOrders = () => {
    const classes = myOrderStyle();


    const tiffins = useSelector((state) => state.orders.orders);
    console.log("Orders >>> ", tiffins)


    return (
        <div className='MyOrders'>
            <Container className={classes.orderContainer}>

                <h2 className={classes.title}>My Orders</h2>
                {tiffins.map((tiffin, i) => {
                    return (
                        <Card key={i} Card sx={{ display: 'flex', mb: '5px' }} className={classes.tiffinOrder}>
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

        </div>
    )
}

export default MyOrders