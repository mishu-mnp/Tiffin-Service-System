import Cart from '../models/cart.js'


// get tiffins by userID
export const getTiffin = async (req, res) => {
    try {
        const userID = req.params.id;

        const tiffins = await Cart.find({ userID });

        res.status(200).send(tiffins)

    } catch (error) {
        res.status(400).send(err.message)
    }
}


// add tiffin
export const addTiffin = async (req, res) => {
    const data = req.body;
    try {
        const tiffin = new Cart(data);

        await tiffin.save();
        res.status(201).send(tiffin);
    } catch (error) {
        res.status(400).send(error)
    }
}


// remove tiffin
export const removeTiffin = async (req, res) => {

    const id = req.params.id;

    try {
        const tiffin = await Cart.findByIdAndDelete(id)

        if (!tiffin) {
            return res.status(404).send({ mssg: 'Tiffin not found' })
        }

        res.send(tiffin)

    } catch (error) {
        res.send(error.message)
    }
}
