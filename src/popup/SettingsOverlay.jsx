import React from 'react';

function SettingsOverlay({ onClose }) {
  return (
    <div className="settings-overlay">
      <div className="settings-window">
        <button className="close-btn" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>
        <h2>Ajustes</h2>
        <p>Configuraciones aquí...</p>
      </div>
    </div>
  );
}

export default SettingsOverlay;
