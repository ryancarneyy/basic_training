import './App.css';
import FloatingCard from './components/FloatingCard'
import { useState } from 'react';
import puppy from './images/puppy.jpeg'
import ucla from './images/ucla.png'
import IncrementButton from './components/IncrementButton'
import './styles/FloatingCard.css'
import DocumentTitle from './components/DocumentTitle';


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


  // return (                                              // Slide 8
  //   <div className="container"> 
  //     <div className="right-side">
  //       <h1 className="title">Right Side</h1>
  //     </div>
  //     <div className="left-side">
  //       <h1 className="title">Left Side</h1>
  //     </div>
  //   </div>
  // );

                                                    //  SLIDE 9
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
  // <button onClick={console.log('Hello')}>Say hello!</button>
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

                                                // SLIDE 15 - CSS Layout
  // return (
  //   <>
  //     <div id="title-div">
  //       <h1>Example CSS</h1>
  //     </div>
  //     <div id="mid-div">
  //       <div id="left-div">
  //         <ul>
  //           <li>Item 1</li>
  //           <li>Item 2</li>
  //           <li>Item 3</li>
  //           <li>Item 4</li>
  //           <li>Item 5</li>
  //         </ul>
  //       </div>
  //       <div id="right-div">
  //         <img src={puppy} alt="puppy"></img>
  //       </div>
  //     </div>
  //     <div id="grid-div">
  //       <img className="ucla-img" src={ucla}></img>
  //       <img className="ucla-img" src={ucla}></img>
  //       <img className="ucla-img" src={ucla}></img>
  //       <img className="ucla-img" src={ucla}></img>
  //       <img className="ucla-img" src={ucla}></img>
  //       <img className="ucla-img" src={ucla}></img>
  //       <img className="ucla-img" src={ucla}></img>
  //       <img className="ucla-img" src={ucla}></img>
  //     </div>
  //   </>
  // )

  //                                                  //  Example for inline-styling - SLIDE 15 END
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
  

  //                                                  //  Example of no React Subcomponents - SLIDE 
  // return (
  //   <div className='grid-layout'>
  //     <div className="card">
  //       <div className="card-content">
  //           <h2>Card Title</h2>
  //           <p>This is the card content.</p>
  //       </div>
  //     </div>
  //     <div className="card">
  //       <div className="card-content">
  //           <h2>Card Title</h2>
  //           <p>This is the card content.</p>
  //       </div>
  //     </div>
  //     <div className="card">
  //       <div className="card-content">
  //           <h2>Card Title</h2>
  //           <p>This is the card content.</p>
  //       </div>
  //     </div>
  //     <div className="card">
  //       <div className="card-content">
  //           <h2>Card Title</h2>
  //           <p>This is the card content.</p>
  //       </div>
  //     </div>
  //     <div className="card">
  //       <div className="card-content">
  //           <h2>Card Title</h2>
  //           <p>This is the card content.</p>
  //       </div>
  //     </div>
  //   </div>
  // );

  // return (                                         // Example of reusing a component to shorten code
  //   <div className='grid-layout'>
  //     <FloatingCard />
  //     <FloatingCard />
  //     <FloatingCard />
  //     <FloatingCard />
  //     <FloatingCard />
  //     <FloatingCard />
  //   </div>
  // );
  
  //                                                    // Example of component displayed using a function
  // function printCards(num) {
  //   const cards = []
  //   for(let i = 0; i < num; i += 1) {
  //     cards.push(<FloatingCard />);
  //   }
  //   return cards;
  // }

  // return (
  //   <div className='grid-layout'>
  //     {printCards(20)}
  //   </div>
  // );

  // const incrementCount = () => {                     // Example of passing parameters into a component + useState
  //   setCount(count+1);
  // }

  // return (
  //   <>
  //     <IncrementButton count={count} incrementFunction={incrementCount}></IncrementButton>
  //   </>
  // );

  // return (
  //   <>
  //     <DocumentTitle></DocumentTitle>
  //   </>
  // )

}

export default App;
