import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import {setValue} from "../../../../redux/actions/qrcode"

import "./index.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      height:"100%",
    },
    height:"100%"
  },
}));

export default function LinkForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const setValueText = (e) => {
    dispatch(setValue(e.target.value))
  }
  return (
    <div className="formlink">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" multiline className={classes.root} onChange={setValueText} label="Link" variant="outlined" />
      </form>
    </div>
  );
}
