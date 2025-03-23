import React, { useState, useEffect } from 'react';
import './App.css';
import photo from './me.jpg'; // 你的照片放這裡

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [visitorCount, setVisitorCount] = useState(0);

  // Visitor counter increases every time page is loaded
  useEffect(() => {
    setVisitorCount((prev) => prev + 1);
  }, []);

  const handleAddMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Welcome to My Personal Page</h1>
      <img src={photo} alt="Me" className="profile-pic" />
      <p>Hello! Here comes Joko（張紋慈 R12921A11）</p>
      <p>A developer passionate about web technologies and AI.</p>

      <div className="counter">
        <strong>Visitor Count:</strong> {visitorCount}
      </div>

      <div className="message-board">
        <h2>Message Board</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Leave a message"
        />
        <button onClick={handleAddMessage}>Submit</button>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
