import { Lock } from '@mui/icons-material';
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Grid, Link, TextField, ThemeProvider, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { loginStyles } from '../style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../authHeader';

const Login = () => {

    const classes = loginStyles();
    const theme = createTheme();
    const navigate = useNavigate();


    const loginData = {
        email: "",
        password: "",
    }

    const baseURL = 'http://localhost:5000'


    const [userLoginData, setUserLoginData] = useState(loginData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${baseURL}/user/signin`, userLoginData).then((response) => {
            console.log(response.data)
            const token = response.data.token;
            const user = response.data.user;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setAuthToken(token)
            navigate('/');
        }).catch(err => {
            alert(err.response.data.mssg)
        })
    }

    // const handleOnchange = (e) => {
    //     setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value })
    // }

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
                        Login
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={userLoginData.email}
                                    onChange={e => setUserLoginData({ ...userLoginData, email: e.target.value })}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={userLoginData.password}
                                    id="password"
                                    onChange={e => setUserLoginData({ ...userLoginData, password: e.target.value })}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href='/register' sx={{ textDecoration: 'none' }}>New User? Create account</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}


export default Login