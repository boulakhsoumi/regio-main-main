import React, { useState, useEffect } from "react";
import "./ChatLive.css";

export default function ChatLive() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("chatMessages")) || [
      { text: "Bonjour! Comment puis-je vous aider? 😊", sender: "bot" },
    ]
  );
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setIsThinking(true);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Je réfléchis...", sender: "bot-thinking" },
      ]);

      setTimeout(() => {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.sender === "bot-thinking"
              ? { text: "Merci pour votre message! 😊", sender: "bot" }
              : msg
          )
        );
        setIsThinking(false);
      }, 2000);
    }, 1000);
  };

  return (
    <div className="chat-container">
      {/* Bouton flottant */}
      <div className="chat-toggle-btn" onClick={toggleChat}>
        {isOpen ? "❌" : "💬"}
      </div>

      {/* Fenêtre du chat */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Live Chat</h3>
            <button className="close-btn" onClick={toggleChat}>
              ✖
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Écrire un message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} disabled={isThinking}>
              📩
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
