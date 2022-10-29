import { makeStyles } from "@material-ui/core"

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
    nav: {


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
        border: '2px solid red',
        height: '50vh'
    },
    title: {
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