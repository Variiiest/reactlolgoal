import React from 'react'
import Highlight from 'react-highlight';

const CodeProduct = props => {
 
  return (

    <div className="text-gray-600 font-bold mt-4 mb-2 p-2 opacity-30">
      <div className="container mx-auto shadow-2xl bg-gray-700 rounded-t">
      <div id="header-buttons" className="pt-3 pb-1 px-4 flex">
                <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
                <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
                <div className="rounded-full w-3 h-3 bg-green-500"></div>
            </div>
          <div className="bg-black">
     <Highlight language="html" className="overflow-y-scroll scroll-hidden overflow-auto bg-gradient-to-r from-black to-gray-900">
      {props.code}
      </Highlight>

        </div>
      </div>








    </div>
  )
}


export default CodeProduct