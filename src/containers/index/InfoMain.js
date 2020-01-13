import React from 'react'
import Typography from '@material-ui/core/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@material-ui/core/styles'
import {
    faQuestion
} from '@fortawesome/free-solid-svg-icons'
import Divider from '@material-ui/core/Divider'


const useStyles = makeStyles(theme => ({
    infoDiv: {
        margin: theme.spacing(5),
        textAlign: 'left'
    },
    header: {
        padding: theme.spacing(3),
    },
    body: {
        padding: theme.spacing(3),
    },
    divider: {
        marginTop: theme.spacing(2)
    }
}))


const InfoMain = () => {
    const classes = useStyles();
    return (
        <div className={classes.infoDiv}>
            <Typography className={classes.header} variant='h4' color="secondary">
                Did you know<FontAwesomeIcon icon={faQuestion} size="2x" />
            </Typography>
            <Typography className={classes.body} variant='body1'>
                Millions of students around the world are choosing to study abroad to reap the benefits of gaining
                a qualification whilst experiencing life in a different country.
                Here at Find Education we are all about the student. We understand the complications that may arise from the application, and even during your studies.
                That's why were are here not only to simplify the application process, but to make sure your journey is a safe and enjoyable one.
                Let us help you by simplifying the process so you can stress less and look forward to starting a new chapter in your life.
                Fill out the contact form below and one of our agents will be in contact to answer any questions you may have.
            </Typography>
            <Divider variant='middle' className={classes.divider} />
        </div>
    )
}

export default InfoMain
