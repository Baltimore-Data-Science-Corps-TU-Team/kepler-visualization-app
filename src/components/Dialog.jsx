import { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
// import DateRangeSelector from '../components/DateRangeSelector';
// import MultipleSelectChip from '../components/MultipleSelect';
import MaterialUIPickers from '../components/DateSelector';
import CrimeSelect from '../components/Autocomplete';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(0),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
}));

export default function FormDialog() {
    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Fab variant="extended" size="large" onClick={handleClickOpen}>
                {/* <NavigationIcon className={classes.extendedIcon} /> */}
                Load Data to the Map
            </Fab>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Load a DataFrame</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        Choose a date range and a crime type. Data source is Baltimore Open Data.
                    </DialogContentText>
                    <form className={classes.form} noValidate>
                        <FormControl className={classes.formControl}>
                            <MaterialUIPickers />
                            <br />
                            <CrimeSelect />
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Search
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
