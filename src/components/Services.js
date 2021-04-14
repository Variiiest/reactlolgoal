import React, { Component } from 'react'
import CardTwo from './cards/CardTwo'

export class Services extends Component {
    render() {
        return (
           
                <>
                <CardTwo/>
{/* This example requires Tailwind CSS v2.0+ */}
<div className="py-12 bg-gradient-to-r from-pink-800 via-gray-900 to-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        A better way to learn code
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
      
      Less Confusion , Learn well.


      </p>
    </div>
    <div className="mt-10">
      <dl className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="relative  bg-gradient-to-r from-gray-600 to-gray-800 shadow-lg py-2 px-2 rounded-2xl">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 bg-gray-700 rounded-lg shadow-2xl text-white">
            <div className="absolute flex items-center justify-center h-4 w-4 bg-pink-800 shadow-2xl text-white">
           
            </div>
            </div>
            <p className="ml-16 text-lg leading-6 font-bold text-white">Basic Courses</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </dd>
        </div>
        <div className="relative  bg-gradient-to-r from-gray-600 to-gray-800 shadow-lg py-2 px-2 rounded-2xl">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 bg-gray-700 rounded-lg shadow-2xl text-white">
            <div className="absolute flex items-center justify-center h-4 w-4 bg-pink-800 shadow-2xl text-white">
           
            </div>
            </div>
            <p className="ml-16 text-lg leading-6 font-bold text-white">Free means free</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </dd>
        </div>
        <div className="relative  bg-gradient-to-r from-gray-600 to-gray-800 shadow-lg py-2 px-2 rounded-2xl">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 bg-gray-700 rounded-lg shadow-2xl text-white">
            <div className="absolute flex items-center justify-center h-4 w-4 bg-pink-800 shadow-2xl text-white">
           
            </div>
            </div>
            <p className="ml-16 text-lg leading-6 font-bold text-white">Projects Extra</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </dd>
        </div>
        <div className="relative  bg-gradient-to-r from-gray-600 to-gray-800 shadow-lg py-2 px-2 rounded-2xl">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 bg-gray-700 rounded-lg shadow-2xl text-white">
            <div className="absolute flex items-center justify-center h-4 w-4 bg-pink-800 shadow-2xl text-white">
           
            </div>
            </div>
            <p className="ml-16 text-lg leading-6 font-bold text-white">
              Advanced Courses
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
</>
        )
    }
}

export default Services
