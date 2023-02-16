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
            <p>you can't actually tweet from here — yet — it's just a place to incubate your thoughts. Think of it as a nest where you hatch your initial drafts before sending them off to fly all on their own.</p>
            <br></br>
            <p>if you have any feedback, need a bug to be pecked, or simply have a suggestion for a new feature, please don't hesitate to send a raven to:</p>
            <br></br>
            <p><a href='mailto:aaronlbtandem@gmail.com'>aaronlbtandem@gmail.com</a></p>
            <h2 className='convenient-keystrokes'>keystrokes</h2>
            <p><b>add (+) textbox</b> — shift + enter</p>
            <p><b>delete (-) textbox</b> — shift + tab</p>
            <p><b>save & reset</b> — left click middle button</p>
            <h2>saved chirps</h2>
            <p>after clicking save and the writing area resets, your chirps will be saved here available for download.</p>
            <br></br>
            <p>
              <em>
              {
                props.savedContent.length ?
              
                <span id='download-span'>
                   
                  <button 
                    onClick={handleDownload}
                    className="download-button"
                    >
                    <span className="material-symbols-outlined download-icon">
                    download
                    </span>
                  </button>
                  download {props.savedContent.length} chirps 
                </span>
            
                : 'you have not saved any chirps yet.'
              }
              </em>
            </p>
            <br></br>
            <p>Like this site? Donate breadcrumbs to the creator <a href="https://paypal.me/ATandem?country.x=US&locale.x=en_US" target='_blank' rel="noreferrer">HERE</a>.</p>
        </div>
      )}
    </div>
  );
}
