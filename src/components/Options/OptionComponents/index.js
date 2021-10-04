import React from 'react'
import ContactForm from './ContactForm';
import EmailForm from './EmailForm';
import LinkForm from './LinkForm';
import SmsForm from './SmsForm';
import TextForm from './TextForm';
import WifiForm from './WifiForm';

export default function OptionComponents({option}) {
    switch (option) {
        case "email":
            return <EmailForm/>
        case "contact":
            return <ContactForm/>
        case "link":
            return <LinkForm/>
        case "text":
            return <TextForm/>
        case "wifi":
            return <WifiForm/>
        case "sms":
            return <SmsForm/>
        default:
            return <LinkForm/>
    }
}
