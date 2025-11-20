import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { BsSend } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import { addMessage, setSelectedConversationId } from "../dashboardSlice";
import { sendConversationMessage } from "../../socketConnection/socketConn";


const NewMessageInput = () => {
    const [content , setContent] = useState("");

    const dispatch = useDispatch();

    const selectedConversationId = useSelector(state => state.dashboard.selectedConversationId);

    const processMessage = () => {
        const message = {
            aiMessage: false,
            content,
            id: uuid(),
            animate: false,
        };

        console.log(message);

        const conversationId = selectedConversationId=== 'new' ? uuid() : selectedConversationId;

        dispatch(addMessage({
            conversationId,
            message,
        }));

        dispatch(setSelectedConversationId(conversationId));

        sendConversationMessage(message, conversationId);

        setContent("");
    };

    const handleSendMessage = () => {
        if(content.length>0){
            processMessage();
        }
    };


    const handleKeyPressed = (event) => {
        if(event.code === "Enter" && content.length>0){
            processMessage();
        }   
    };

    return (
        <div className="new_message_input_container">  
            <input 
                className="new_message_input"
                placeholder="Write ..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleKeyPressed}
            />
            <div className="new_message_icon_container" onClick={handleSendMessage}>
                <BsSend color="grey"/>
            </div>                              
        </div>
    );
};


export default NewMessageInput;