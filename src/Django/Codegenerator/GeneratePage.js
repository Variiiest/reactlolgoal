import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'
import Model from './Model'

export class GeneratePage extends Component {
    render() {
        return (
            <div className="sticky top-0">
<div className="bg-blue-600 ">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-blue-800">
              <p className="h-6 w-6 text-white"  />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#_"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
            >
              Learn more
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <p className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>



                <div className="bg-gray-800 antialiased h-screen flex">
        <div className="bg-blue-600 text-black flex-none w-12 p-2 hidden md:block">
          <div className="cursor-pointer">
            <div className="bg-white opacity-75 h-8 w-8 flex items-center justify-center text-black text-2xl font-semibold shadow-2xl mb-1 overflow-hidden">
              <svg className="fill-current h-10 w-10 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" /></svg>
            </div>
          </div>
        </div>
        <div className="text-purple-lighter flex-none w-64 pb-6 hidden md:block">
          <div className="text-white mb-2 mt-3 px-4 flex justify-between">
            <div className="flex-auto">
              <h1 className="font-semibold text-xl leading-tight mb-1 truncate">Untitled 1</h1>
            </div>
          </div>
          <div className="mb-8">
            <div className="px-4 mb-2 text-white flex justify-between items-center">
              <div className="text-white">MainProject</div>
            </div>

            {/* Files */}
            <div className="pl-6 ">
            <div className="mb-1 text-sm text-green-400">__init__.py</div>
            <div className="mb-1 text-sm text-green-400">__asgi__.py</div>
            <div className="mb-1 text-sm text-green-400">settings.py</div> 
            <div className="mb-1 text-sm text-green-400">wsgi.py</div>
            <div className="mb-1 text-sm text-green-400">urls.py</div>
            </div>
            <div className="px-4 mb-1">
              <div className="text-red-400 text-sm">manage.py</div>
              <div className="text-red-400 text-sm">db.sqlite3</div>
            </div>

            <div className="px-4 mb-2 text-white flex justify-between items-center">
              <div className="text-white">AppOne</div>
            </div>

            {/* Files */}
            <div className="pl-6 ">
            <div className="mb-1 text-sm text-green-400">__init__.py</div>
            <div className="mb-1 text-sm text-green-400">admin.py</div>
            <div className="mb-1 text-sm text-green-400">apps.py</div> 
            <div className="mb-1 text-sm text-green-400">models.py</div>
            <div className="mb-1 text-sm text-green-400">urls.py</div>
            <div className="mb-1 text-sm text-green-400">tests.py</div>  
            <div className="mb-1 text-sm text-green-400">views.py</div>
            <div className="mb-1 text-sm text-green-400">serializers.py</div>
            </div>
          </div>
         
        </div>


        <div className="flex-1 flex flex-col bg-white overflow-hidden bg-gray-900">
          <div className="border-b flex px-6 py-2 items-center flex-none">
            <div className="flex flex-col">
              <h3 className="text-green-400 mb-1 fot-medium text-sm">settings.py</h3>
            </div>
          </div>
   <CodeCard>
<Model/>
   </CodeCard>
         </div>
         </div>
            </div>
        )
    }
}

export default GeneratePage
