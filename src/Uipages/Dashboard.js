

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Industries from '../components/MainPageComp/Industries'
import Auth from './CodePage/Auth'
import { Components } from './Components'


export class All extends Component {

    
  constructor(props) {
    super(props);
    this.state = {
      openmodal: false,
    };
  }


  setmodal() {
    this.setState({
      openmodal: !this.state.openmodal,
    });
  }
    render() {
        return (
                
            <> 

<div className="relative flex flex-row h-full">
        <nav className="w-20 bg-white justify-between flex flex-col px-4 sm:block hidden">
          <div className="mt-4">
            <div className="mt-2">
              <ul className="fixed left-5">
              <li className="mb-6">
                  <button onClick={() => this.setmodal()}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-atom-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="3" />
  <line x1="12" y1="21" x2="12" y2="21.01" />
  <line x1="3" y1="9" x2="3" y2="9.01" />
  <line x1="21" y1="9" x2="21" y2="9.01" />
  <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
  <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
  <path d="M6.2 5a9 9 0 0 1 11.4 0" />
</svg>
</button>
</li>
<li className="mb-6">
                  <button onClick={() => this.setmodal()}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-palette" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
  <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
  <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
  <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
</svg>
                  </button>
                </li>
                <li className="mb-6">
                  <a href=".">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
  <circle cx="12" cy="12" r="3" />
</svg>
                  </a>
                </li>
             
                
              </ul>
            </div>
          </div>
        </nav>
        <div className="text-gray-700 bg-blue-700 overflow-y-auto scroll-hidden rounded-tl-xl font-opensans sticky top-0">
       

    
    <Auth/>
        </div>
      </div>





      <div className={"py-6 px-12 bg-gray-200 bg-opacity-0 transition duration-150 ease-in-out z-10 absolute top-0 bottom-0 left-12 right-0 mx-auto" + (this.state.openmodal ? "" : " hidden")}>

 
                <div  className="container max-w-full">




                    <div className="relative py-8 bg-white px-5 shadow-2xl rounded  sm:h-screen overflow-x-auto">

                        
                <div className="overflow-y-auto scroll-hidden font-opensans py-4">






{Components.map((data, key) =>
    <Link key={key} className="mx-4 leading-5 text-black hover:text-indigo-700  md:my-0 bg-gray-200 px-2 py-1 rounded" to={data.link}>{data.name}</Link>

)}
</div>
                   <Industries/>
                   <Industries/>
                   <Industries/>
                   <Industries/>
                        <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={() => this.setmodal()}>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                   
                    </div>
                </div>
            </div>
    

             

                </>

        )
    }
}

export default All
