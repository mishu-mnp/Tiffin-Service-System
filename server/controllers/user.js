import User from "../models/user.js";
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const secretKey = process.env.SECRET_KEY || 'user19tk47';


export const signin = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken()
        res.send({ user: user, token })
    } catch (err) {
        res.status(401).send(err)
    }
}


export const signup = async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
}


export const logout = async (req, res) => {
    console.log("Token >>> ", req.token)
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
}
