import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MailIcon from "@material-ui/icons/Mail";
import LinkIcon from "@material-ui/icons/Link";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import WifiIcon from '@material-ui/icons/Wifi';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import DescriptionIcon from '@material-ui/icons/Description';
import SmsIcon from '@material-ui/icons/Sms';
import "./index.scss";
import OptionComponents from "./OptionComponents";

const useStyles = makeStyles({
  root: {
    width: "100%",
    
  },
  selected:{
    background:"#eef0fa"
  }
 
});

export default function Options() {
  const classes = useStyles();
  const [value, setValues] = React.useState("link");

  const handleChangeNaviga = (event, newValue) => {
    setValues(newValue);
  };

  return (
    <div className="options">
      <div className="form_input">
        <OptionComponents option={value} />
      </div>
      <div className="navigation">
        <div className="naviLeft">
          <BottomNavigation
            style={{height: "100%"}}
            value={value}
            onChange={handleChangeNaviga}
            className={classes.root}
          >
            <BottomNavigationAction
              classes={{selected:classes.selected}}
              label="Link"
              value="link"
              icon={<LinkIcon />}
            />
            <BottomNavigationAction
              classes={{selected:classes.selected}}
              label="Email"
              value="email"
              icon={<MailIcon />}
            />
            <BottomNavigationAction
              classes={{selected:classes.selected}}
              label="SMS"
              value="sms"
              icon={<SmsIcon />}
            />
            <BottomNavigationAction
              classes={{selected:classes.selected}}
              label="Contact"
              value="contact"
              icon={<ContactMailIcon />}
            />
           
            <BottomNavigationAction
              classes={{selected:classes.selected}}
              label="Text"
              value="text"
              icon={<TextFieldsIcon />}
            />
            <BottomNavigationAction
              classes={{selected:classes.selected}}
              label="Wifi"
              value="wifi"
              icon={<WifiIcon />}
            />
            
          </BottomNavigation>
        </div>
        
      </div>
      
    </div>
  );
}
