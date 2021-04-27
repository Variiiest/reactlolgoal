import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Tailcompcard extends Component {
    render() {
        return (
            <div>
                 <section className="body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-blue-100">{this.props.name}</h1>
              <div className="h-1 w-20 bg-green-300 " />
            </div>

          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4 ">
                <Link to={this.props.firstl}> 
              <div className="p-2 bg-gradient-to-tr from-gray-900 to-gray-700 shadow-2xl ">
                <img className="h-40 w-full object-cover object-center mb-2 " src={this.props.image1} alt="content" />
                
                <h2 className="text-base text-blue-100 font-bold title-font">{this.props.first}</h2>
                
              </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link to={this.props.secondl}>
              <div className="p-2 bg-gradient-to-tr from-gray-900 to-gray-700 shadow-2xl ">
                <img className="h-40  w-full object-cover object-center mb-2 " src={this.props.image2} alt="content" />
                
                <h2 className="text-base text-blue-100 font-bold title-font">{this.props.second}</h2>
                
              </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link to={this.props.thirdl}>
              <div className="p-2 bg-gradient-to-tr from-gray-900 to-gray-700 shadow-2xl ">
                <img className="h-40  w-full object-cover object-center mb-2 " src={this.props.image3} alt="content" />
                
                <h2 className="text-base text-blue-100 font-bold title-font">{this.props.third}</h2>
                
              </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link to={this.props.fourthl}>
              <div className="p-2 bg-gradient-to-tr from-gray-900 to-gray-700 shadow-2xl ">
                <img className="h-40  w-full object-cover object-center mb-2 " src={this.props.image4} alt="content" />
                
                <h2 className="text-base text-blue-100 font-bold title-font">{this.props.fourth}</h2>
                
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default Tailcompcard
