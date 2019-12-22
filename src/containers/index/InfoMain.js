import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    infoDiv: {
        margin: theme.spacing(4),
        textAlign: 'left'
    }
}));


const InfoMain = () => {
    const classes = useStyles();
    return (
        <div className={classes.infoDiv}>
            <Typography variant='h5'>
                Did you know?
            </Typography>
            <Typography variant='subtitle1'>
                Millions of students around the world are choosing to study abroad to reap the benefits of gaining
                a qualification whilst experiencing life in a different country.
                Here at Find Education we are all about the student. We understand the complications that may arise from the application, and even during your studies.
                That's why were are here not only to simplify the application process, but to make sure your journey is a safe and enjoyable one.
                Let us help you by simplifying the process so you can stress less and look forward to starting a new chapter in your life.
            </Typography>
            <Fab className={classes.btnApply} variant="extended" color='secondary'>
                Apply Now
                </Fab>
        </div>
    )
}

export default InfoMain;
