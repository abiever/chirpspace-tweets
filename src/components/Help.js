import React, { useState } from 'react';

export default function Help() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="help-container">
      <button id="help-button" onClick={() => setShowModal(!showModal)}>
        <span class="material-symbols-outlined">help</span>
      </button>
      {showModal && (
        <div id="modal">
          <p>This is the content of the modal.</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
