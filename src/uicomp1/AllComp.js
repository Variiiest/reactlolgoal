import React, { Component } from 'react'
import Tailcompcard from './Tailcompcard'
import image1 from './images/1.JPG'
import image2 from './images/4.JPG'
import image3 from './images/2.JPG'
import image4 from './images/3.JPG'

import CodeCard from './CodeCard'
import HeroC1 from './HeroCenter/HeroC1'
export class AllComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             code:`<div className="pt-16">
             <div className="container mx-auto pt-16 bg-gray-100">
                 <div className="text-center pb-3 md:pb-10 xl:pb-20">
                     <p className="text-gray-500 text-base lg:text-lg uppercase leading-tight mb-4">start with the basics</p>
                     <h1 className="px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800">Frequently Asked Questions</h1>
                 </div>


                 <div className="pt-16">
             <div className="container mx-auto pt-16 bg-gray-100">
                 <div className="text-center pb-3 md:pb-10 xl:pb-20">
                     <p className="text-gray-500 text-base lg:text-lg uppercase leading-tight mb-4">start with the basics</p>
                     <h1 className="px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800">Frequently Asked Questions</h1>
                 </div>
               `
        }
    }
    

       

  
    render() {
        return (
            <div>


<div className="btnupcoming md:overflow-hidden">
        <div className="px-4 py-20 md:py-4">
          <div className="md:max-w-7xl md:mx-auto">
            <div className="md:flex md:flex-wrap">
              <div className="md:w-1/2 text-center md:text-left md:pt-16">
                <h1 className="font-bold text-white text-2xl md:text-5xl leading-tight mb-4 tracking-wide">
              How to use our components in web-development?

                </h1>
                <button className="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-blue-800 rounded shadow-2xl focus:outline-none">Also We are coming with a Builder(Drag and Drop)</button>
              </div>
              <div className="md:w-1/2 relative">



                  
                <div>
                
               


                <CodeCard code={this.state.code}>
<HeroC1/>
 
                </CodeCard>   
        
    </div>

             </div>
            </div>
          </div>
        </div>
        <svg className="fill-current text-black hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fillOpacity={1} d="M0,224L1440,32L1440,320L0,320Z" />
        </svg>
      </div>








<Tailcompcard name="Hero" image1={image1} image2={image2} image3={image3} image4={image4} first="Left Hero" firstl="comp/lefthero" second="Right Hero" secondl="comp/righthero" third="Centered" thirdl="comp/centeredhero" fourth="Special" fourthl="comp/specialhero"/>

<Tailcompcard name="Authentication" image1={image1} image2={image3} image3={image3} image4={image4} first="Left" firstl="comp/authleft" second="Right" secondl="comp/authright" third="Centered " thirdl="comp/centerauth" fourth="Special " fourthl="comp/specialauth"/>



      </div>
        )
    }
}

export default AllComp
