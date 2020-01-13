import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import FindLogoName from '../../images/findlogoname.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: '1'
    },
    appbar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    toolbar: {
        flex: '1',
        justifyContent: 'flex-end'
    },
    imgContainer: {
        flex: '1',
        maxWidth: '200px',
        marginLeft: theme.spacing(4)
    },
    img: {
        width: '100%',
    },
    btnSign: {
        margin: theme.spacing(1),
        borderRadius: '20px'
    }
}))


const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="static">
                <div className={classes.imgContainer}>
                    <Button href="/" className={classes.btnLogo}>
                        <img
                            src={FindLogoName}
                            className={classes.img}
                            alt='Find Education Hub Logo' />
                    </Button>
                </div>
                <Toolbar className={classes.toolbar}>
                    <Button href="/signin" className={classes.btnSign} variant='outlined' color="secondary" size='large'>Sign In</Button>
                    <Button href="/application" className={classes.btnSign} variant='contained' color="secondary" size='large'>Sign Up</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
