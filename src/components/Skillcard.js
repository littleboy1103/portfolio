import React from "react"


function Skillcard(props){
    
    return (
        
        <div className="border w-full h-auto shadow-md hover:shadow-2xl bg-white text-2xl rounded-lg overflow-hidden lg:w-64 lg:h-full">
            <img className="w-full h-64 object-cover lg:h-40" src={props.src} alt="Card Images"/>
            <div className="px-10 py-6 lg:px-2 lg:py-2">
            <h5 className="text-5xl font-medium text-gray-700 lg:text-lg">{props.heading}</h5>
            <div className="pt-8 lg:pt-1">
            {props.set.map((item,index)=>{
            return <span key={index} className="inline-block bg-gray-300 text-4xl lg:text-base mx-4 lg:mx-1 px-10 lg:px-3 py-4 lg:py-1 my-4 rounded-full px-3 py-1 font-semibold text-gray-900 mr-2">{item}</span>

            })}
        </div>
            </div> 


        </div>

    )

}

export default Skillcard;