import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'
import {FooterTemp} from '../../Boiled/Data'
export class Footers extends Component {
    render() {
        return (
            <div>
             
             
{FooterTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

            </div>
        )
    }
}

export default Footers
