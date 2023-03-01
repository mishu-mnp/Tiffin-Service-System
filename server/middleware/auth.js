import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').split(' ')[1]
        console.log('Getting token >>> ', token);
        const decode = jwt.verify(token, 'tiffin100')

        const user = await User.findOne({ _id: decode._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please Authenticate First !!!' })
    }
}


export default auth