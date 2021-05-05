import React, { Component } from 'react'

export class Contact1 extends Component {
    render() {
        return (
            <div>
                <section className="text-gray-100 body-font relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)' }}>
                    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div className="lg:w-1/2 bg-black bg-opacity-40 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative mx-auto text-center">

                            <div className="w-full mx-auto text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-blue-600 mb-8" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                                <div className="h-full flex items-center mt-6">
                                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover border-2 border-blue-400 object-center flex-shrink-0 rounded-full mr-4" src="https://source.unsplash.com/profile" />
                                    <div className="flex-grow">
                                        <h2 className="title-font font-medium">Aditya Bansal</h2>
                                        <p className="text-gray-200">CEO of Lolgoal</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className="lg:w-1/2  flex flex-col md:ml-auto w-full sm:py-8 sm:px-4  px-2 py-4 bg-blue-800 bg-opacity-30 mt-8 md:mt-0">
                            <h2 className="text-lg mb-1 font-medium title-font">Contact</h2>
                            <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded  border-b  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm ">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded  border-b  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm ">Message</label>
                                <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded  border-b h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                            </div>
                            <button className="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">Send Message</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact1
