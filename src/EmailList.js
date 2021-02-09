import React, { useEffect, useState } from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import EmailRow from './EmailRow'
import { db }  from './firebase'

function EmailList() {

    const [emails, setEmails] = useState([]);
    // run this component once when the email component loads
    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setEmails(snapshot.docs.map((doc) =>({
            id: doc.id,
            data: doc.data(),
        }))
        )
        );
    }, []);


    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                     <IconButton>
                        <RedoIcon/>
                    </IconButton>
                     <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                     <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                     <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                     <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section
                    Icon={InboxIcon}
                    title="Primary"
                    color="red"
                    selected
                />
                 <Section
                    Icon={PeopleIcon}
                    title="Social"
                    color="#1a73e8"
                />
                 <Section
                    Icon={LocalOfferIcon}
                    title="Promotions"
                    color="green"
                />
            </div>
             <div className="emailList__List">
                   {emails.map(({id, data: { to, subject, message, timestamp }
                     }) => 
                   (  // destructuring (id and data) and pulling data from firebase
                        <EmailRow
                            id={id}
                            key={id}
                            title={to}
                            subject={subject}
                            description={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}
                        />
                   ))} 
                    <EmailRow
                        title="Youtube"
                        subject="Congratulations 🎉"
                        description="Hey Hitesh you are selected..."
                        time="7.00 pm"
                    />
                     <EmailRow
                        title="Tesla"
                        subject="Thank you Hitesh for shopping with us"
                        description="We hope that you liked our porduct and don't forget to rate us"
                        time="5.02 pm"
                    />
                </div>
        </div>
    )
}

export default EmailList
