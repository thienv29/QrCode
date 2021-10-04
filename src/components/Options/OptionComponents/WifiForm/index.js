import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setValue } from "../../../../redux/actions/qrcode";
const useStyles = makeStyles((theme) => ({
    form: {
        "& > *": {
            width: "100%",
        },
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    textfield: {
        "& > *": {
            width: "100%",
            height: "100%",
        },
        flex: "1 1 auto",
        height: "100%",
        margin: "10px 0 10px 0",
    },
    radio: {
        width: "30%",
    },
    radioGroup: {
        display: "flex",
        flexDirection: "row",
    },
}));
export default function WifiForm() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        security: "WPA",
        name: "",
        pass: "",
        hidden: false,
    });
    
    const dispatch = useDispatch();
    useEffect(() => {
        let valueQrcode = `WIFI:T:${state.security};S:${state.name};P:${state.pass};H:${state.hidden};`;
        dispatch(setValue(valueQrcode));
    }, [state]);

    return (
        <form className={classes.form} noValidate autoComplete="off">
            <TextField
                multiline
                id="outlined-basic"
                style={{ flex: "0 1 auto" }}
                label="Network Name"
                variant="outlined"
                value={state.name}
                onChange={(e) =>
                    setState({ ...state, name: e.target.value })
                }
            />
            <TextField
                multiline
                id="outlined-basic"
                className={classes.textfield}
                label="Password"
                variant="outlined"
                type="password"
                value={state.pass}
                onChange={(e) =>
                    setState({ ...state, pass: e.target.value })
                }
            />
            <FormControl component="fieldset">
                <FormLabel component="legend">Security</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={state.security}
                    onChange={(e)=>setState({...state,security:e.target.value})}
                    className={classes.radioGroup}
                >
                    <FormControlLabel
                        value="WPA"
                        className={classes.radio}
                        control={<Radio />}
                        label="WPA/WPA2"
                    />
                    <FormControlLabel
                        value="WEP"
                        className={classes.radio}
                        control={<Radio />}
                        label="WEP"
                    />
                    <FormControlLabel
                        value="nopass"
                        className={classes.radio}
                        control={<Radio />}
                        label="None"
                    />
                </RadioGroup>
            </FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        name="hiden"
                        value={state.hidden}
                        onChange={() => setState({...state,hidden:!state.hidden})}
                    />
                }
                label="Wifi Hidden"
            />
        </form>
    );
}
