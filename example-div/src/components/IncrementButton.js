import React from "react";
import '../styles/IncrementButton.css'

const IncrementButton = ({count, incrementFunction}) => {
    return(
        <div className="increment-button">
            <button onClick={incrementFunction}>Click Me!</button>
            <p>Count: {count}</p>
        </div>
    );
}

export default IncrementButton;