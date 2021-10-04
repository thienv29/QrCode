import { Button, Grid } from "@material-ui/core";
import Frames from "../Frames";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./index.scss";
import QRCODE from "qrcode.react";
import { useSelector } from "react-redux";
import React, { createRef } from 'react'
import { useScreenshot } from 'use-react-screenshot'

export default function Qrcode() {
  const state = useSelector((state) => state.qrcode);
  
  const ref = createRef(null)
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => {
    takeScreenshot(ref.current)
    const link = document.createElement('a')
    link.href = image;
    link.download ="qrcode.png";
    link.click();
  }
  return (
    <Grid className="qrcode ">
      <div className="qrcodeImg" ref={ref} >
        <QRCODE
        
          id="canvas"
          value={state.value}
          size={240}
          bgColor={state.bgColor}
          fgColor={state.fgColor}
          level={state.level}
          includeMargin={false}
          renderAs={"canvas"}
          imageSettings={state.imageSettings}
        />
      </div>
      <Frames src={image} />
      <div id="Download">
        <Button
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<GetAppIcon />}
          className="buttonDownload"
          onClick={getImage}
        >
          Download
        </Button>
      </div>
    </Grid>
  );
}
