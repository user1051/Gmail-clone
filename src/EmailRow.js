import React from 'react'
import './EmailRow.css'
import { IconButton, Checkbox } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from './features/mailSlice'

function EmailRow({title, subject, description, time, id}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        }))
        history.push('/mail')
    }
    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                 <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <div className="emailRow__title">
                <h3>{title}</h3>
            </div>
            <div className="emailRow__message">
                <h4>{subject}{" "} 
                <span className="emailRow__desc">{description}</span>
                </h4>
            </div>
            <p className="emailRow__time">{time}</p>
        </div>
    )
}

export default EmailRow
