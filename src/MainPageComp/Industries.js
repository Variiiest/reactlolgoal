
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export const Allroute= [
    {
        name:'Agriculture',
        link:'',
        about:'',
        image:'https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_jirxji2h9.svg',
    },
    {
        name:'SAAS',
        link:'',
        about:'',
        image:'https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_uj2aOTRStb.svg',
    },
    {
        name:'Medical',
        link:'',
        about:'',
        image:'https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_zsHw3Ah70.svg',
    },
    {
        name:'Electric',
        link:'',
        about:'',
        image:'https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_m_zKg2N4Dz.svg',
    }
]



export class Industries extends Component {
    render() {
        return (
            <div>



<section className="text-gray-700 dark:text-gray-200 body-font">

<div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-8">
  <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 ">
    <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-gray-900 lg:text-4xl title-font">
    How to start with these Codesnippets?
    </h1>
    <p className="mb-8 text-base leading-relaxed text-left ">
  We have already built react-tailwind codesnippets ,instructions to create react applications with Codesnippets given below
    </p>
    <p className="flex items-center mb-4 text-blue-600 hover:text-blue-500"><span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-2 rounded-full color1 font-bold text-white">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
        </svg>
      </span>
      Download the tailwind starter files <Link to="" className="underline ml-4"> Download</Link>
    </p>
    <p className="flex items-center mb-4 text-blue-600 hover:text-blue-500"><span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-2 rounded-full color1 font-bold text-white">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
        </svg>
      </span>
      Install using yarn or npm .
    </p>
    <p className="flex items-center mb-4 text-blue-600 hover:text-blue-500"><span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-2 rounded-full color1 font-bold text-white">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
        </svg>
      </span>
      Now start writing your react application.
    </p>
  </div>
  <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
  <a href="https://kinsta.com?kaid=OPVBTGVTUKMW">
    <img className="object-cover object-center" alt="hero" src="https://kinsta.com/assets/banners/affiliate/en/600x300%20-%20devkinsta%20-%20dark.png"/>
  </a>
  </div>
</div>

</section>


                  <section className="text-gray-900 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">

              {Allroute.map((data, index) =>
            <div className="p-4 md:w-1/4" key={index}>
              <div className="h-full bg-white rounded-md overflow-hidden shadow">
                <img className="md:h-36 w-full object-contain relative transition duration-500 ease-in-out transform hover:scale-110 object-center border-b-2 bg-gray-100" src={data.image} alt="blog" />
                <div className="p-4">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    {data.name}
                  </h1>
                  <p className="leading-relaxed mb-3 text-base">{data.about}</p>
                  <div className="flex items-center flex-wrap"> <Link to={data.link} className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0">
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

export default Industries

