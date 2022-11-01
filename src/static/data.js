import { TouchApp, Restaurant, Payment, ThumbUp } from '@mui/icons-material';
import tiffin1 from '../assets/tiffin1.jpg';
import tiffin2 from '../assets/tiffin2.jpg';
import tiffin3 from '../assets/tiffin3.jpg';
import tiffin4 from '../assets/tiffin4.jpg';
import tiffin5 from '../assets/tiffin5.jpg';
import tiffin6 from '../assets/tiffin6.jpg';
import tiffin7 from '../assets/tiffin7.webp';
import tiffin8 from '../assets/tiffin8.jpg';

export const stepsData = [
    {
        id: 1,
        icon: <TouchApp />,
        main: 'Choose',
        follow: 'Your',
        more: 'Tiffin Service'
    },
    {
        id: 2,
        icon: <Restaurant />,
        main: 'Order',
        follow: 'Your',
        more: 'Tiffin'
    },
    {
        id: 3,
        icon: <Payment />,
        main: 'Pay',
        follow: 'On',
        more: 'Delivery'
    },
    {
        id: 4,
        icon: <ThumbUp />,
        main: 'Enjoy',
        follow: 'Your',
        more: 'Tiffin'
    }
]

export const tiffinData = [
    {
        id: 'tf1',
        img: tiffin1,
        desc: 'Veg Matar Alu Sabji Dal Fry Jeera Rice',
        price: 80
    },
    {
        id: 'tf2',
        img: tiffin2,
        desc: 'Veg Cauliflower Alu Sabji Dal Fry Jeera Rice',
        price: 100
    },
    {
        id: 'tf3',
        img: tiffin3,
        desc: 'Veg Paneer Sabji Dal Fry Jeera Rice',
        price: 120
    },
    {
        id: 'tf4',
        img: tiffin4,
        desc: 'Veg Bhindi Masala Sabji Dal Fry Jeera Rice',
        price: 90
    },
    {
        id: 'tf5',
        img: tiffin5,
        desc: 'Veg Capsicum Corn Mix Sabji Dal Fry Jeera Rice',
        price: 110
    },
    {
        id: 'tf6',
        img: tiffin6,
        desc: 'Veg Doodhi Chana Masala Sabji Dal Fry Jeera Rice',
        price: 80
    },
    {
        id: 'tf7',
        img: tiffin7,
        desc: 'Veg Karela Sabji Kadhi Rice',
        price: 90
    },
    {
        id: 'tf8',
        img: tiffin8,
        desc: 'Veg Ringad Masala Sabji Dal Fry Jeera Rice',
        price: 100
    }
]