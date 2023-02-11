import React, { useState, useEffect } from 'react';


export default function TweetBoxes() {
    
    const [textArea, setTextArea] = useState(["textarea"]); 
    const [textAreaValues, setTextAreaValues] = useState([""]);

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

            //automatically resize text area depending on content height
            const textarea = event.target;
            textarea.style.height = "auto";
            textarea.style.height = (textarea.scrollHeight) + "px";
        };
    }

    const handleKeyDown = event => {
        if (event.shiftKey && event.key === "Enter") {
          addTextArea();
        }
      };
      
      useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, []);

    return (
        <div>
            
            {textArea.map((item, i) => (
                <div id="text-container" key={i}>
                    <p>{280 - textAreaValues[i].length}</p>
                    <textarea 
                        placeholder="tweedle away songbird..."
                        id="text-box"
                        maxLength="280" 
                        value={textAreaValues[i]} 
                        onChange={e => handleChange(i)(e)} 
                    />
                </div>
            ))}

            
            <div id="button-container">
                <button onClick={addTextArea} id="add-box" className="button">+</button>
                <button onClick={removeTextArea} id="del-box" className="button">-</button>
            </div>

        </div>
    )
}