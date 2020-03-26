import React from 'react';
import "./css/main.css"
import Leftsidebar from "./components/Leftsidebar"
import Introsection from "./components/Introsection"
import Works from "./components/Works"
import Madellove from './components/Madelove';



function App() {
  return (
    <div className="">
   <Leftsidebar/>


  
   <div className="lg:w-2/3 lg:ml-auto lg:flex-1">
   <div className="px-20 py-12 lg:px-20 lg:py-4">
   <Introsection/>
   </div>
   <div className="">
   <Works/>
   </div>
   <Madellove/>
   </div>
   </div>
  );
}

export default App;
