import React from 'react';
import { useEffect, useState } from 'react';
import './Pointer.css';

const Pointer = () => {

  const [rotation, setRotation] = useState(0);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'a') {
        setRotation(-90); // Rotate left (counterclockwise) by 45 degrees
        console.log('a pressed');
      } else if (event.key === 'd') {
        setRotation(90); // Rotate right (clockwise) by 45 degrees
        console.log('d pressed');
      }
    };

    const handleKeyUp = () => {
      setRotation(0); // Reset rotation when the key is released
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <>
    <div id='main-container'>
      <div className='button-container container'>
          <div className='buttons'>
            <button className='button' id='left'></button>
            <button className='button' id='forward'></button>
            <button className='button' id='right' ></button>
            <button className='button' id='backward'></button>
          </div>
      </div>
      <div className='pointer-container container'>
          <img className='pointer-img' src="/cursor.png" alt='Pointer' 
          style={{ transform: `rotate(${rotation}deg)` }}/>
      </div>
    </div>
    </>
  );
}

export default Pointer;
