import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import MomentUtils from '@date-io/moment'
import Fab from '@material-ui/core/Fab'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers'
import data from '../../sampledata/Data.json'
import { Formik, Form, Field } from 'formik'
import { TextField, Select, RadioGroup } from 'formik-material-ui'
import * as yup from 'yup'


const useStyles = makeStyles(theme => ({
    header: {
        margin: theme.spacing(6)
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

// const DisplayFormikState = props =>
//     <div style={{ margin: '1rem 0' }}>
//         <h3 style={{ fontFamily: 'monospace' }} />
//         <pre
//             style={{
//                 background: '#f6f8fa',
//                 fontSize: '1rem',
//                 padding: '.5rem',
//             }}
//         >
//             <strong>props</strong> ={' '}
//             {JSON.stringify(props, null, 2)}
//         </pre>
//     </div>;


const Profile = () => {
    const classes = useStyles();
    const initialValues = data.student[0];

    return (
        <div>
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
                    return (<Form className={classes.applicationForm} >
                        <div className={classes.formSection}>
                            <Typography variant='h6'>Personal Details</Typography>
                            <div className={classes.fieldGroup}>
                                <Field className={classes.formField}
                                    name="firstname"
                                    label="First Name"
                                    variant="outlined"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    name="lastname"
                                    label="Last Name"
                                    variant="outlined"
                                    component={TextField}
                                />
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <KeyboardDatePicker
                                        disableFuture
                                        className={classes.formField}
                                        name="dob"
                                        label="Date of Birth"
                                        value={values.dob}
                                        inputVariant="outlined"
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
                                    variant="outlined"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    type="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    component={TextField}
                                />
                                <div className={classes.formField}>
                                    <FormLabel component="legend">Preferred contact</FormLabel>
                                    <Field className={classes.radioGroup} name="preferred" aria-label="contact" variant="outlined"
                                        component={RadioGroup} >
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
                                    variant="outlined"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    name="city"
                                    label="City"
                                    variant="outlined"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    name="state"
                                    label="State"
                                    variant="outlined"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    name="postcode"
                                    label="Postcode"
                                    variant="outlined"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    name="country"
                                    label="Country"
                                    variant="outlined"
                                    component={TextField} />
                            </div>
                        </div>
                        <div className={classes.formSection}>
                            <Typography variant='h6'>Visa Details</Typography>
                            <div className={classes.fieldGroup}>
                                <Field className={classes.formField}
                                    name="visatype"
                                    label="Visa Type"
                                    variant="outlined"
                                    component={TextField}
                                />
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <KeyboardDatePicker
                                        openTo="year"
                                        views={["year", "month", "date"]}
                                        className={classes.formField}
                                        value={values.visaexpiry}
                                        name="visaexpiry"
                                        label="Visa Expiry"
                                        inputVariant="outlined"
                                        onChange={dateString => setFieldValue('visaexpiry', dateString)}
                                        format="DD/MM/YYYY"
                                    />
                                </MuiPickersUtilsProvider>
                                <Field className={classes.formField}
                                    name="countryofpassport"
                                    label="Country of Passport"
                                    variant="outlined"
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
                                    variant="outlined"
                                    component={TextField}
                                />
                                <FormControl variant="outlined"
                                    className={classes.formField}>
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
                                    variant="outlined"
                                    component={TextField}
                                />
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <KeyboardDatePicker
                                        openTo="year"
                                        views={["year", "month", "date"]}
                                        className={classes.formField}
                                        name="completion"
                                        label="Completion Date"
                                        inputVariant="outlined"
                                        value={values.completion}
                                        onChange={dateString => setFieldValue('completion', dateString)}
                                        format="DD/MM/YYYY"
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                        </div>
                        <div className={classes.formSection}>
                            <Typography variant='h6'>Password</Typography>
                            <div className={classes.fieldGroup}>
                                <Field className={classes.formField}
                                    type="password"
                                    name="password"
                                    label="Password"
                                    variant="outlined"
                                    component={TextField}
                                />
                                <Field className={classes.formField}
                                    type="password"
                                    name="passwordconfirm"
                                    label="Confirm Password"
                                    variant="outlined"
                                    component={TextField}
                                />
                            </div>
                        </div>
                        <Fab className={classes.btnSubmit} type="submit" variant="extended" color='secondary' >
                            Save Changes
                        </Fab>
                        {/* <DisplayFormikState {...props} /> */}
                    </Form>
                    )
                }
                }
            </Formik>
        </div>
    )
}

export default Profile
