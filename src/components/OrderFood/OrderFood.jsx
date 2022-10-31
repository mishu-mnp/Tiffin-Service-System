import React from 'react'
import { orderFoodStyles } from '../style'
import { stepsData } from '../../static/data';
import { Typography } from '@mui/material';

const OrderFood = () => {
    const classes = orderFoodStyles();

    return (
        <div className='OrderFood'>
            <div className={classes.order_container}>
                <div className={classes.order}>
                    <Typography component='h1' className={classes.title}>Ordering Food was never so easy</Typography>
                    <Typography component='h2' className={classes.subtitle}>Just 4 steps to follow</Typography>
                </div>
                <div className={classes.steps_container}>
                    {stepsData.map(step => (
                        <div key={step.id} className={classes.steps}>
                            <div className={classes.upper}>
                                {step.icon}
                            </div>
                            <div className={classes.lower}>
                                <div>
                                    <span className={classes.mainText}>{step.main}</span>
                                    <span className={classes.moreText}>{step.follow}</span>
                                </div>
                                <div>
                                    <span className={classes.moreText}>{step.more}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OrderFood