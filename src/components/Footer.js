import React from "react"


function Footer(){
    return (
        <div className="h-32 pb-6 lg:h-16   flex justify-center justify-evenly lg:mt-2 items-center">
            <a href="https://github.com/littleboy1103" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github text-6xl lg:text-4xl text-gray-400 hover:text-gray-100'></i> </a>
            <a href="https://gitlab.com/gowthamdhss" target="_blank" rel="noopener noreferrer"><i className='bx bxl-gitlab text-6xl lg:text-4xl text-gray-400 hover:text-gray-100'></i></a>
            <a href="https://twitter.com/littleboy1103" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter text-6xl lg:text-4xl text-gray-400 hover:text-gray-100' ></i></a>
            <a href="https://www.linkedin.com/in/littleboy1103/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square text-6xl lg:text-4xl text-gray-400 hover:text-gray-100' ></i></a>
            <a href="mailto:gowthamdhss@gmail.com" target="_top" rel="noopener noreferrer"><i className='bx bx-mail-send text-6xl lg:text-4xl text-gray-400 hover:text-gray-100' ></i></a> 

        </div>
    )
}

export default Footer;