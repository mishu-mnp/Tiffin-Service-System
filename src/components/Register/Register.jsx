import { Lock } from '@mui/icons-material';
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Grid, Link, TextField, ThemeProvider, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { registerStyles } from '../style'

const Register = () => {

    const classes = registerStyles();
    const theme = createTheme();

    const data = {
        name: "",
        email: "",
        password: "",
        contact: "",
        address: ""
    }

    const [userData, setUserData] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Data >>> ', userData)
        setUserData(data)
    }

    const handleOnchange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{ padding: '2rem' }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <Lock />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                    value={userData.name}
                                    onChange={handleOnchange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleOnchange}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="address"
                                    label="Address"
                                    name="address"
                                    value={userData.address}
                                    onChange={handleOnchange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="contact"
                                    value={userData.contact}
                                    label="Contact"
                                    onChange={handleOnchange}
                                    name="contact"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={userData.password}
                                    id="password"
                                    onChange={handleOnchange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href='/login' sx={{ textDecoration: 'none' }}>Already have an account? Login</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}










export default Register