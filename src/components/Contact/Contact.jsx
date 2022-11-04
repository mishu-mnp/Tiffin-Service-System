import React, { useState } from 'react'
import { contactStyle } from '../style'
import contact from '../../assets/contact1.jpg'
import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';

const Contact = () => {
    const classes = contactStyle();

    const data = {
        name: '',
        email: '',
        contact: '',
        message: ''
    }
    const [contactData, setContactData] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Data >>> ', contactData)
        setContactData(data)
    }

    const handleOnchange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value })
    }

    return (
        <div className={classes.contact}>
            <div className={classes.container}>
                <div className={classes.top}>
                    <img src={contact} alt="contact-us" className={classes.contactImg} />
                </div>
                <Container className={classes.bottom}>
                    <h1 className={classes.title}>Let's get in touch!</h1>
                    <Card sx={{ minWidth: 150 }} className={classes.card}>
                        <CardContent>
                            <Typography component='h2' variant='h6' className={classes.cardTitle}>
                                Tiffin Enquiry
                            </Typography>
                            <Typography component='p' className={classes.cardText}>
                                Feel free to reach out to us if you have a query related to any tiffin or services that we offer, our team will try to solve your issues as soon as possible.
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="name"
                                            label="Full Name"
                                            name="name"
                                            value={contactData.name}
                                            onChange={handleOnchange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            value={contactData.email}
                                            onChange={handleOnchange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="contact"
                                            label="Contact"
                                            type="tel"
                                            value={contactData.contact}
                                            onChange={handleOnchange}
                                            id="contact"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="message"
                                            label="Message"
                                            name="message"
                                            multiline
                                            fullWidth
                                            rows={6}
                                            value={contactData.message}
                                            onChange={handleOnchange}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

export default Contact