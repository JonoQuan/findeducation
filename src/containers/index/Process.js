import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography'
import {
    faFileAlt,
    faArrowRight,
    faTabletAlt,
    faEdit,
    faCheckCircle,
    faPlaneDeparture
} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexShrink: '1',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: theme.spacing(1),
        backgroundColor: '#78909c'
    },
    iconGroup: {
        margin: theme.spacing(3),
        flex: '1',
        flexDirection: 'column',
    },
    icon: {
        fontSize: '3rem',
    },
    iconLabel: {
        margin: theme.spacing(1),
        color: '#FFFFFF'
    },
    arrow: {
        flex: '1',
        fontSize: '2em',
        color: '#FFFFFF',
        alignSelf: 'center',
        maxWidth: '50px'
    }
}))

const Process = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.iconGroup}>
                <FontAwesomeIcon className={classes.icon}
                    icon={faFileAlt}
                    color='#FFFFFF' />
                <Typography className={classes.iconLabel} variant='h4'>
                    Application
                </Typography>
            </div>
            <FontAwesomeIcon className={classes.arrow}
                icon={faArrowRight} />
            <div className={classes.iconGroup}>
                <FontAwesomeIcon className={classes.icon}
                    icon={faTabletAlt}
                    color='#FFFFFF' />
                <Typography className={classes.iconLabel} variant='h4'>
                    Training
                </Typography>
            </div>
            <FontAwesomeIcon className={classes.arrow}
                icon={faArrowRight} />
            <div className={classes.iconGroup}>
                <FontAwesomeIcon className={classes.icon}
                    icon={faEdit}
                    color='#FFFFFF' />
                <Typography className={classes.iconLabel} variant='h4'>
                    IELTS Exam
                </Typography>
            </div>
            <FontAwesomeIcon className={classes.arrow}
                icon={faArrowRight} />
            <div className={classes.iconGroup}>
                <FontAwesomeIcon className={classes.icon}
                    icon={faCheckCircle}
                    color='#00e676' />
                <Typography className={classes.iconLabel} variant='h4'>
                    Approval
                </Typography>
            </div>
            <FontAwesomeIcon className={classes.arrow}
                icon={faArrowRight} />
            <div className={classes.iconGroup}>
                <FontAwesomeIcon className={classes.icon}
                    icon={faPlaneDeparture}
                    color='#FFFFFF' />
                <Typography className={classes.iconLabel} variant='h4'>
                    Departure
                </Typography>
            </div>
        </div>
    )
}

export default Process
