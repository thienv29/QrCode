import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useEffect } from "react";
import { setValue } from "../../../../redux/actions/qrcode";
import { useDispatch } from "react-redux";

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
export default function EmailForm() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        email:"",
        subject:"",
        content:"",
    })
     const dispatch = useDispatch();
    useEffect(() => {
        
        let valueQrcode = `mailto:${state.email}?subject=${encodeURI(state.subject)}&body=${encodeURI(state.content)}`
       dispatch(setValue(valueQrcode));
    }, [state])

    return (
        <form className={classes.form} noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                style={{ flex: "0 1 auto" }}
                label="Email"
                variant="outlined"
                multiline
                value={state.email}
                onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                }
            />
            <TextField
                id="outlined-basic"
                style={{ flex: "0 1 auto", marginTop:"10px" }}
                label="Subject"
                variant="outlined"
                multiline
                value={state.subject}
                onChange={(e) =>
                    setState({ ...state, subject: e.target.value })
                }
            />
            <TextField
                id="outlined-basic"
                className={classes.textfield}
                label="Content"
                variant="outlined"
                multiline
                value={state.content}
                onChange={(e) =>
                    setState({ ...state, content: e.target.value })
                }
            />
         
        </form>
    );
}
