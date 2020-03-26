import React from "react"
import Avatar from "./Avatar"
import Sidebarcontent from "./Sidebarcontent"
import Hrline from "./Hrline"
import Hobbies from "./Hobbies"
import Footer from "./Footer"
function Leftsidebar(){
    return (
    
        <div className="w-screen py-10 h-full summa bg-transparent lg:w-1/3 lg:shadow-2xl lg:py-5 lg:fixed">
        <div className="flex justify-center ">
        <Avatar/>


        </div>
        <Footer/>
        <div className="">
        <Hrline/>
        </div>
           
        <div className="flex justify-center items-center">
        
        <Sidebarcontent/>
        </div>
        <Hrline/>
        <Hobbies/>
       
        </div>
      
    )
}

export default Leftsidebar;