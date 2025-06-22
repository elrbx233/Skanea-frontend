import React, { useState } from 'react';

const API_URL = 'http://localhost:3000/api/chat';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages((msgs) => [...msgs, { role: 'user', text: userText }]);
    setInput('');
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userText }),
      });
      const data = await response.json();
      setMessages((msgs) => [...msgs, { role: 'bot', text: data.response }]);
    } catch (err) {
      console.error(err);
      setMessages((msgs) => [...msgs, { role: 'bot', text: 'Error al obtener respuesta' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((m, index) => (
          <div key={index} className={`message ${m.role}`}>{m.text}</div>
        ))}
        {loading && <div className="message bot">...</div>}
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta"
        />
        <button type="submit" disabled={loading}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Chat;
