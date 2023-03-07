import React from 'react';
import { tiffinStyles } from '../style';
// import tiffin2 from '../../assets/tiffin2.jpg'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import { AddCircleOutline, CurrencyRupee, FlashOn, RemoveCircleOutline, ShoppingCart } from '@mui/icons-material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { tiffinData } from '../../static/data';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { addToOrder } from '../../redux/orderSlice';
import axios from 'axios';

const Tiffin = () => {
    const classes = tiffinStyles();

    const { id } = useParams();
    console.log("Tiffin ID >>> ", id)
    // Fixed Tiffin
    const [checked, setChecked] = useState(false);

    const handleFixedChange = (event) => {
        setChecked(event.target.checked);
    };


    // Days Count 
    const [daysCount, setDaysCount] = useState('');

    function handleDaysChange(event) {
        if (event.target.value === daysCount) {
            setDaysCount("");
        } else {
            setDaysCount(event.target.value);
        }
    }

    console.log(daysCount)

    // Tiffin Timing
    const [timeShift, setTimeShift] = useState({
        lunch: true,
        dinner: false
    });

    const handleTimeShiftChange = (event) => {
        setTimeShift({
            ...timeShift,
            [event.target.name]: event.target.checked,
        });
    };

    const { lunch, dinner } = timeShift;
    console.log("Timeshift >>> ", timeShift)


    // Tiffin Quantity
    const [quantity, setQuantity] = useState(1)
    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1)
        } else {
            alert('You can order upto 10 Tiffins only')
        }
    }
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    const [tfData, setTfData] = useState({
        id: "",
        img: "",
        desc: "",
        price: ""
    });

    const getTiffinData = () => {
        setTfData(tiffinData.find(tf => tf.id === id));
    }

    useEffect(() => {
        getTiffinData();
    }, []);


    // address 
    const [address, setAddress] = useState("");

    const handleOnchange = (e) => {
        setAddress(e.target.value)
    }

    // order now button
    const dispatch = useDispatch();
    const [orderData, setOrderData] = useState({});
    const [cartData, setCartData] = useState({});

    const orderNow = () => {
        let data = {
            tiffinId: id,
            desc: tfData.desc,
            price: tfData.price,
            img: tfData.img,
            addr: address,
            qty: quantity,
            shift: timeShift,
            fixed: checked,
            days: daysCount
        }

        setOrderData(data);
        dispatch(addToOrder(data))
    }

    console.log(orderData);

    const baseURL = 'http://localhost:5000'

    const addCart = async () => {
        const token = localStorage.getItem("token")
        if (!token) {
            return alert("Authenticate First")
        }
        const userData = localStorage.getItem("user")
        const userID = JSON.parse(userData)._id
        console.log("User >>> ", userID)

        let cartData = {
            tiffinID: id,
            userID: userID,
            desc: tfData.desc,
            price: tfData.price,
            address: address,
            quantity: quantity,
            shift: timeShift,
            fixed: checked,
            days: daysCount,
            img: tfData.img,
        }

        setOrderData(cartData)
        setCartData(cartData)


        console.log("User >>> ", userID)
        console.log("Data sending >>> ", cartData);

        await axios.post(`${baseURL}/cart/add`, { ...cartData, userID }).then((res) => {
            console.log(res.data)
        }).catch(err => {
            return alert(err.message)
        })

        dispatch(addToCart(cartData))
    }

    console.log("Cart Data ", cartData)

    return (
        <div className='Tiffin'>
            <div className={classes.tiffin}>
                {/* Left for tiffin image */}
                <div className={classes.left}>
                    <img src={tfData.img} alt="tiffin" className={classes.tiffinImg} />
                </div>
                {/* Right for tiffin details */}
                <div className={classes.right}>
                    <h2 className={classes.tiffinTitle}>{tfData.desc} -- {tfData.id}</h2>
                    <Typography className={classes.tiffinPriceBox} component='div'>
                        <CurrencyRupee />
                        <span className={classes.tiffinPrice}>{tfData.price}</span>
                    </Typography>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox
                            checked={checked}
                            onChange={handleFixedChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />} label="Want a fixed Tiffin?" />
                    </FormGroup>
                    {/* Tiffin Days */}
                    {checked && <div className={classes.days}>
                        <FormControl>
                            <FormLabel id="days">Fixed Tiffin</FormLabel>
                            <RadioGroup
                                aria-labelledby="days-count"
                                name="days-count"
                                value={daysCount}
                            >
                                <FormControlLabel value="1 week" control={<Radio onClick={handleDaysChange} />} label="1 Week" />
                                <FormControlLabel value="15 days" control={<Radio onClick={handleDaysChange} />} label="15 Days" />
                                <FormControlLabel value="1 month" control={<Radio onClick={handleDaysChange} />} label="1 Month" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl
                            required
                            component="fieldset"
                            sx={{ m: 3 }}
                            variant="standard"
                        >
                            <FormLabel component="legend">Tiffin Timing</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={lunch} onChange={handleTimeShiftChange} name="lunch" />
                                    }
                                    label="Lunch"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={dinner} onChange={handleTimeShiftChange} name="dinner" />
                                    }
                                    label="Dinner"
                                />
                            </FormGroup>
                        </FormControl>
                    </div>}
                    {/* Tiffin Timing Shift */}
                    <div className={classes.tiffinQuantity}>
                        <IconButton aria-label="decrement" size="medium" onClick={handleDecrement}>
                            <RemoveCircleOutline fontSize="inherit" />
                        </IconButton>
                        <Typography component='span' sx={{ margin: '0 8px' }}>{quantity}</Typography>
                        <IconButton aria-label="increment" size="medium" onClick={handleIncrement}>
                            <AddCircleOutline fontSize="inherit" />
                        </IconButton>
                    </div>

                    {/* address textfield */}
                    <div className={classes.addressBox}>
                        <TextField
                            id="message"
                            label="Message"
                            multiline
                            rows={4}
                            value={address}
                            onChange={handleOnchange}
                        />
                    </div>
                    <Stack direction="row" spacing={2} className={classes.tiffinBtn}>
                        <Button variant="contained" className={classes.addToCart} startIcon={<ShoppingCart />} onClick={addCart}>
                            Add to Cart
                        </Button>
                        {/* <Button variant="contained" className={classes.orderNow} startIcon={<FlashOn />} onClick={orderNow}>
                            Order Now
                        </Button> */}
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Tiffin