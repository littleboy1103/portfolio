import React from "react"

function Sidebarcontent(){
    return(
        <div className="leading-loose text-4xl f3 lg:text-base lg:py-6 lg:pl-4  lg:mx-12 lg:">
        
        <p className="text-white font-bold lg:font-lg lg:text-gray-500 lg:leading-10 lg:">
        <p className="lg:py-2"><span role="img" aria-label="hello">👋</span>  My Name Is Gowtham C<br/></p>

        <p className="lg:leading-normal lg:py-2"><span role="img" aria-label="laptop">💻</span>  Bachelor of Computer Science and Engineering <br className="lg:hidden"/><span className="pl-12 lg:pl-0">(May 2021)</span><br/></p>
        
       <p className="lg:py-2"> <span role="img" aria-label="fire">🔥</span>  Follow Me @littleboy1103<br/></p>
        
       <p className="lg:py-2"> <span role="img" aria-label="Save">💾</span>  <a href="https://app.box.com/s/m51m73xei139c2k209z683k4at5xnq0j" className="underline" target="_blank" rel="noopener noreferrer">Download Resume</a><br/></p></p>
        </div>
    )

}

export default Sidebarcontent;