import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from '../../images/findEducationLogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTabletAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


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
}));

const StudentPortal = () => {
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
                    {['Profile', 'Classroom'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <FontAwesomeIcon icon={faUser} size="2x" />
                                : <FontAwesomeIcon icon={faTabletAlt} size="2x" />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Logout'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon><FontAwesomeIcon icon={faSignOutAlt} size="2x" /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>

            </main>
        </div>)
}

export default StudentPortal;
