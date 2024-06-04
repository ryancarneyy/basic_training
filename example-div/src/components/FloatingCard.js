import React from 'react';
import '../styles/FloatingCard.css'; // Import CSS file for styling

const FloatingCard = () => {

    // // function for opening new window with a button
    // const openNewWindow = () => {
    //     window.open('https://ucla.edu', '_blank');
    // };
    
    return (
    <div className="card-container">
        <div className="card">
        <div className="card-content">
            <h2>Card Title</h2>
            <p>This is the card content.</p>
            <button className='card-button' onClick={openNewWindow}>UCLA site</button>
        </div>
        </div>
    </div>
    );
};

export default FloatingCard;