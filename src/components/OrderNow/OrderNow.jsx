import React from 'react'
import { orderNowStyle } from '../style'

const OrderNow = () => {

    const classes = orderNowStyle();

    return (
        <div className={classes.title}>OrderNow</div>
    )
}

export default OrderNow