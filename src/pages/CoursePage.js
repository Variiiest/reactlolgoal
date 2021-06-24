import React, { Component } from 'react';


class CourseCatalog extends Component {


  constructor (props) {
    super(props);
    this.state= {
      openNav: false,
    };
  }
  
    setNav(){
    this.setState({openNav: !this.state.openNav});
  }
    render() {
        return (
            <div className="">




<section className="text-gray-800 dark:text-gray-300 mt-12 body-font">
        <div className="container mx-auto flex px-5 py-4 rounded-xl md:flex-row flex-col items-center shadow-xl border dark:border-gray-800 bg-white  dark:bg-gray-800">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
            
            <figure className="visible">
          
                            <div className="relative">
                                <div className="pt-20 px-6 sm:px-12">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800 dark:text-gray-300">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
                                    <p className="text-gray-700 dark:text-gray-200 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                                    <p className="text-gray-700 dark:text-gray-200 text-base pb-8">We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center pb-12">
                                            <div className="h-12 w-12">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="" className="h-full w-full object-cover overflow-hidden rounded-full" />
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-200 ml-3">
                                                Jane Doe <br />
                                                <span className="text-gray-700 dark:text-gray-200 text-base font-light">Apple Inc</span>
                                            </p>
                                        </div>
                              
                                    </div>
                                </div>
                            </div>
                        </figure>
        
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>










 <section className="text-gray-700 dark:text-gray-200 body-font">
        <div className="container px-2 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full  border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <figure className="visible">
          
                            <div className="relative shadow-xl border dark:border-gray-800 bg-white  dark:bg-gray-800">
                                <div className="pt-2 px-2 sm:px-4">
                                <h1 className="title-font sm:text-2xl text-2xl mb-4 text-gray-800 dark:text-gray-300">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
                                    <p className="text-gray-700 dark:text-gray-200 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center pb-4">
                                            <div className="h-12 w-12">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="" className="h-full w-full object-cover overflow-hidden rounded-full" />
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-200 ml-3">
                                                Jane Doe <br />
                                                <span className="text-gray-700 dark:text-gray-200 text-base font-light">Apple Inc</span>
                                            </p>
                                        </div>
                              
                                    </div>
                                </div>
                            </div>
                        </figure>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full  border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" />
                <figure className="visible">
          
          <div className="relative shadow-xl border dark:border-gray-800 bg-white  dark:bg-gray-800">
              <div className="pt-2 px-2 sm:px-4">
              <h1 className="title-font sm:text-2xl text-2xl mb-4 text-gray-800 dark:text-gray-300">Before they sold out
<br className="hidden lg:inline-block" />readymade gluten
</h1>
                  <p className="text-gray-700 dark:text-gray-200 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                  <div className="flex items-center justify-between">
                      <div className="flex items-center pb-4">
                          <div className="h-12 w-12">
                              <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="" className="h-full w-full object-cover overflow-hidden rounded-full" />
                          </div>
                          <p className="text-gray-700 dark:text-gray-200 ml-3">
                              Jane Doe <br />
                              <span className="text-gray-700 dark:text-gray-200 text-base font-light">Apple Inc</span>
                          </p>
                      </div>
            
                  </div>
              </div>
          </div>
      </figure>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full  border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" />
                <figure className="visible">
          
          <div className="relative shadow-xl border dark:border-gray-800 bg-white  dark:bg-gray-800">
              <div className="pt-2 px-2 sm:px-4">
              <h1 className="title-font sm:text-2xl text-2xl mb-4 text-gray-800 dark:text-gray-300">Before they sold out
<br className="hidden lg:inline-block" />readymade gluten
</h1>
                  <p className="text-gray-700 dark:text-gray-200 text-base pb-6">From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.</p>
                  <div className="flex items-center justify-between">
                      <div className="flex items-center pb-4">
                          <div className="h-12 w-12">
                              <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="" className="h-full w-full object-cover overflow-hidden rounded-full" />
                          </div>
                          <p className="text-gray-700 dark:text-gray-200 ml-3">
                              Jane Doe <br />
                              <span className="text-gray-700 dark:text-gray-200 text-base font-light">Apple Inc</span>
                          </p>
                      </div>
            
                  </div>
              </div>
          </div>
      </figure>
              </div>
            </div>
          </div>
        </div>
      </section>  
<div>


  
      </div>

   


     </div>
        )
    }
}

export default CourseCatalog