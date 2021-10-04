import React from "react";
import TextField from "@material-ui/core/TextField";
import "./index.scss";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "../../../../redux/actions/qrcode";

export default function ContactForm() {
    
    const [state, setState] = useState({
        name:"",
        phone:"",
        email:"",
        address:""
    })
    const dispatch = useDispatch();
    useEffect(() => {
        let valueQrcode = `MECARD:N:${state.name};ADR:${state.address};TEL:${state.phone};EMAIL:${state.email};;`
        dispatch(setValue(valueQrcode));
        
    }, [state])

    return (
        <div className="containerContact">
            <div className="contactMain">
                <TextField
                    className="textfield"
                    multiline
                    value={state.name}
                    onChange={(e) => setState({...state,name:e.target.value})}
                    label="Name"
                    style={{ width: "53%" }}
                    variant="outlined"
                />
                <TextField
                    value={state.phone}
                    onChange={(e) => setState({...state,phone:e.target.value})}
                    className="textfield"
                    multiline
                    label="Phone"
                    style={{ width: "45%" }}
                    variant="outlined"
                />
            </div>
            <div className="contactEmail">
                <TextField
                value={state.email}
                onChange={(e) => setState({...state,email:e.target.value})}
                    className="textfield"
                    multiline
                    label="Email"
                    fullWidth
                    variant="outlined"
                />
            </div>
            <div className="contactAddress">
                <TextField
                value={state.address}
                onChange={(e) => setState({...state,address:e.target.value})}
                    className="textfield"
                    multiline
                    label="Address"
                    fullWidth
                    variant="outlined"
                />
            </div>
        </div>
    );
}
