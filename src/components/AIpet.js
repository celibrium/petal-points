import React, { useState } from "react";
import axios from "axios";

const OpenAITester = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!input) {
      setError("Please enter a message.");
      return;
    }

    setError("");
    setResponse("Loading...");

    try {
      const res = await axios.post("http://localhost:5001/api/openai", {
        message: input,
      });
      setResponse(res.data.result.choices[0].message.content);
    } catch (err) {
      console.error(err);
      setError("Failed to get a response from the server. Check your backend.");
      setResponse("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>OpenAI Backend Tester</h1>
      <div style={{ marginBottom: "10px" }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt here..."
          rows="4"
          cols="50"
          style={{ padding: "10px", fontSize: "16px", width: "100%" }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Send to OpenAI
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {response && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default OpenAITester;
