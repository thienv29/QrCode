import React from "react";
import { ColorPicker } from "material-ui-color";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CenterFocusWeakIcon from "@material-ui/icons/CenterFocusWeak";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import CropFreeIcon from "@material-ui/icons/CropFree";
import CropDinIcon from "@material-ui/icons/CropDin";
import { useState, useEffect } from "react";
import "./index.scss";
import {
    setBg,
    setFg,
    setLevel,
    setLogo,
} from "../../redux/actions/qrcode";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    colorRed: {
        color: "#F50057",
    },
}));
export default function FormControll() {
    const [TogleControl, setTogleControl] = useState({
        squareSize: false,
        centerPosition: false,
    });
    const [Slide, setSlide] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });
    const [LinkLogo, setLinkLogo] = useState("");
    useEffect(() => {
        if (LinkLogo === "") {
            dispatch(setLogo(undefined));
        } else {
            dispatch(
                setLogo({
                    src: LinkLogo,
                    x: TogleControl.centerPosition ? null : Number(getValueComponent("SlideX")),
                    y: TogleControl.centerPosition ? null :Number(getValueComponent("SlideY")),
                    height: Number(getValueComponent("Slide-height")),
                    width: Number(getValueComponent("Slide-width")),
                    excavate: true,
                })
            );
            
        }
    }, [Slide, LinkLogo, TogleControl.centerPosition]);

    const classes = useStyles();

    const state = useSelector((state) => state.qrcode);
    const dispatch = useDispatch();

    const handleChangeLevel = (event) => {
        dispatch(setLevel(event.target.value));
    };
    const handleOnchangeBg = (e) => {
        dispatch(setBg(e.css.backgroundColor));
    };
    const handleOnchangeFg = (e) => {
        dispatch(setFg(e.css.backgroundColor));
    };
    const getValueComponent = (className) => {
        const value = document.querySelector(
            `.${className} input[type="hidden"]`
        ).value;
        return value;
    };
    return (
        <div className="formControll">
            <div className="formControll_left">
                <div id="color">
                    <div className="background">
                        <span>Background</span>
                        <ColorPicker
                            style={{ width: "40px" }}
                            value={state.bgColor}
                            disableAlpha={true}
                            defaultValue="red"
                            hideTextfield
                            onChange={handleOnchangeBg}
                        />
                    </div>
                    <div className="background">
                        <span>Foreground</span>
                        <ColorPicker
                            style={{ width: "40px" }}
                            value={state.fgColor}
                            disableAlpha={true}
                            defaultValue="red"
                            hideTextfield
                            onChange={handleOnchangeFg}
                        />
                    </div>
                </div>
                <div className="level">
                    <FormControl
                        variant="filled"
                        className={classes.formControl}
                    >
                        <InputLabel id="demo-simple-select-filled-label">
                            Level
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={state.level}
                            onChange={handleChangeLevel}
                        >
                            <MenuItem value={"L"}>Version 1</MenuItem>
                            <MenuItem value={"M"}>Version 2</MenuItem>
                            <MenuItem value={"Q"}>Version 3</MenuItem>
                            <MenuItem value={"H"}>Version 4</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="formControll_right">
                <div className="linkLogo">
                    <TextField
                        id="outlined-basic"
                        style={{ flex: "0 1 auto" }}
                        label="Link logo"
                        variant="outlined"
                        value={LinkLogo}
                        onChange={(e) => setLinkLogo(e.target.value)}
                    />
                </div>
                <div className="slide">
                    <div className="slideLogoSize">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CropFreeIcon />}
                                    checkedIcon={<CropDinIcon />}
                                    name="checkedH"
                                    onChange={() =>
                                        setTogleControl({
                                            ...TogleControl,
                                            squareSize:
                                                !TogleControl.squareSize,
                                        })
                                    }
                                />
                            }
                        />
                        <div className="slideLogoSize-slide">
                            <Slider
                                className={`${classes.colorRed} Slide-width`}
                                aria-labelledby="continuous-slider"
                                onChange={(e, value) =>
                                    setSlide({
                                        ...Slide,
                                        width: value,
                                    })
                                }
                                valueLabelDisplay="auto"
                                value={Slide.width}
                            />
                            <Slider
                                className={`${classes.colorRed} Slide-height`}
                                valueLabelDisplay="auto"
                                aria-labelledby="continuous-slider"
                                onChange={(e, value) =>
                                    setSlide({
                                        ...Slide,
                                        height: value,
                                    })
                                }
                                value={
                                    TogleControl.squareSize
                                        ? Slide.width
                                        : Slide.height
                                }
                                disabled={TogleControl.squareSize}
                            />
                        </div>
                    </div>
                    <div className="slideLogoPosition">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CenterFocusWeakIcon />}
                                    checkedIcon={
                                        <CenterFocusStrongIcon />
                                    }
                                    name="checkedH"
                                    color="primary"
                                    onChange={() =>
                                        setTogleControl({
                                            ...TogleControl,
                                            centerPosition:
                                                !TogleControl.centerPosition,
                                        })
                                    }
                                />
                            }
                        />
                        <div className="slideLogoSize-slide">
                            <Slider
                                className="SlideX"
                                aria-labelledby="continuous-slider"
                                valueLabelDisplay="auto"
                                onChange={(e, value) =>
                                    setSlide({ ...Slide, x: value })
                                }
                                value={
                                    TogleControl.centerPosition
                                        ? 120
                                        : Slide.x
                                }
                                disabled={TogleControl.centerPosition}
                                step={1}
                                min={0}
                                max={240}
                            />
                            <Slider
                                className="SlideY"
                                aria-labelledby="continuous-slider"
                                valueLabelDisplay="auto"
                                onChange={(e, value) =>
                                    setSlide({ ...Slide, y: value })
                                }
                                value={
                                    TogleControl.centerPosition
                                        ? 120
                                        : Slide.y
                                }
                                disabled={TogleControl.centerPosition}
                                step={1}
                                min={0}
                                max={240}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
