import React from 'react'
import { aboutStyle } from '../style';
import tiffin from '../../assets/tiffinAbout.webp'

const About = () => {
    const classes = aboutStyle();

    return (
        <div className={classes.about}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <h1 className={classes.title}>About us</h1>
                    <p className={classes.aboutContent}>
                        DabbaWala is a Platform which provides Home made Tiffin services to customer. They do not have to worry about the quality, quantity and any kind of other issues. The purpose of out platform is to provide best quality food services to users and very easily.
                    </p>
                </div>
                <div className={classes.right}>
                    <img src={tiffin} alt="tiffin" className={classes.aboutImg} />
                </div>
            </div>
        </div>
    )
}

export default About