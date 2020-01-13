import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Auth from '../app/Auth'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import * as yup from 'yup'
import data from '../../sampledata/Data.json'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: '20px'
    },
}))

const initialValues = {
    email: "",
    password: ""
}

const students = data.student[0]

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .email('Invalid Email')
        .max(50, "Too many characters"),
    password: yup
        .string()
        .required('Password is required')
        .max(50, "Too many characters"),
})


const SignIn = () => {
    const classes = useStyles();
    let history = useHistory();

    return (
        <div>
            <NavBar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Student Sign in
                </Typography>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                (values.email === students.email
                                    && values.password === students.password) ?
                                    history.push('/student') : alert("Invalid user and/or email");
                                actions.setSubmitting(false);
                            }, 1000);

                        }}
                        validationSchema={validationSchema}
                    >
                        {(props) => (<Form className={classes.form}>
                            <Field variant="outlined" margin="normal" fullWidth id="email" label="Email Address" name="email" component={TextField} autoComplete="email" autoFocus />
                            <Field variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" component={TextField} autoComplete="current-password" />
                            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                            <Button type="submit" fullWidth variant="outlined" color="secondary" className={classes.submit}>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/application" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Form>)}
                    </Formik>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default SignIn