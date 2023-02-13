import React, { useState } from 'react';

export default function Help() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="help-container">
      <button id="help-button" onClick={() => setShowModal(!showModal)}>
        <span className="material-symbols-outlined">help</span>
      </button>
      {showModal && (
        <div id="modal">
            <h2>about</h2>
            <p>This delightfully simple site is designed to be your personal birdhouse — an avian escape where you can relax and just focus on expressing your tweets and warbles.</p>
            <br></br>
            <p>settle down in your roost and incubate your thoughts before you send them off to fly all on their own.</p>
            <br></br>
            <p>you can't actually tweet from here — yet — it's just a place to write them. Think of it as a journal where you hatch your initial drafts.</p>
            <br></br>
            <p>if you have any feedback, need a bug to be pecked, or simply have a suggestion for a new feature, please don't hesitate to send a raven to:</p>
            <br></br>
            <p><a href='mailto:aaronlbtandem@gmail.com'>aaronlbtandem@gmail.com</a></p>
            <h2 className='convenient-keystrokes'>quick keystrokes</h2>
            <p><b>add textbox</b> — shift + enter</p>
            <p><b>delete textbox</b> — shift + tab</p>
            
            {/* <button onClick={() => setShowModal(false)}>Close</button> */}
        </div>
      )}
    </div>
  );
}
