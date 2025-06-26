import React, { useState } from 'react';
import Chat from './Chat.jsx';
import ChatHistory from './ChatHistory.jsx';
import SettingsOverlay from './SettingsOverlay.jsx';

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="app-container">
      <ChatHistory />
      <div className="chat-area">
        <div className="top-bar">
          <button
            className="settings-btn"
            onClick={() => setShowSettings(true)}
            aria-label="Ajustes"
          >
            ⚙️
          </button>
        </div>
        <Chat />
      </div>
      {showSettings && <SettingsOverlay onClose={() => setShowSettings(false)} />}
    </div>
  );
}

export default App;
