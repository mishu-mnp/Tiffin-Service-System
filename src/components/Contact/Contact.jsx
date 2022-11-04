import React from 'react'
import { contactStyle } from '../style'

const Contact = () => {
    const classes = contactStyle();

    return (
        <div className={classes.contact}>
            Contact
        </div>
    )
}

export default Contact