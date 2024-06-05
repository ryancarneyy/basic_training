import React from "react";
import '../styles/IncrementButton.css'

const IncrementButton = (props) => {
    // using props is convention in order to let other developers know that you are using paramets
    // define parameters inside component
    const {count, incrementFunction} = props;

    return(
        <div className="increment-button">
            <button onClick={incrementFunction}>Click Me!</button>
            <p>Count: {count}</p>
        </div>
    );
}

export default IncrementButton;