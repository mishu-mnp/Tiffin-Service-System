import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { cartStyle, orderNowStyle } from '../style'
import tiffin8 from '../../assets/tiffin8.jpg';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const OrderNow = () => {

    const classes = orderNowStyle();
    const classes2 = cartStyle();

    const { id } = useParams();
    const baseURL = 'http://localhost:5000'

    const [tiffin, setTiffin] = useState({})

    // fetch tiffin by ID
    const fetchTiffin = async () => {
        await axios.get(`${baseURL}/cart/item/${id}`).then(res => {
            console.log(res.data)
            setTiffin(res.data);
        }).catch(err => {
            alert(err.message)
        })
    }

    console.log(tiffin)

    useEffect(() => {
        fetchTiffin()
    }, [])

    const user = JSON.parse(localStorage.getItem('user'));


    return (
        <div className={classes.orderNow}>
            <h1 className={classes.title}>Order Now</h1>
            <div className={classes.container}>
                <div className={classes.left}>
                    <Typography className={classes.subtitle} component='h2'>Tiffin Items</Typography>
                    <Card key={2} Card sx={{ display: 'flex', mb: '5px' }} className={classes2.tiffinCart}>
                        <CardMedia
                            component="img"
                            sx={{ width: 300 }}
                            image={tiffin.img}
                            alt="Tiffin"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="p" variant="h5" sx={{ fontSize: '16px !important' }}>
                                    Desc: {`Veg Matar Paneer with 3 Tandoori Roti` || tiffin.desc}
                                </Typography>
                                <Typography component='p'>
                                    Qty: {tiffin.quantity}
                                </Typography>
                                {tiffin.fixed && (
                                    // {true && (
                                    <>
                                        <Typography component='p'>
                                            Days: {tiffin.days}
                                        </Typography>
                                        <Typography component='p'>
                                            Shift: {tiffin.shift.lunch && 'Lunch'} {tiffin.shift.lunch && tiffin.shift.dinner && '+'} {tiffin.shift.dinner && 'Dinner'}
                                            {/* {`Shift: Lunch + Dinner`} */}
                                        </Typography>
                                    </>
                                )}
                                <Typography variant="subtitle1" color="text.secondary" component="p">
                                    Price: {tiffin.price}
                                    {/* Price: {120} */}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </div>
                <div className={classes.right}>
                    <Typography className={classes.subtitle} component='h2'>Order Summary</Typography>
                    <div className={classes.details}>
                        {/* <Typography>Name: John Doe</Typography>
                        <Typography>Address: Aakash Enjoy Residency</Typography>
                        <Typography>Total: 520</Typography> */}

                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Name: {user.name}
                                </Typography>
                                <Typography variant="h5" component="p">
                                    Address: {user.address}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} variant="h5" color="text.secondary">
                                    Total: {tiffin.quantity * tiffin.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.rightBtn} variant="contained" color="success">Pay Now</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderNow