import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'
import {AlertData} from '../../Boiled/Alerts'


export class Alerts extends Component {

  render() {
    return (
      <div className="font-opensans bg-gradient-to-b from gray-200 to-white">

{AlertData.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
    )
  }
}

export default Alerts
