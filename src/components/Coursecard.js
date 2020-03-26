import React from "react"


function Coursecard(props){
    
    return (
        
        <div className="border w-full lg:w-64 lg:h-full mt-6 lg:mt-2 h-auto shadow-md hover:shadow-xl bg-white text-2xl rounded-lg overflow-hidden">
            <img className="w-full h-64 lg:h-40 object-fill bg-gray-500" src={props.src} alt="Card Images"/>
            <div className="px-10 py-6 lg:px-2 lg:py-2">
            <h4 className="text-5xl text-gray-700 font-medium lg:text-lg">{props.heading}</h4>
            <div className="flex justify-center lg:mt-2">
            <a href="https://i.imgur.com/8qivoMF.jpg" rel="noopener noreferrer" target="_blank" className="border-4 lg:border lg:hover:bg-green-400 hover:border-blue-500 border-solid border-green-500 rounded my-10 lg:my-3 flex justify-center items-center lg:py-0 py-8 w-3/4 shadow hover:shadow-xl">
            <p className="font-medium text-5xl lg:text-2xl text-gray-800">Certificate</p>
            </a>
            </div>
            </div> 


        </div>

    )

}

export default Coursecard;