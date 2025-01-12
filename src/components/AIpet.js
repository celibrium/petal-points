import React, { useState } from "react";
import axios from "axios";
import "./AIpet.css"; 

const AIpet = ({isChatVisible, setIsChatVisible}) => {
  const [messages, setMessages] = useState([]); // Store chat messages
  const [input, setInput] = useState(""); // Store user input
  const [error, setError] = useState(""); // Store error messages

  const handleSend = async () => {
    if (!input.trim()) {
      setError("Please enter a message.");
      return;
    }

    setError("");
    const userMessage = { role: "user", content: input };

    // Add the user's message to the chat
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const res = await axios.post("http://localhost:5001/api/openai", {
        message: input,
      });

      // Add the bot's response to the chat
      const botMessage = {
        role: "assistant",
        content: res.data.result.choices[0].message.content,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setInput(""); 
    } catch (err) {
      console.error(err);
      setError("Failed to get a response from the bot.");
    }
  };

  return (
    <div className="chat-container">
      {!isChatVisible ? (
        <button
          onClick={() => setIsChatVisible(true)}
          className="chat-button"
        >
          <strong>Chat with me!</strong>
        </button>
      ) : (
        <div className="chatbox">
          <button
            onClick={() => setIsChatVisible(false)}
            className="chatbox-close"
          >
            ×
          </button>
          <div className="chatbox-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.role}`}
              >
                <div className={`chat-bubble ${message.role}`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            rows="3"
            className="chatbox-input"
          />
          <button onClick={handleSend} className="chatbox-send">
            Send
          </button>
          {error && <p className="chat-error">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default AIpet;
