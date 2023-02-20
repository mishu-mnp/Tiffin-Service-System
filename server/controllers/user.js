import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY || 'user19tk47';


export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: 'No User found!' })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: 'Check your Credentials!' })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secretKey, { expiresIn: '6h' });

        return res.status(200).json({ result: existingUser, token: token });

    } catch (error) {
        res.status(500).json({ message: error })
    }
}


export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;


    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: 'User Already Exists!' });

        if (password !== confirmPassword) return res.status(400).json({ message: "Passowrd doesn't matches" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: result.email, id: result._id }, 'user19tk47', { expiresIn: '6h' });

        res.status(200).json({ result, token });

    } catch (error) {
        res.status(401).json({ message: error });
    }
}



