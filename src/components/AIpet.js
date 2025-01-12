import React, { useState } from "react";
import axios from "axios";

const TestApiCall = () => {
  const [response, setResponse] = useState("");

  const handleApiCall = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/openai", {
        message: "Hello, world!",
        max_tokens: 5,
      });
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error(error);
      setResponse("Error: Unable to fetch data");
    }
  };

  return (
    <div>
      <button onClick={handleApiCall}>Test API Call</button>
      <p>Response: {response}</p>
    </div>
  );
};

export default TestApiCall;
