import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import WritingImg from '../../images/womanwritingpen.jpg'
import BookImg from '../../images/bookwriting.jpg'
import PersonWritingImg from '../../images/personwriting.jpg'
import GroupConversing from '../../images/groupconversing.jpg'

const useStyles = makeStyles(theme => ({
    header: {
        margin: theme.spacing(4)
    },
    card: {
        maxWidth: 345,
        margin: theme.spacing(2)
    },
    media: {
        height: 140,
    },
}))

const Classroom = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.header} variant='h4' align='left' >
                Classroom
            </Typography>
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
                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={GroupConversing}
                            title="AlexisBrownUnsplash"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Conversing Basics
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Learn basic phrases in English. Introductions and simple questions.
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
        </div>
    )
}

export default Classroom
