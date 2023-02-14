import React, { useState } from 'react';
import { saveAs } from 'file-saver';

export default function HelpModal(props) {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const content = props.savedContent.join('\n\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'chirps.txt');
  };

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
            <h2 className='convenient-keystrokes'>keystrokes</h2>
            <p><b>add textbox</b> — shift + enter</p>
            <p><b>delete textbox</b> — shift + tab</p>
            <p><b>save & reset</b> — left click button</p>
            <h2>saved tweets</h2>
            <p>when you save your tweets and the writing area resets, your tweets will be saved here.</p>
            <br></br>
            <p><em>{props.savedContent.length ? `You have saved ${props.savedContent.length} tweets.` : 'You have not saved any tweets yet.'}</em></p>
            <button onClick={handleDownload}>Download</button>
        </div>
      )}
    </div>
  );
}
