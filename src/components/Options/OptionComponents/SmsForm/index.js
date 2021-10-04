import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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
    
}));
export default function SmsForm() {
    const numbersRegex = /^[0-9]+$/;
    //   if(inputtxt.value.match(numbers))
    const classes = useStyles();
    const [state, setState] = React.useState({
        phone: "",
        content: "",
    });
    
    const dispatch = useDispatch();
    useEffect(() => {
        let valueQrcode = `sms:${state.phone}:${state.content}`;
        dispatch(setValue(valueQrcode));
    }, [state]);

    return (
        <form className={classes.form} noValidate autoComplete="off">
            <TextField
                multiline
                id="outlined-basic"
                style={{ flex: "0 1 auto" }}
                label="Phone"
                variant="outlined"
                value={state.phone}
                onChange={(e) =>
                    setState({ ...state, phone: e.target.value })
                }
            />
            <TextField
                multiline
                id="outlined-basic"
                className={classes.textfield}
                label="Content"
                variant="outlined"
                value={state.content}
                onChange={(e) =>
                    setState({ ...state, content: e.target.value })
                }
            />
            
        </form>
    );
}
