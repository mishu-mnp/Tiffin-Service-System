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