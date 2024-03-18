import React from 'react';
import './Sidebar.css';
import XIcon from '@mui/icons-material/X';
import SidebarOption from './SidebarOption.js';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Grok from '@mui/icons-material/GridOn';
import Lists from '@mui/icons-material/FormatListBulletedOutlined';
import Profile from '@mui/icons-material/Person2Outlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Button from '@mui/material/Button';

function Sidebar ()
{
return (
<div className="sidebar">

{/* X Icon */}

<XIcon />

<SidebarOption active Icon = {HomeIcon} text = 'Home'/>
<SidebarOption Icon = {SearchIcon} text = 'Explore'/>
<SidebarOption Icon = {NotificationsNoneIcon} text = 'Notifications'/>
<SidebarOption Icon = {MailOutlineOutlinedIcon} text = 'Messages'/>
<SidebarOption Icon = {Grok} text = 'Grok'/>
<SidebarOption Icon = {Lists} text = 'Lists'/>
<SidebarOption Icon = {Profile} text = 'Profile'/>
<SidebarOption Icon = {MoreHorizOutlinedIcon} text = 'More'/>


{/* Button -> Post */}

<Button variant = "outlined" className = "sidebar_post" fullWidth> Post </Button>


</div>
    );
}

export default Sidebar;