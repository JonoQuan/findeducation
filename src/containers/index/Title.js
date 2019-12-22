import React from 'react';
import WomanGrad from '../../images/womangraduationcap.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: theme.spacing(1),
        backgroundColor: '#78909c'
    },
    titleContainer: {
        flex: '1',
        alignSelf: 'center',
        padding: theme.spacing(1),
        minWidth: '350px'
    },
    imgContainer: {
        flex: '1',
        padding: theme.spacing(2),
        borderRadius: '10px',
        minWidth: '350px'
    },
    img: {
        width: '100%',
        borderRadius: '50px'
    },
    btnFindMore: {
        marginTop: theme.spacing(2)
    }
}));

const Title = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Typography variant='h2'>
                    Discover your full potential
            </Typography>
                <Typography variant='h5'>
                    Invest in yourself and study abroad to receive quality education and an experience of a lifetime.
            </Typography>
                <Fab  className={classes.btnFindMore} variant="extended" color='secondary'>
                    Find out more
                </Fab>
            </div>
            <div className={classes.imgContainer}>
                <img
                    src={WomanGrad}
                    className={classes.img}
                    alt='mdduranUnsplash' />
            </div>
        </div>
    )
}

export default Title;
