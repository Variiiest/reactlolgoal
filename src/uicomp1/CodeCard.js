import React from 'react'
import Highlight from 'react-highlight';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CodeCard = props => {
  const [openTab, setOpenTab] = React.useState(1);
  
  
  return (

    <div className="text-gray-200 font-bold mt-4 mb-2 p-2">
      <div className="container mx-auto rounded-xl shadow">
        <div className="shadow rounded bg-gray-900">
          <div className="flex py-2 px-2 w-full bg-gray-900 rounded">
            <button className={
              "py-2 px-6 focus:outline-none rounded font-bold" +
              (openTab === 1
                ? "text-gray-100 bg-gray-800"
                : "text-gray-200 bg-gray-900")
            }
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}>
              Preview
              </button>
            <button className={
              "py-2 px-6 focus:outline-none rounded font-bold" +
              (openTab === 2
                ? "text-gray-100 bg-gray-800"
                : "text-gray-200 bg-gray-900")
            }
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}>
              Code
              </button>


              <CopyToClipboard text={props.code} onCopy={() =>alert("Copied")}>
          <button className="px-2 py-2 focus:outline-none">   <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 1)', transform: '', msFilter: ''}}><path d="M20,2H10C8.897,2,8,2.897,8,4v4H4c-1.103,0-2,0.897-2,2v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2v-4h4 c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M4,20V10h10l0.002,10H4z M20,14h-4v-4c0-1.103-0.897-2-2-2h-4V4h10V14z" /></svg></button>
        </CopyToClipboard>

          </div>
          <div className="bg-white">
            <div className={openTab === 1 ? "block" : "hidden"}>




              {props.children}




            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <div className=" rounded-b-xl">
  
                <Highlight language="html" className="overflow-y-scroll scroll-hidden overflow-auto ">
      {props.code}
      </Highlight>


              </div>
            </div>
          </div>
        </div>
      </div>








    </div>
  )
}


export default CodeCard
