import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import data from '../../sampledata/Data.json';

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
}));

const Profile = () => {
    const classes = useStyles();
    return (
        <div>
            {data.student.map(x => (
                <form key={x.id} className={classes.applicationForm} >
                    <div className={classes.formSection}>
                        <Typography variant='h6'>Personal Details</Typography>
                        <div className={classes.fieldGroup}>
                            <TextField className={classes.formField} value={x.firstname} id="firstname" label="First Name" variant='filled' />
                            <TextField className={classes.formField} value={x.lastname} id="lastname" label="Last Name" variant='filled' />
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDatePicker
                                    variant="inline"
                                    inputVariant="filled"
                                    className={classes.formField}
                                    id="dateofbirth"
                                    label="Date of Birth"
                                    value={x.dob}
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
                            <TextField className={classes.formField} value={x.phone} id="phone" label="Phone" variant='filled' />
                            <TextField className={classes.formField} value={x.email} id="email" label="Email" variant='filled' />
                            <div className={classes.formField}>
                                <FormLabel component="legend">Preferred contact</FormLabel>
                                <RadioGroup className={classes.radioGroup} value={x.preferred} aria-label="contact" name="contact" variant="filled">
                                    <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                                    <FormControlLabel value="email" control={<Radio />} label="Email" />
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                    <div className={classes.formSection}>
                        <Typography variant='h6'>Address</Typography>
                        <div className={classes.fieldGroup}>
                            <TextField className={classes.formField} value={x.street} id="street" label="Street" variant='filled' />
                            <TextField className={classes.formField} value={x.city} id="city" label="City" variant='filled' />
                            <TextField className={classes.formField} value={x.state} id="state" label="State" variant='filled' />
                            <TextField className={classes.formField} value={x.postcode} id="postcode" label="Postcode" variant='filled' />
                            <TextField className={classes.formField} value={x.country} id="country" label="Country" variant='filled' />
                        </div>
                    </div>
                    <div className={classes.formSection}>
                        <Typography variant='h6'>Visa Details</Typography>
                        <div className={classes.fieldGroup}>
                            <TextField className={classes.formField} value={x.visatype} id="visatype" label="Visa Type" variant='filled' />
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDatePicker
                                    variant="inline"
                                    inputVariant="filled"
                                    className={classes.formField}
                                    id="visaexpiry"
                                    label="Visa Expiry"
                                    value={x.visaexpiry}
                                    // onChange={date => handleDateChange(date)}
                                    format="DD/MM/YYYY"
                                />
                            </MuiPickersUtilsProvider>
                            <TextField className={classes.formField} value={x.countryofpassport} id="passport" label="Country of Passport" variant='filled' />
                        </div>
                    </div>
                    <div className={classes.formSection}>
                        <Typography variant='h6'>Education</Typography>
                        <div className={classes.fieldGroup}>
                            <TextField className={classes.formField} value={x.degree} id="degreetitle" label="Degree Title" variant='filled' />
                            <FormControl className={classes.formField}>
                                <InputLabel>
                                    Degree Level
                        </InputLabel>
                                <Select
                                    id="degreeLevel"
                                    value={x.degreelevel}
                                    variant='filled'
                                >
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
                            <TextField className={classes.formField} value={x.institution} id="institution" label="Institution" variant='filled' />
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDatePicker
                                    variant="inline"
                                    inputVariant="filled"
                                    className={classes.formField}
                                    id="degreecompletion"
                                    label="Completion Date"
                                    value={x.completion}
                                    // onChange={date => handleDateChange(date)}
                                    format="DD/MM/YYYY"
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>
                </form>
            ))}
        </div>
    )
}

export default Profile;
