import zIndex from "@mui/material/styles/zIndex";
import React, { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        setMessages([...newMessages, { sender: "bot", text: data.answer }]);
    };

    return (
        <div>
            {/* Floating Chat Button */}
            {!isOpen && (
                <button onClick={toggleChat} style={styles.chatButton}>
                    <FaComments size={24} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div style={styles.chatContainer}>
                    <div style={styles.chatHeader}>
                        <span>Chatbot</span>
                        <button onClick={toggleChat} style={styles.closeButton}>
                            <FaTimes size={18} />
                        </button>
                    </div>

                    <div style={styles.chatBody}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "5px 0" }}>
                                <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>

                    <div style={styles.chatFooter}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                            style={styles.input}
                            placeholder="Type a message..."
                        />
                        <button onClick={sendMessage} style={styles.sendButton}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Styling
const styles = {
    chatButton: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 1,
    },
    chatContainer: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: 1,
    },
    chatHeader: {
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    closeButton: {
        background: "none",
        border: "none",
        color: "white",
        cursor: "pointer",
    },
    chatBody: {
        height: "250px",
        overflowY: "auto",
        padding: "10px",
    },
    chatFooter: {
        display: "flex",
        borderTop: "1px solid #ddd",
        padding: "10px",
    },
    input: {
        flex: 1,
        padding: "8px",
        border: "1px solid #ddd",
        borderRadius: "5px",
    },
    sendButton: {
        marginLeft: "5px",
        padding: "8px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
    },
};

export default Chatbot;
