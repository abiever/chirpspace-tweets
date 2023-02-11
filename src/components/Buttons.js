import React from "react"

const Buttons = (props) => {
    return (
        <div id="button-container">
            <button onClick={props.onClick} id="add-box" className="button">+</button>
            {/*<button id="del-box" class="button">-</button>*/}
        </div>
    )
}

export { Buttons };