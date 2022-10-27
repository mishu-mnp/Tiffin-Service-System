import { Box, Typography } from '@mui/material'
import React from 'react'
import tiffinHome from '../../assets/tiffinHome.webp'
import { homeStyles } from '../style'

const Home = () => {
    const classes = homeStyles();

    return (
        <div className={classes.Home}>
            <Box
                component="img"
                sx={{
                    height: '70vh',
                    width: '100%',
                }}
                alt="The house from the offer."
                src={tiffinHome}
            />

            <div className={classes.home_content}>
                <Typography component='h2' variant='h6' className={classes.home_title}>
                    Online Tiffin Services
                </Typography>
                <Typography component='p' className={classes.home_subtitle}>
                    A place to find Home made healthy food tiffin services...
                </Typography>
            </div>

        </div>
    )
}

export default Home