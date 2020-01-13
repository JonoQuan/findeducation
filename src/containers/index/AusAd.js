import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SydneyPic from '../../images/sydneypic.jpg'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    ausAdDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: theme.spacing(1),
    },
    imgDiv: {
        flex: '1',
        padding: theme.spacing(2),
        borderRadius: '10px',
        minWidth: '350px'
    },
    img: {
        width: '100%',
        borderRadius: '50px'
    },
    textDiv: {
        flex: '1',
        alignSelf: 'center',
        padding: theme.spacing(1),
        minWidth: '350px'
    },
    txtHeading: {
        margin: theme.spacing(2)
    }
}))

const AusAd = () => {
    const classes = useStyles();
    return (
        <div className={classes.ausAdDiv}>
            <div className={classes.imgDiv}>
                <img
                    src={SydneyPic}
                    className={classes.img}
                    alt='danfreemanUnsplash' />
            </div>
            <div className={classes.textDiv}>
                <Typography className={classes.txtHeading} variant='h3'>
                    Study in Australia
                </Typography>
                <Typography variant='subtitle1'>
                    With vast landscapes and beaches as far as the eye can see. This multicultural destination is second to none when it comes to a balanced lifestyle.
                    Soak up the sun while you complete your degree at one of Australia's top Universities.
                    Immerse yourself amongst the different cultures that now call Australia home. You will meet not only students but people who have come from all over the world. Everyone has a different story to tell.
                </Typography>
            </div>
        </div>
    )
}

export default AusAd
