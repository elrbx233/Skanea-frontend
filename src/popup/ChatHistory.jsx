import React from 'react';

function ChatHistory() {
  const chats = []; // o ['Chat 1', 'Chat 2'] si es para testing

  return (
    <div className="chat-history">
      <h3>Historial</h3>
      {chats.length === 0 ? (
        <div className="chat-history-empty">No hay conversaciones</div>
      ) : (
        chats.map((chat, index) => (
          <div key={index} className="chat-history-item">
            {chat}
          </div>
        ))
      )}
    </div>
  );
}

export default ChatHistory;