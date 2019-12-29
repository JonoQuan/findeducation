import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent, CardActionArea, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    header: {
        margin: theme.spacing(4)
    },
    notifications: {
        maxWidth: 300,
        margin: theme.spacing(2)
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.header} variant='h5' align="left">Hi Peter!</Typography>
            <Grid container
                direction="row"
                justify="space-around">
                <Card className={classes.notifications}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant='h3' color="error">2</Typography>
                            <Typography variant='h6' color="textPrimary">Assessments Due</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.notifications}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant='h3' color="primary">0</Typography>
                            <Typography variant='h6' color="textPrimary">Upcoming Exams</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </div>
    )
}

export default Dashboard;
