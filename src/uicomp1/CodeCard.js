import React from 'react'

const CodeCard = props => {
  const [openTab, setOpenTab] = React.useState(1);
  
  return (

    <div className="text-gray-800 font-bold mt-4 mb-2">
      <div className="container mx-auto rounded-xl shadow">
        <div className="shadow rounded">
          <div className="flex py-2 px-2 w-full bg-gray-50 border border-gray-200 rounded">
            <button className={
              "border-0 py-2 px-6 focus:outline-none rounded font-bold" +
              (openTab === 1
                ? "text-gray-900 bg-gray-100"
                : "text-gray-800 bg-gray-50")
            }
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}>
              Preview
              </button>
            <button className={
              "border-0 py-2 px-6 focus:outline-none rounded font-bold" +
              (openTab === 2
                ? "text-gray-900 bg-gray-100"
                : "text-gray-800 bg-gray-50")
            }
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}>
              Code
              </button>

          </div>
          <div className="bg-gray-50">
            <div className={openTab === 1 ? "block" : "hidden"}>




              {props.children}




            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <div className="h-screen overflow-auto overflow-y-scroll scroll-hidden rounded-b-xl">
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
