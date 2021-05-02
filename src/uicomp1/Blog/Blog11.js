import React, { Component } from 'react'

export class Blog11 extends Component {
    render() {
        return (
            <div>
                <section className="text-gray-100 body-font">
                    <div className="container px-6 pb-12 sm:pt-12 mx-auto">

                        <div className="flex flex-wrap mx-2 mt-4">
                            <div className="md:w-2/3 sm:mb-0 mb-6">
                                <section className="">
                                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-full lg:shadow-2xl rounded-lg">
                                        <div className="lg:w-1/2">
                                            <div className="h-64 bg-cover lg:h-full" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80")' }} />
                                        </div>
                                        <div className="max-w-full px-4 py-12 lg:max-w-6xl lg:w-1/2">
                                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Build Your New <span className="text-indigo-400">Idea</span></h2>
                                            <p className="mt-4 text-gray-800 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>

                                        </div>

                                    </div>
                                </section>
                            </div>

                            <div className="md:w-1/3 sm:mb-0 mb-6">

                                <div className="flex flex-wrap items-center w-full h-full  rounded-xl">
                                    <div className="md:flex-grow px-4 py-4 bg-blue-800 rounded-lg">
                                        <h2 className="text-3xl font-medium text-gray-100 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                                        <p className="leading-relaxed text-lg text-gray-200">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporwarer.</p>
                                        <a href="." className="text-indigo-200 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Blog11
