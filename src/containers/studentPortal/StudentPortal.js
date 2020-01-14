import React from 'react'
import Profile from './Profile'
import Classroom from './Classroom'
import Dashboard from './Dashboard'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from 'react-responsive'
import {
    useRouteMatch,
    Route
} from "react-router-dom"
import TopMenu from './TopMenu'
import SideMenu from './SideMenu'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
}))


const StudentPortal = () => {
    const classes = useStyles();
    let match = useRouteMatch();

    const Main = () => {
        return (
            <div className={classes.content}>
                <Route exact path={`${match.path}`}><Dashboard /></Route>
                <Route exact path={`${match.path}/profile`}><Profile /></Route>
                <Route exact path={`${match.path}/classroom`}><Classroom /></Route>
            </div>
        )
    }

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 960px)' })

    return (
        <>
            {isTabletOrMobile ?
                <Grid container
                    direction='column' >
                    <Grid item>
                        <TopMenu />
                    </Grid>
                    <Grid item>
                        <Main />
                    </Grid>
                </Grid> :
                <div className={classes.root}>
                    <SideMenu />
                    <Main />
                </div >
            }
        </>
    )
}

export default StudentPortal
