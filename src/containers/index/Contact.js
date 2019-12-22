import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import MailIcon from '@material-ui/icons/MailOutlined';

const useStyles = makeStyles(theme => ({
    contactDiv: {
        display: 'flex',
        padding: theme.spacing(2),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    mailIcon: {
        fontSize: '2rem'
    },
    headerDiv: {
        flex: '1',
        maxWidth: '500px',
        minWidth: '350px'
    },
    contactForm: {
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        alignContent: 'space-around',
        padding: theme.spacing(1),
        maxWidth: '400px',
        minWidth: '350px'
    },
    txtFirstName: {
        flex: '1',
        padding: theme.spacing(1)
    },
    txtLastName: {
        flex: '1',
        padding: theme.spacing(1)
    },
    txtEmail: {
        flex: '2',
        padding: theme.spacing(1)
    },
    txtMessage: {
        flex: '2',
        padding: theme.spacing(1)
    },
    btnSubmit: {
        marginLeft: theme.spacing(2),
        maxWidth: '100px'
    }
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.contactDiv}>
            <div className={classes.headerDiv}>
                <MailIcon className={classes.mailIcon} />
                <Typography variant='h4'>
                    Contact Us
                </Typography>
                <Typography variant='subtitle1'>
                    If you have any questions please do not hesitate to contact us using the form provided.
                </Typography>
            </div>
            <form className={classes.contactForm} noValidate autoComplete="off">
                <TextField className={classes.txtFirstName} id="txtFirstName" label="First Name" variant="outlined" />
                <TextField className={classes.txtLastName} id="txtLastName" label="Last Name" variant="outlined" />
                <TextField className={classes.txtEmail} id="txtEmail" label="Email" variant="outlined" />
                <TextField
                    className={classes.txtMessage}
                    id="txtMessage"
                    label="Message"
                    multiline
                    rows="4"
                    variant="outlined"
                />
                <Fab className={classes.btnSubmit} variant="extended" color='secondary'>
                    Submit
                </Fab>
            </form>
        </div>
    )
}

export default Contact;
