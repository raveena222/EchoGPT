import React from "react";
import {useSelector } from "react-redux";
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
    const selectedConversationId = useSelector((state) => state.dashboard.selectedConversationId);


    return (
        <div className="chat_container"> 
        {
            !selectedConversationId ? (
                <ChatLogo />

            ) :(
        
            <div className="chat_selected_container">
                <Messsages />
                <NewMessageInput />
            </div>
        )}
        </div>
    );
};

export default Chat;