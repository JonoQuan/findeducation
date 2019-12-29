import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';


const useStyles = makeStyles(theme => ({
    header: {
        margin: theme.spacing(4)
    },
    divider: {
        width: '40%',
        margin: theme.spacing(2)
    },
    applicationForm: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '800px'
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
}));

const ApplicationForm = () => {
    const classes = useStyles();
    return (
        <div>
            <NavBar />
            <Typography className={classes.header} variant='h4' align='left' >
                Student Application Form
            </Typography>
            <Divider className={classes.divider} />
            <form className={classes.applicationForm} >
                <div className={classes.formSection}>
                    <Typography variant='h6'>Personal Details</Typography>
                    <div className={classes.fieldGroup}>
                        <TextField className={classes.formField} id="firstname" label="First Name" />
                        <TextField className={classes.formField} id="lastname" label="Last Name" />
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker
                                clearable
                                className={classes.formField}
                                id="dateofbirth"
                                label="Date of Birth"
                                // value={selectedDate}
                                placeholder=""
                                // onChange={date => handleDateChange(date)}
                                format="DD/MM/YYYY"
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
                <div className={classes.formSection}>
                    <Typography variant='h6'>Contact Details</Typography>
                    <div className={classes.fieldGroup}>
                        <TextField className={classes.formField} id="phone" label="Phone" />
                        <TextField className={classes.formField} id="email" label="Email" />
                        <TextField className={classes.formField} id="emailconfirm" label="Confirm Email" />
                        <div className={classes.formField}>
                            <FormLabel component="legend">Preferred contact</FormLabel>
                            <RadioGroup className={classes.radioGroup} aria-label="contact" name="contact">
                                <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                                <FormControlLabel value="email" control={<Radio />} label="Email" />
                            </RadioGroup>
                        </div>
                    </div>
                </div>
                <div className={classes.formSection}>
                    <Typography variant='h6'>Address</Typography>
                    <div className={classes.fieldGroup}>
                        <TextField className={classes.formField} id="street" label="Street" />
                        <TextField className={classes.formField} id="city" label="City" />
                        <TextField className={classes.formField} id="state" label="State" />
                        <TextField className={classes.formField} id="postcode" label="Postcode" />
                        <TextField className={classes.formField} id="country" label="Country" />
                    </div>
                </div>
                <div className={classes.formSection}>
                    <Typography variant='h6'>Visa Details</Typography>
                    <div className={classes.fieldGroup}>
                        <TextField className={classes.formField} id="visatype" label="Visa Type" />
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker
                                clearable
                                className={classes.formField}
                                id="visaexpiry"
                                label="Visa Expiry"
                                // value={selectedDate}
                                // onChange={date => handleDateChange(date)}
                                format="DD/MM/YYYY"
                            />
                        </MuiPickersUtilsProvider>
                        <TextField className={classes.formField} id="passport" label="Country of Passport" />
                    </div>
                </div>
                <div className={classes.formSection}>
                    <Typography variant='h6'>Education</Typography>
                    <div className={classes.fieldGroup}>
                        <TextField className={classes.formField} id="degreetitle" label="Degree Title" />
                        <FormControl className={classes.formField}>
                            <InputLabel>
                                Degree Level
                            </InputLabel>
                            <Select
                                id="degreeLevel"
                                placeholder="Diploma"
                            >
                                <MenuItem value=""></MenuItem>
                                <MenuItem >Advanced Diploma</MenuItem>
                                <MenuItem >Diploma</MenuItem>
                                <MenuItem >Bachelor</MenuItem>
                                <MenuItem >Certificate</MenuItem>
                                <MenuItem >Graduate Diploma</MenuItem>
                                <MenuItem >High School</MenuItem>
                                <MenuItem >Master</MenuItem>
                                <MenuItem >Master (Research)</MenuItem>
                                <MenuItem >Non AQF Award</MenuItem>
                                <MenuItem >PHD</MenuItem>
                                <MenuItem >School</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField className={classes.formField} id="institution" label="Institution" />
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker
                                clearable
                                className={classes.formField}
                                id="degreecompletion"
                                label="Completion Date"
                                // value={selectedDate}
                                // onChange={date => handleDateChange(date)}
                                format="DD/MM/YYYY"
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>


                <Fab className={classes.btnSubmit} variant="extended" color='secondary'>
                    Submit
                </Fab>
            </form>
            <Footer />
        </div >
    )
}

export default ApplicationForm;
