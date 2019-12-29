import React from 'react';
import Profile from './Profile';
import Classroom from './Classroom';
import Dashboard from './Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import Logo from '../../images/findEducationLogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTabletAlt, faSignOutAlt, faThLarge } from '@fortawesome/free-solid-svg-icons';
import {
    Link,
    useRouteMatch,
    Route
} from "react-router-dom";
import data from '../../sampledata/Data.json';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    imgContainer: {
        maxWidth: '80px',
        marginLeft: theme.spacing(3)
    },
    img: {
        width: '100%',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    footer: {
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: 'auto',
        justifyContent: 'center',
        backgroundColor: '#b0bec5',
        minHeight: '100px'
    },
    copyright: {
        padding: theme.spacing(1)
    }
}));

function ListItemLink(props) {
    const { icon, text, to } = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef((itemProps, ref) => (
                <Link ref={ref} to={to} {...itemProps} />
            )),
        [to],
    );

    return (
        <li>
            <ListItem button key={text} component={renderLink}>
                <ListItemIcon><FontAwesomeIcon icon={icon} size="2x" /></ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};


const StudentPortal = () => {
    let match = useRouteMatch();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.imgContainer}>
                    <img
                        src={Logo}
                        className={classes.img}
                        alt='Find Education Hub Logo' />
                </div>
                <Divider />
                <List>
                    <ListItemLink text="Dashboard" to={`${match.url}/dashboard`} icon={faThLarge} />
                    <ListItemLink text="Profile" to={`${match.url}`} icon={faUser} />
                    <ListItemLink text="Classroom" to={`${match.url}/classroom`} icon={faTabletAlt} />
                </List>
                <Divider />
                <List>
                    <ListItemLink text="Sign Out" to="/" icon={faSignOutAlt} />
                </List>
                <div className={classes.footer}>
                    <Typography className={classes.copyright} variant="body2" color="textSecondary">
                        {'Copyright © Find Education Hub '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Route exact path={`${match.path}`}><Profile /></Route>
                <Route exact path={`${match.path}/dashboard`}><Dashboard /></Route>
                <Route exact path={`${match.path}/classroom`}><Classroom /></Route>
            </main>
        </div>
    )
}

export default StudentPortal;
