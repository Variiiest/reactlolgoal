import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'
import {ContentTemp} from '../../Boiled/Data'


export class Content extends Component {
    render() {
        return (
            <div className="font-opensans">


{ContentTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
        )
    }
}

export default Content
