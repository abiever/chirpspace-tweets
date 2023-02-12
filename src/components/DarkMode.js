import { useState } from "react";

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);
      
    const handleClick = () => {
        var styleSheet = document.getElementById("light-mode-stylesheet");
        //var darkModeStyleSheet = document.getElementById("dark-mode-stylesheet")
        if (styleSheet.href.indexOf("light_mode_style.css") != -1) {
            styleSheet.href = "dark_mode_style.css";
          } else if (styleSheet.href.indexOf("dark_mode_style.css") != -1) {
            styleSheet.href = "light_mode_style.css";
        }
        setDarkMode(!darkMode);
      };

    return (
        <div id="darkmode-container">

            <button id="darkmode-button" onClick={handleClick}>
                {darkMode ? 
                    <span className="material-symbols-outlined">dark_mode</span> 
                        : 
                    <span className="material-symbols-outlined">light_mode</span>
                }
            </button>
        </div>
    )
}
