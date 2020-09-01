import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageCenter from './MessageSender'

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageCenter />
        </div>
    )
}

export default Feed;