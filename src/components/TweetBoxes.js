import React, { useState, useEffect, useRef } from 'react';

export default function TweetBoxes() {
  const [textArea, setTextArea] = useState(["textarea"]);
  const [textAreaValues, setTextAreaValues] = useState([""]);
  const latestTextArea = useRef(null);

  function addTextArea() {
    setTextArea([...textArea, "textarea"]);
    setTextAreaValues([...textAreaValues, ""]);
  }

  function removeTextArea() {
    if (textArea.length > 1) {
      const updatedTextAreas = [...textArea];
      updatedTextAreas.splice(-1, 1);
      setTextArea(updatedTextAreas);
    }
  }

  function handleChange(index) {
    return function(event) {
      const updatedTextAreaValues = [...textAreaValues];
      updatedTextAreaValues[index] = event.target.value;
      setTextAreaValues(updatedTextAreaValues);

      // Automatically resize text area depending on content height
      const textarea = event.target;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    };
  }

  const handleKeyDown = event => {
    if (event.shiftKey && event.key === "Enter") {
        event.preventDefault();
        addTextArea();
        latestTextArea.current.focus();
    }
    if (event.shiftKey && event.key === "Tab") {
        event.preventDefault();
        removeTextArea();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  });

  return (
    <div>
      {textArea.map((item, i) => (
        <div id="text-container" key={i}>
            <div id='p-container'>
                <p>{i + 1}</p>
                <p>{280 - textAreaValues[i].length}</p>
            </div>
            <textarea
                placeholder={i === 0 ? "tweedle away songbird..." : ""}
                id="text-box"
                maxLength="280"
                value={textAreaValues[i]}
                onChange={e => handleChange(i)(e)}
                ref={i === textArea.length - 1 ? latestTextArea : null}
          />
        </div>
      ))}
      <div id="button-container">
        <button onClick={addTextArea} id="add-box" className="button">
          +
        </button>
        <button onClick={removeTextArea} id="del-box" className="button">
          -
        </button>
      </div>
    </div>
  );
}
