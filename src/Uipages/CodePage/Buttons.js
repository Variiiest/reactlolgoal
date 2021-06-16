import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'
import {Button} from '../../Boiled/Buttons'


export class Buttons extends Component {

  render() {
    return (
      <div className="font-opensans bg-gradient-to-b from gray-200 to-white">

{Button.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
    )
  }
}

export default Buttons
