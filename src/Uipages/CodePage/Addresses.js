import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'
import {Address} from '../../Boiled/Address'

export class Addresses extends Component {

  render() {
    return (
      <div className="font-opensans bg-gradient-to-b from gray-200 to-white">

{Address.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
    )
  }
}

export default  Addresses
