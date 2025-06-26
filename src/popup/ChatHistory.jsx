import React from 'react';

function ChatHistory() {
  const chats = ['Chat 1', 'Chat 2'];

  return (
    <div className="chat-history">
      {chats.map((chat, index) => (
        <div key={index} className="chat-history-item">
          {chat}
        </div>
      ))}
    </div>
  );
}

export default ChatHistory;
