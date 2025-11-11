import React from "react";
import NewChatButton from "./NewChatButton";
import ListItem from "./ListItem";
import DeleteConversationsButton from "./DeleteConversationsButton";


const Sidebar = () => {
    return (
        <div className="sidebar_container"> 
            <NewChatButton />
            <ListItem title="History" />
            <DeleteConversationsButton />
        </div>
    );
};

export default Sidebar;