import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import WritingImg from '../../images/womanwritingpen.jpg'
import BookImg from '../../images/bookwriting.jpg'
import PersonWritingImg from '../../images/personwriting.jpg'
import {
    Card, Typography, CardContent, List,
    ListItemIcon,
    Grid,
    Button,
    CardMedia,
    CardActions,
    ListItem,
    ListItemText
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faComment
} from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar'

const useStyles = makeStyles(theme => ({
    header: {
        margin: theme.spacing(2)
    },
    notifications: {
        maxWidth: 300,
        margin: theme.spacing(2)
    },
    card: {
        maxWidth: 300,
        margin: theme.spacing(2)
    },
    media: {
        height: 140,
    },
    inline: {
        display: 'inline',
    },
}))

const d = new Date();

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]

  const monthName = months[d.getDay()]
  const dayName = days[d.getDay()]
  const dateString = dayName + " " + d.getDate() + " " + monthName + " " + d.getFullYear();

const Dashboard = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container
                direction="row"
                justify="space-between"
            >
                <Grid item>
                    <Grid container
                        direction="column">
                        <Grid item>
                            <Typography className={classes.header} variant='h5' align="left">Hi Peter!</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.header} variant='h5' align="left">You have...</Typography>
                            <Grid container
                                direction="row">
                                <Grid item>
                                    <Card className={classes.notifications}>
                                        <CardContent>
                                            <Typography variant='h3' color="error">2</Typography>
                                            <Typography variant='h6' color="textPrimary">Assessments Due</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card className={classes.notifications}>
                                        <CardContent>
                                            <Typography variant='h3' color="primary">0</Typography>
                                            <Typography variant='h6' color="textPrimary">Upcoming Exams</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Typography variant='h5' color="textSecondary">{dateString}</Typography>
                </Grid>
            </Grid>
            <Typography className={classes.header} variant='h5' align="left">New classes available</Typography>
            <Grid container
                spacing={2}
                direction="row"
                justify="space-evenly">
                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={WritingImg}
                            title="greenChameleonUnsplash"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                IELTS Preparation
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Get yourself ready for the IELTS exam. Key tips on passing the exam.
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" color="secondary" fullWidth>
                                Start
                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={BookImg}
                            title="kiwihugUnsplash"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Introduction to the English Language
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Learn the basics of the English language. What are nouns and adjectives?
                    </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" color="secondary" fullWidth>
                                Start
                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={PersonWritingImg}
                            title="NeONBRANDUnsplash"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Writing
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Practice writing in English. Write complete paragraphs with perfect spelling.
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" color="secondary" fullWidth>
                                Start
                </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <br />
            <Typography className={classes.header} variant='h5' align="left">What's happening @ Find Education Hub?</Typography>
            <Card className={classes.newsfeed}>
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faComment} size="2x" />
                            </ListItemIcon>
                            <ListItemText
                                primary={<em>21/12/2019</em>}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body1"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Achieve the summit to IELTS with Find Education Hub.
                                            3-Day demo clases. 7+ Official Prep Books. Weekly Tests. Digital Classroom.                                       </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faComment} size="2x" />
                            </ListItemIcon>
                            <ListItemText
                                primary={<em>18/12/2019</em>}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body1"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Study in Australia. Apply now for 2020 intake.
                                       </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faComment} size="2x" />
                            </ListItemIcon>
                            <ListItemText
                                primary={<em>20/10/2019</em>}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body1"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Exam results are out!!... Don't forget to check your email to find out how you went.
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </div >
    )
}

export default Dashboard
