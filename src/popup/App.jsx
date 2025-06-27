import React, { useState } from 'react';
import Chat from './Chat.jsx';
import ChatHistory from './ChatHistory.jsx';
import SettingsOverlay from './SettingsOverlay.jsx';
import logo from '../../resources/icon.png';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="app-container">
      {showHistory && <ChatHistory />}
      <div className="chat-area">
        <div className="top-bar">
          <button
            className="history-btn"
            onClick={() => setShowHistory(!showHistory)}
            aria-label="Historial"
            title="Historial"
          >
            📜
          </button>
          <div className="logo-container">
            <img src={logo} alt="Skanea logo" className="logo" />
          </div>
          <button
            className="settings-btn"
            onClick={() => setShowSettings(true)}
            aria-label="Ajustes"
            title="Ajustes"
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
