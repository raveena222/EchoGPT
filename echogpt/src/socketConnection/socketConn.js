import {io} from "socket.io-client";
import { store } from "../store";
import { setConversations } from "../Dashboard/dashboardSlice";

let socket;

export const connecWithSocketServer = () => {
    socket = io("http://localhost:5000");

    socket.on("connect", () => {
        console.log("Connected to socket server");
        console.log(socket.id);

        socket.emit("session-history", {
            sessionId: localStorage.getItem("sessionId"),
        });

        socket.on("session-details", (data) => {
            const {sessionId, conversations} = data;
            localStorage.setItem("sessionId", sessionId);
            store.dispatch(setConversations(conversations));
        });
    });
};

export const sendConversationMessage = (message, conversationId) => {
    socket.emit("conversation-message", {
        message,
        conversationId,
    });
};
