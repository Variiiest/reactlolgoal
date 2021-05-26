import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {CompIndustry} from './CompIndustry'

export class Tailcompcard extends Component {
    render() {
        return (
            <div>
            <section className="text-gray-900 body-font ">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">

              {CompIndustry.map((data, index) =>
           <div className="p-4 md:w-1/4" key={index}>
           <div className="h-full bg-white rounded-lg overflow-hidden shadow-md">
             <img className={"md:h-36 w-full object-contain relative transition duration-500 ease-in-out transform hover:scale-110 object-center bg-red-100"}  src={data.image} alt={data.image} />
             <div className="p-4">
               <h1 className="title-font text-xl font-extrabold hover:text-indigo-700 text-gray-900 mb-3">
                 {data.name}
               </h1>
               <div className="flex items-center flex-wrap"> 
               {data.link !=="#" &&
               <Link to={data.link} className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-2">
                   Learn More
                   <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M5 12h14" />
                     <path d="M12 5l7 7-7 7" />
                   </svg>
                 </Link>
    }
  {data.link ==="#" &&
               <Link to={data.link} className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-2 px-2 py-1 bg-gradient-to-r from-green-100 to-red-200 rounded">
                  Upcoming
                 </Link>
    }

               </div>
             </div>
           </div>
         </div>
              )}
          </div>
        </div>
      </section>

      <div className="lg:max-w-4xl items-center justify-center mx-auto mt-12">
        <a href="https://kinsta.com?kaid=OPVBTGVTUKMW">
                 <img className="object-cover object-center" alt="hero" src="https://kinsta.com/assets/banners/affiliate/en/728x90%20-%20optimized%20-%20dark.jpg"/>
              
               </a>
               </div>

            </div>
        )
    }
}

export default Tailcompcard
