import React, { Component } from 'react'

export class CTA1 extends Component {
    render() {
        return (
            <div>
                <section className="text-white body-font" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")' }}>
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-black bg-opacity-80">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-blue-500">Subscribe for newsletter</h1>
                            <p className="mb-8 leading-relaxed text-lg"><q>Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</q></p>
                            <div className="flex w-full md:justify-start justify-center items-end">
                                <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                                    <label htmlFor="subscribe" className="leading-7 text-lg text-gray-100">Email</label>
                                    <input type="text" id="subscribe" name="subscribe" className="w-full border-b border-blue-800 text-gray-100 py-1 px-3 leading-8 focus:outline-none bg-gray-800 bg-opacity-40" />
                                </div>
                                <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 text-lg">Subscribe</button>
                            </div>

                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default CTA1
