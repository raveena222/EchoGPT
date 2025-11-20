import express from "express";
import http from "http";
import cors from "cors";
import { registerSocketServer } from "./src/socketServer.js";

const app = express();

const server = http.createServer(app);

// register socket server
registerSocketServer(server);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
