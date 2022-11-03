import { makeStyles } from "@mui/styles"

export const headerStyles = makeStyles({
    Header: {
        backgroundColor: '#232f3e',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        width: '100%',
        zIndex: '1000',
        top: 0
    },
    link: {
        textDecoration: 'none !important',
        color: '#fff !important'

    },
    nav_menu: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '1rem'
    },
    nav_item: {
        marginRight: '3rem',
        fontSize: '1.3rem'
    }
})


export const homeStyles = makeStyles({
    home_content: {
        width: '200px',
    },
    home_title: {
        fontSize: '2rem !important',
        position: 'absolute',
        top: '5rem',
        right: '5rem',
        marginTop: '15px !important'
    },
    home_subtitle: {
        fontSize: '20px !important',
        position: 'absolute',
        top: '8rem',
        right: '6rem',
        width: '260px',
        marginTop: '28px !important',
        color: 'white',
    },

})

export const orderFoodStyles = makeStyles({
    order_container: {
        // border: '2px solid red',
        height: '50vh'
    },
    title: {
        marginTop: '2rem',
        textAlign: 'center',
        fontSize: '2rem !important'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '1.2rem !important',
        color: '#ee4e4e'
    },
    steps_container: {
        // border: '2px solid purple',
        display: 'flex',
        justifyContent: 'space-around'
    },
    steps: {

    },
    upper: {
        height: '75px',
        width: '150px',
        backgroundColor: '#37ca37',
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lower: {
        height: '75px',
        width: '150px',
        backgroundColor: 'grey',
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    mainText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: '1.2rem',
    },
    moreText: {
        color: '#164184',
        fontSize: '15px',
        marginLeft: '5px',
    }
})

export const tiffinAvailableStyles = makeStyles({
    TiffinAvailable: {
        height: '80vh'
    },
    title: {
        textAlign: 'center',
        fontSize: '2rem !important'
    },
    tiffin_container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '2rem',
        flexWrap: 'wrap'
    },
    tiffin: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: 'bisque',
        borderTopLeftRadius: '35px',
        borderBottomRightRadius: '35px',
        width: '250px',
        height: '300px',
        margin: '1rem'
    },
    tiffinDesc: {
        fontSize: '20px'
    },
    tiffinPriceBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '5px'
    },
    tiffinPrice: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'orangered',
        marginRight: '30px'
    },
    tiffinImg: {
        height: '150px',
        width: '200px',
        borderRadius: '50%',
    }
})

export const registerStyles = makeStyles({
    registerBox: {
        border: '2x solid purple'
    }
})

export const loginStyles = makeStyles({
    login: {

    }
})

export const tiffinStyles = makeStyles({
    tiffin: {
        // border: '2px solid purple',
        height: '90vh',
        // width: '99%',
        margin: '5rem 0 1rem 0',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',

    },
    left: {
        // border: '2px solid orange',
        height: '90%',
        width: '40%'
    },
    right: {
        // border: '2px solid orange',
        height: '90%',
        width: '48%',
        padding: '0 10px'
    },
    tiffinImg: {
        height: '100%',
        width: '100%'
    },
    tiffinTitle: {
        fontSize: '20px'
    },
    tiffinPriceBox: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        marginBottom: '5px'
    },
    tiffinPrice: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'orangered',
    },
    tiffinQuantity: {
        border: '1.8px solid #F95A3B',
        backgroundColor: 'bisque',
        borderRadius: '18px',
        width: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12px'
    },
    tiffinBtn: {
        marginTop: '1rem'
    },
    addToCart: {
        backgroundColor: "#ff9f00 !important",
        borderRadius: '15px !important'
    },
    orderNow: {
        backgroundColor: "#fb641b !important",
        borderRadius: '15px !important'
    },
    addressBox: {
        margin: '1rem 0'
    }
})


export const myOrderStyle = makeStyles({
    orderContainer: {
        border: '2px solid purple',
        margin: '6rem 0 1rem 0',
        padding: '1rem'
    },
    title: {
        marginBottom: '10px'
    },
    tiffinOrder: {
        border: '2px solid red',
        width: '600px',
        height: '200px'
    }
})

export const cartStyle = makeStyles({
    cartContainer: {
        border: '2px solid purple',
        margin: '6rem 0 1rem 0',
        padding: '1rem'
    },
    title: {
        marginBottom: '10px'
    },
    tiffinCart: {
        border: '2px solid red',
        width: '600px',
        // height: '200px'
    },
    tiffinBtn: {
        marginTop: '1rem'
    },
    addToCart: {
        backgroundColor: "#ff9f00 !important",
        borderRadius: '15px !important'
    },
    orderNow: {
        backgroundColor: "#fb641b !important",
        borderRadius: '15px !important'
    },
})