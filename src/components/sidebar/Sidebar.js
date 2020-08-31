import React from 'react'
import SideBarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import ChatIcon from '@material-ui/icons/People'
import PeopleIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import './Sidebar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <SideBarRow />
            <SideBarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SideBarRow Icon={PeopleIcon} title='Freinds' />
            <SideBarRow Icon={ChatIcon} title='Messanger' />
            <SideBarRow Icon={StorefrontIcon} title='Marketplace' />
            <SideBarRow Icon={VideoLibraryIcon} title='Videos' />
        </div>
    )
}

export default SideBar;