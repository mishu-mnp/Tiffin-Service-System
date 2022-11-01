import React from 'react';
import { tiffinStyles } from '../style';
import tiffin2 from '../../assets/tiffin2.jpg'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import { AddCircleOutline, CurrencyRupee, FlashOn, RemoveCircleOutline, ShoppingCart } from '@mui/icons-material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { tiffinData } from '../../static/data';
import { useEffect } from 'react';

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
    const [daysCount, setDaysCount] = useState('1 week');

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

                    <Stack direction="row" spacing={2} className={classes.tiffinBtn}>
                        <Button variant="contained" className={classes.addToCart} startIcon={<ShoppingCart />} >
                            Add to Cart
                        </Button>
                        <Button variant="contained" className={classes.orderNow} startIcon={<FlashOn />}>
                            Order Now
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Tiffin