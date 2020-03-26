import React from "react"
import Skilcard from "./Skillcard"
import Coursecard from "./Coursecard"

function Works(){
    return (
        <div className="mt-6 bg-gray-200 px-20 py-12 lg:mt-3 lg:px-20 lg:py-0">
        {/* skills */}
        <h4 className="text-6xl font-medium f1 lg:text-3xl lg:font-medium lg:ml-3 lg:py-2">Skills</h4>
        
        <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-around">
            <div className="mb-12">
            <Skilcard src="https://coda.newjobs.com/api/imagesproxy/ms/niche/images/articles/Mack/javascript.jpg" heading="Programming Languages" set={["Python","Javascript","Java","C++"]}/>
        </div>
        <div className="mb-12">
        <Skilcard src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/102532051/original/1ee977dd92daac0fc253198f95fd09f82f3face8/design-your-html-css-bs-js-angular-react-page.jpg" heading="Front-end Web Technologies" set={["HTML","CSS3","VanillaJS","ReactJS"]}/>

        </div>
        <div className="mb-12">
        <Skilcard src="https://softwarebrothers.co/blog/content/images/2019/10/Blogpost-1.png" heading="Back-end Web Technologies" set={["NodeJS","ExpressJs","Flask"]}/>

        </div>
        <div className="mb-12 lg:mb-4">
        <Skilcard src="https://s27389.pcdn.co/wp-content/uploads/2018/01/AdobeStock_119913056-1024x683.jpeg" heading="Database" set={["MySQL","MongoDB"]}/>

        </div>
        <div className="mb-12 lg:mb-4">

        <Skilcard src="https://www.perforce.com/sites/default/files/image/2019-12/image-blog-how-to-use-git-shallow-clone.jpg" heading="Versioning and other tools" set={["Git","GitHub","Heroku","GitLab"]}/>

        </div>
        <div className="mb-12 lg:mb-4">
        <Skilcard src="https://getflywheel.com/layout/wp-content/uploads/2018/04/css-grid-layout-header-lg-1-1280x356.png" heading="Front-end Frameworks" set={["TailwindCSS","Bootstrap4","MaterializeCSS"]}/>

        </div>
        </div>

        
        {/* Awards | Honors */}
        <h4 className="text-6xl font-medium f1 lg:text-3xl lg:font-medium lg:ml-3 lg:py-2">CERTIFICATE COURSEWORKS</h4>
        <div className="lg:flex lg:flex-row lg:flex-wrap lg:ml-3">
        <div className="mb-12">
            <Coursecard src="https://nptel.ac.in/assets/nptel_assets/images/nptel-logo.png" heading="Blockchain Architecture Design and Use Cases" />
        </div>

        </div>
        
        </div>
    )
}

export default Works;