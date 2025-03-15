import React, { useState, useEffect } from "react";
import { FaComments, FaTimes, FaUser } from "react-icons/fa";
import styles from "../../chatbot.module.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    // Show chatbot popup after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowPopup(false);
    };

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
        <div className={styles.chatbotWrapper}>
            {/* Chat Popup Notification */}
            {showPopup && !isOpen && (
                <div 
                    className={styles.chatPopup} 
                    role="button" 
                    tabIndex={0} 
                    onClick={toggleChat} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") toggleChat();
                    }}
                >
                    Need help? Click to chat!
                </div>
            )}

            {/* Floating Chat Button */}
            {!isOpen && (
                <button className={styles.chatButton} onClick={toggleChat}>
                    <FaComments size={24} />
                </button>
            )}

            {/* Chat Window */}
            <div className={`${styles.chatContainer} ${isOpen ? styles.open : ""}`}>
                <div className={styles.chatHeader}>
                    <FaUser className={styles.userIcon} size={18} />
                    <span>Chat Support</span>
                    <button className={styles.closeButton} onClick={toggleChat}>
                        <FaTimes size={18} />
                    </button>
                </div>

                <div className={styles.chatWelcome}>
                    Hi! I'm your chatbot assistant. How can I help you?
                </div>

                <div className={styles.chatBody}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`${styles.message} ${msg.sender === "user" ? styles.user : styles.bot}`}>
                            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
                        </div>
                    ))}
                </div>

                <div className={styles.chatFooter}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Type a message..."
                    />
                    <button className={styles.sendButton} onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;