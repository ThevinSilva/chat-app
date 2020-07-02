import React from 'react';

import ReactEmoji from "react-emoji";

import './Message.css'

const Message = ({ message: {user, text}, name}) => {

    
    const trimmedName = name.trim().toLowerCase()

    


     if(user === 'admin'){
        return (
            <div className="center">
                <div className="adminBox">
                    <p>{ text }</p>
                </div>
            </div>
        )
    }
    
        if(user === trimmedName)
        {return (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorwhite">{ ReactEmoji.emojify(text) }</p>
                </div>
            </div>
        )}else{
        return(
            <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{  ReactEmoji.emojify(text) }</p>
            </div>
            <p className="sentText pl-10">{user}</p>
        </div>
        )
        }
    

}

export default Message; 