import React from 'react'
import { tiffinAvailableStyles } from '../style'
import { tiffinData } from '../../static/data';
import { Typography, Button } from '@mui/material';
import { CurrencyRupee, Visibility } from '@mui/icons-material';



const TiffinAvailable = () => {
    const classes = tiffinAvailableStyles();

    return (
        <div className={classes.TiffinAvailable}>
            <h1 className={classes.title}>Tiffin Available</h1>

            <div className={classes.tiffin_container}>
                {tiffinData.map(tiffin => (
                    <div key={tiffin.id} className={classes.tiffin}>
                        <img src={tiffin.img} alt='tiffin1' className={classes.tiffinImg} />
                        <p className={classes.tiffinDesc}>{tiffin.desc}</p>
                        <Typography className={classes.tiffinPriceBox} component='div'>
                            <CurrencyRupee />
                            <span className={classes.tiffinPrice}>{tiffin.price}</span>
                            <Button variant="contained" startIcon={<Visibility />}>View</Button>
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TiffinAvailable