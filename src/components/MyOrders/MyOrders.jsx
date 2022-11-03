import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system'
import React from 'react'
import tiffin8 from '../../assets/tiffin8.jpg';
import { myOrderStyle } from '../style'

const MyOrders = () => {
    const classes = myOrderStyle();


    return (
        <div className='MyOrders'>
            <Container className={classes.orderContainer}>

                <h2 className={classes.title}>My Orders</h2>
                <Card sx={{ display: 'flex', mb: '5px' }} className={classes.tiffinOrder}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={tiffin8}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="p" variant="h5">
                                Desc: {'Veg Punjabi Thali'}
                            </Typography>
                            <Typography component='p'>
                                Qty: {2}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="p">
                                Price: {120}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', mb: '5px' }} className={classes.tiffinOrder}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={tiffin8}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="p" variant="h5">
                                Desc: {'Veg Punjabi Thali'}
                            </Typography>
                            <Typography component='p'>
                                Qty: {2}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="p">
                                Price: {120}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', mb: '5px' }} className={classes.tiffinOrder}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={tiffin8}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="p" variant="h5">
                                Desc: {'Veg Punjabi Thali'}
                            </Typography>
                            <Typography component='p'>
                                Qty: {2}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="p">
                                Price: {120}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>

            </Container>

        </div>
    )
}

export default MyOrders