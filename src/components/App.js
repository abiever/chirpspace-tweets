import { Buttons } from "./Buttons";
import Tweets from "./Tweets";
import { useState } from "react";

export default function App() {
    
    const [textArea, setTextArea] = useState(["textarea"]); 
  
    function addTextArea() { 
        setTextArea([...textArea, "textarea"]) 
    }

    return (
        <div>
            
            {textArea.map((item, i) => (<Tweets text={item} key={i}/>))}

            <Buttons onClick={addTextArea} />
            
        </div>
    )
}