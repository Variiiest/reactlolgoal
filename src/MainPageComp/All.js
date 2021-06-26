import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export const Allroute= [
    {
        name:'Tailwind Blocks',
        link:'themes',
        about:'400 + Components Already.',
        image:'https://ik.imagekit.io/vpa3fwqdnd/Components/breadcrumb_EbEbafdbb.svg',
    },
    {
        name:'Landing Pages',
        link:'landingpages',
        about:'30+ Landing Pages ',
        image:'https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_OtMQk3TRg.svg',
    },
    {
        name:'Django Blocks',
        link:'django',
        about:'Code for views and models',
        image:'https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_GowNEU2t2.svg',
    },
    {
        name:'Changelog',
        link:'changelog',
        about:'Revision of Web components.',
        image:'https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_JwS8tMD5N.svg',
    }
]



export class All extends Component {
    render() {
        return (
            <div>
                  <section className="text-gray-900 dark:text-white body-font -mt-48">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">

              {Allroute.map((data, index) =>
            <div className="p-4 md:w-1/4" key={index}>
              <div className="h-full bg-white dark:bg-gray-900 rounded overflow-hidden shadow-lg border dark:border-black">
                <img className={"md:h-36 w-full object-contain relative transition duration-500 ease-in-out transform hover:scale-110 object-center bg-red-100"}  src={data.image} alt="blog" />
                <div className="p-4">
                  <h1 className="title-font text-xl font-extrabold hover:text-blue-700 text-gray-900 dark:hover:text-blue-300 dark:text-gray-200 mb-3">
                    {data.name}
                  </h1>
                  <p className="leading-relaxed mb-4 text-base">{data.about}</p>
                  <div className="flex items-center flex-wrap"> <Link to={data.link} className="text-blue-600 dark:text-blue-300 inline-flex items-center md:mb-2 lg:mb-2">
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
              )}
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default All
