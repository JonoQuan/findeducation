import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#b0bec5',
        minHeight: '100px'
    },
    copyright: {
        padding: theme.spacing(1)
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Typography className={classes.copyright} variant="body2" color="textSecondary">
                {'Copyright © '}
                <Link color="inherit" href="/">
                    Find Education Hub
            </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    )
}

export default Footer;
