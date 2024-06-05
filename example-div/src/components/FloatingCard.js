import React from 'react';
import '../styles/FloatingCard.css'; // Import CSS file for styling

const FloatingCard = () => {
    return (
    <div className="card-container">
        <div className="card">
        <div className="card-content">
            <h2>Card Title</h2>
            <p>This is the card content.</p>
        </div>
        </div>
    </div>
    );
};

export default FloatingCard;