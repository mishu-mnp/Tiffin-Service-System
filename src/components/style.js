import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
    head: {
        color: 'green'
    }
})


export const headerStyles = makeStyles({
    Header: {
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'space-between'
    },
    link: {
        textDecoration: 'none !important',
        color: 'black !important'

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