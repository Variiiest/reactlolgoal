import React, { Component } from 'react'

export class Card9 extends Component {
    render() {
        return (
            <div>
                  <div className="w-full max-w-sm px-4 py-3 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" alt=""/>
        <div className="flex justify-center -mt-8">
          <img src="https://i.imgur.com/8Km9tLL.jpg" className="rounded-full border-solid border-white border-2 -mt-3" alt=""/>		
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-black text-sm bold font-sans">Olivia Dunham</h3>
          <p className="mt-2 font-sans font-light text-grey-dark">Hello, i'm from another the other side!</p>
        </div>
        <div className="flex justify-center pb-3 text-grey-dark">
          <div className="text-center mr-3 border-r pr-3">
            <h2>34</h2>
            <span>Photos</span>
          </div>
          <div className="text-center">
            <h2>42</h2>
            <span>Friends</span>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Card9
