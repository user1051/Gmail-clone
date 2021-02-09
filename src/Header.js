import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser)
    // logout part
    const dispatch = useDispatch()
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }
    return (
        <div className="header">
           
           <div className="header__left">
               <IconButton>
                    <MenuIcon/>
               </IconButton> 
               <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt=""/>
           </div>
           
           <div className="header__center">
                <SearchIcon/>
                <input type="text" placeholder="search mail"/>
                <ArrowDropIcon/>
           </div>
           
           <div className="header__right">
               <IconButton>
                    <AppsIcon/>
               </IconButton> 
               <IconButton>
                   <NotificationsIcon/>
               </IconButton>
                <Avatar src={user?.photoUrl} onClick={signOut}/> 
                {/* ? is for protecting from undefined error */}
           </div>
        </div>
    )
}

export default Header
