import React from 'react'

const CodeCard = props => {
  const [openTab, setOpenTab] = React.useState(1);
  
  return (

    <div className="text-gray-200 font-bold mt-4 mb-2">
      <div className="container mx-auto rounded-xl shadow-2xl">
        <div className="shadow rounded-xl">
          <div className="flex w-full p-4 bg-gray-900 border border-gray-700 rounded-t-xl">
            <button className={
              "text-white border-0 py-2 px-6 focus:outline-none rounded text-lg" +
              (openTab === 1
                ? "text-white bg-gray-800"
                : "text-gray-200 bg-gray-900")
            }
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}>
              Preview
              </button>
            <button className={
              "text-white border-0 py-2 px-6 focus:outline-none rounded text-lg" +
              (openTab === 2
                ? "text-white bg-gray-800"
                : "text-gray-200 bg-gray-900")
            }
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}>
              Code
              </button>

          </div>
          <div className>
            <div className={openTab === 1 ? "block" : "hidden"}>




              {props.children}




            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <div className="h-screen overflow-auto overflow-y-scroll scroll-hidden   rounded-b-xl code-tab bg-gray-900">
                <div className="rounded-b-xl">
                 
                 {props.code}



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>








    </div>
  )
}


export default CodeCard
