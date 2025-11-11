import React from "react";
import Messsages from "./Messages";
import NewMessageInput from "./NewMessageInput";

const ChatLogo = () => {
    return (
        <div className="chat_gpt_logo_container">
            <p className="chat_gpt_logo">EchoGPT</p> 
        </div>
    );
};

const Chat = () => {
    return (
        <div className="chat_container"> 
            <div className="chat_selected_container">
                <Messsages />
                <NewMessageInput />
            </div>
        </div>
    );
};

export default Chat;