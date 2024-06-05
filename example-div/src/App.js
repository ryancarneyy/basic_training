import './App.css';
import FloatingCard from './components/FloatingCard'
import { useState } from 'react';
import puppy from './images/puppy.jpeg'
import IncrementButton from './components/IncrementButton'


function App() {

  // const [count, setCount] = useState(0);           // useState example

  //                                                  //  Example for basic div
  // return (
  //   <div className="container">
  //     <h1 className='header'>Container Header</h1>
  //     <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  //       Phasellus nec justo in massa malesuada sodales. 
  //     </p>
  //   </div>
  // );

                                                    // Example for Different types of elements
  // return (
  //   <div className='example-elements'>
  //     <h1>Header 1</h1>
  //     <h2 id='header2'>Header 2</h2>
  //     <h3>Header 3</h3>
  //     <h4>Header 4...</h4>
  //     <p>Paragraph</p>
  //     <br></br>
  //     <br></br>
  //     <br></br>
  //     <br></br>
  //     <a href='https://www.ucla.edu/'>
  //       <p>Click Me!</p>
  //     </a>
  //     <a href='#hello'>
  //       <p>Go to hello</p>
  //     </a>
  //     <div id='block'></div>
  //     <p id='hello'>Hello</p>
  //     <img src={puppy} alt='puppy'></img>
  //   </div>
  // );

  //                                                  //  Example for inline-styling
  // return (
  //   <div>
  //     <h1 style={{ backgroundColor: 'yellow', fontSize: '24px' }}>
  //       This is a heading with inline styling in React
  //     </h1>
  //     <p style={{ color: 'blue', padding: '10px' }}>
  //       This is a paragraph with inline styling in React
  //     </p>
  //   </div>
  // );
  

                                                   //  Example of a componenet from another file
  // return (
  //   <div className='grid-layout'>
  //     <FloatingCard />
  //   </div>
  // );
  

  // function printCards(num) {
  //   const cards = []
  //   for(let i = 0; i < num; i += 1) {
  //     cards.push(<FloatingCard />);
  //   }
  //   return cards;
  // }

  //                                                    // Example of component displayed using a function
  // return (
  //   <div className='grid-layout'>
  //     {printCards(20)}
  //   </div>
  // );

  // const incrementCount = () => {                     // Example of passing parameters into a componenet
  //   setCount(count+1);
  // }
  // return (
  //   <>
  //     <IncrementButton count={count} incrementFunction={incrementCount}></IncrementButton>
  //   </>
  // );

}

export default App;
