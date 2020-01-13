import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Fab from '@material-ui/core/Fab'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import MomentUtils from '@date-io/moment'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import { Formik, Form, Field } from 'formik'
import { TextField, Select, RadioGroup } from 'formik-material-ui'
import * as yup from 'yup'

const useStyles = makeStyles(theme => ({
    header: {
        margin: theme.spacing(3)
    },
    applicationForm: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    formSection: {
        flex: '1',
        flexWrap: 'wrap',
        textAlign: 'left',
        margin: theme.spacing(3)
    },
    fieldGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(2)
    },
    formField: {
        flex: '1',
        margin: theme.spacing(2),
        minWidth: '160px',
        maxWidth: '200px'
    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'row'
    },
    btnSubmit: {
        width: 'max-content',
        margin: theme.spacing(4)
    }
}))

const ApplicationForm = () => {
    const classes = useStyles();
    const initialValues = {
        id: "",
        firstname: "",
        lastname: "",
        dob: null,
        phone: "",
        email: "",
        emailconfirm: "",
        preferred: "",
        street: "",
        city: "",
        state: "",
        postcode: "",
        country: "",
        visatype: "",
        visaexpiry: null,
        countryofpassport: "",
        degree: "",
        degreelevel: "",
        institution: "",
        completion: null,
        password: "",
        confirmpassword: ""
    }


    const validationSchema = yup.object().shape({
        firstname: yup
            .string()
            .required('First Name is required')
            .max(5, "Too many characters"),
        lastname: yup
            .string()
            .required('Last Name is required')
            .max(20),
        phone: yup
            .string()
            .required('Phone number is required')
            .max(20),
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        emailconfirm: yup
            .string()
            .email('Invalid email')
            .oneOf([yup.ref('email'), null], "Email does not match")
            .required('Please confirm email'),
        street: yup
            .string()
            .required('Street address is required')
            .max(50),
        city: yup
            .string()
            .required('City is required')
            .max(50),
        state: yup
            .string()
            .required('State is required')
            .max(20),
        postcode: yup
            .string()
            .required('Postcode is required')
            .max(6),
        country: yup
            .string()
            .required('Country is required')
            .max(50),
        visatype: yup
            .string()
            .required('Visa Type is required')
            .max(20),
        countryofpassport: yup
            .string()
            .required('Country of passport is required')
            .max(50),
        degree: yup
            .string()
            .required('Degree title is required')
            .max(50),
        degreelevel: yup
            .string()
            .required('Degree level is required'),
        institution: yup
            .string()
            .required('Institution is required')
            .max(50),
        password: yup
            .string()
            .required('Password is required')
            .max(20),
        passwordconfirm: yup
            .string()
            .required('Please confirm password')
            .oneOf([yup.ref('password'), null], "Password does not match")
            .max(20),
    })

    return (
        <div>
            <NavBar />
            <Typography className={classes.header} variant='h4' align='center' >
                Student Application Form
            </Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={validationSchema}
            >
                {props => {
                    const {
                        values,
                        setFieldValue
                    } = props;
                    return (<Form className={classes.applicationForm}>
                        <div className={classes.formSection}>
                            <Typography variant='h6'>Personal Details</Typography>
                            <div className={classes.fieldGroup}>
                                <Field className={classes.formField}
                                    name="firstname"
                                    label="First Name"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    name="lastname"
                                    label="Last Name"
                                    component={TextField}
                                />
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <KeyboardDatePicker
                                        disableFuture
                                        className={classes.formField}
                                        name="dob"
                                        label="Date of Birth"
                                        value={values.dob}
                                        openTo="year"
                                        views={["year", "month", "date"]}
                                        onChange={dateString => setFieldValue('dob', dateString)}
                                        format="DD/MM/YYYY"
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                        </div>
                        <div className={classes.formSection}>
                            <Typography variant='h6'>Contact Details</Typography>
                            <div className={classes.fieldGroup}>
                                <Field className={classes.formField}
                                    name="phone"
                                    label="Phone"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    type="email"
                                    name="email"
                                    label="Email"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    name="emailconfirm"
                                    label="Confirm Email"
                                    component={TextField}
                                />
                                <div className={classes.formField}>
                                    <FormLabel component="legend">Preferred contact</FormLabel>
                                    <Field className={classes.radioGroup} name="preferred" aria-label="contact" component={RadioGroup} >
                                        <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                                        <FormControlLabel value="email" control={<Radio />} label="Email" />
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <div className={classes.formSection}>
                            <Typography variant='h6'>Address</Typography>
                            <div className={classes.fieldGroup}>
                                <Field className={classes.formField}
                                    name="street"
                                    label="Street"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    name="city"
                                    label="City"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    name="state"
                                    label="State"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    name="postcode"
                                    label="Postcode"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    name="country"
                                    label="Country"
                                    component={TextField} />
                            </div>
                        </div>
                        <div className={classes.formSection}>
                            <Typography variant='h6'>Visa Details</Typography>
                            <div className={classes.fieldGroup}>
                                <Field className={classes.formField}
                                    name="visatype"
                                    label="Visa Type"
                                    component={TextField}
                                />
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <KeyboardDatePicker
                                        openTo="year"
                                        views={["year", "month", "date"]}
                                        className={classes.formField}
                                        name="visaexpiry"
                                        label="Visa Expiry"
                                        value={values.visaexpiry}
                                        onChange={dateString => setFieldValue('visaexpiry', dateString)}
                                        format="DD/MM/YYYY"
                                    />
                                </MuiPickersUtilsProvider>
                                <Field className={classes.formField}
                                    name="countryofpassport"
                                    label="Country of Passport"
                                    component={TextField}
                                />
                            </div>
                        </div>
                        <div className={classes.formSection}>
                            <Typography variant='h6'>Education</Typography>
                            <div className={classes.fieldGroup}>
                                <Field className={classes.formField}
                                    name="degree"
                                    label="Degree Title"
                                    component={TextField}
                                />
                                <FormControl className={classes.formField}>
                                    <InputLabel>
                                        Degree Level
                                    </InputLabel>
                                    <Field
                                        name="degreelevel"
                                        component={Select}
                                    >
                                        <MenuItem value="Advanced Diploma">Advanced Diploma</MenuItem>
                                        <MenuItem value="Diploma">Diploma</MenuItem>
                                        <MenuItem value="Bachelor">Bachelor</MenuItem>
                                        <MenuItem value="Certificate">Certificate</MenuItem>
                                        <MenuItem value="Graduate Diploma">Graduate Diploma</MenuItem>
                                        <MenuItem value="High School">High School</MenuItem>
                                        <MenuItem value="Master">Master</MenuItem>
                                        <MenuItem value="Master (Research)">Master (Research)</MenuItem>
                                        <MenuItem value="Non AQF Award">Non AQF Award</MenuItem>
                                        <MenuItem value="PHD">PHD</MenuItem>
                                        <MenuItem value="School">School</MenuItem>
                                    </Field>
                                </FormControl>
                                <Field className={classes.formField}
                                    name="institution"
                                    label="Institution"
                                    component={TextField}
                                />
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <KeyboardDatePicker
                                        openTo="year"
                                        views={["year", "month", "date"]}
                                        className={classes.formField}
                                        name="completion"
                                        label="Completion Date"
                                        value={values.completion}
                                        onChange={dateString => setFieldValue('completion', dateString)}
                                        format="DD/MM/YYYY"
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                        </div>
                        <div className={classes.formSection}>
                            <Typography variant='h6'>Create Password</Typography>
                            <div className={classes.fieldGroup}>
                                <Field className={classes.formField}
                                    type="password"
                                    name="password"
                                    label="Password"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    type="password"
                                    name="passwordconfirm"
                                    label="Confirm Password"
                                    component={TextField}
                                />
                            </div>
                        </div>
                        <Fab className={classes.btnSubmit} type="submit" variant="extended" color='secondary' align='right'>
                            Submit
                        </Fab>
                        {/* <DisplayFormikState {...props} /> */}
                    </Form>
                    )
                }
                }
            </Formik>
            <Footer />

        </div >
    )
}

export default ApplicationForm
