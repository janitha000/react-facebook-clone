import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


const MessageSender = () => {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSbmit = (e) => {
        e.preventDefault();

        setInput('')
        setImageUrl('')
    }

    return (
        <div className="messagesender">
            <div className="sender__top">
                <Avatar />
                <form>
                    <input className='sender__input'
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="What's on your mind?" />
                    <input placeholder="image URL (Optional)"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)} />
                    <button onClick={handleSbmit} type="submit">Submit</button>
                </form>
            </div>
            <div className="sender__bottom">
                <div className='sender__option'>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className='sender__option'>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='sender__option'>
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;