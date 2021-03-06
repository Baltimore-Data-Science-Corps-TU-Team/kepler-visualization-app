/* eslint-disable no-use-before-define */
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { CRIME_OPTIONS } from '../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        margin: theme.spacing(1)
    }
}));

export default function CrimeSelect({ crimeDescription, handleCrimeDescriptionChange }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Autocomplete
                disableCloseOnSelect
                filterSelectedOptions
                size="small"
                id="crime-description"
                options={CRIME_OPTIONS}
                getOptionLabel={(option) => option}
                value={crimeDescription}
                onChange={handleCrimeDescriptionChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Select Crime Options"
                        placeholder="Crime"
                    />
                )}
            />
        </div>
    );
}