import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import FindLogoName from './../../images/findlogoname.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTabletAlt, faSignOutAlt, faThLarge } from '@fortawesome/free-solid-svg-icons'
import Divider from '@material-ui/core/Divider'
import {
    Link,
    useRouteMatch,
} from "react-router-dom"



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
        maxWidth: '150px',
        marginLeft: theme.spacing(1)
    },
    img: {
        width: '100%',
    },
    btnSign: {
        margin: theme.spacing(1),
        borderRadius: '20px'
    },
    menuButton: {
        color: 'textPrimary'
    }
}))

const TopMenu = () => {
    const classes = useStyles();
    let match = useRouteMatch();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="static">
                <div className={classes.imgContainer}>
                    <img
                        src={FindLogoName}
                        className={classes.img}
                        alt='Find Education Hub Logo' />
                </div>
                <Toolbar className={classes.toolbar}>
                    <IconButton href={`${match.url}`} className={classes.menuButton} aria-label="menu">
                        <FontAwesomeIcon icon={faThLarge} />
                    </IconButton>
                    <IconButton href={`${match.url}/profile`} className={classes.menuButton} aria-label="menu">
                        <FontAwesomeIcon icon={faUser} />
                    </IconButton>
                    <IconButton href={`${match.url}/classroom`} className={classes.menuButton} aria-label="menu">
                        <FontAwesomeIcon icon={faTabletAlt} />
                    </IconButton>
                    <Divider orientation="vertical" variant='middle' />
                    <IconButton href="/" className={classes.menuButton} aria-label="menu">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopMenu
