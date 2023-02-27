import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import userRouter from './routes/user.js'
import cartRouter from './routes/cart.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())

app.use('/user', userRouter);
app.use('/cart', cartRouter);

const CONNECTION_URL = process.env.CONNECTION_URL || "mongodb://localhost:27017/tiffinservice?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`)))
    .catch((error) => console.log(error.message))


