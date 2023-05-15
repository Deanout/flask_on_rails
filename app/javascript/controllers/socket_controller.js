import { Controller } from "@hotwired/stimulus";
import io from "socket.io-client";

// Connects to data-controller="socket"
export default class extends Controller {
  connect() {
    console.log("Socket connected");

    const socket = io("http://localhost:5000");

    socket.on("connect", () => {
      console.log("Connected to the WebSocket server");
    });

    socket.on("message", (data) => {
      console.log("Received a message from the server:", data);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from the WebSocket server");
    });

    // Emit a custom event to the server
    socket.emit("custom_event", { message: "Hello, server!" });

    // Send a message to the server every 3 seconds
    setInterval(() => {
      socket.send("Hello, server!");
    }, 3000);
  }
}
