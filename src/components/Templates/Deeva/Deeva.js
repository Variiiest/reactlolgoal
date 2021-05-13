import React, { Component } from 'react'
import {DeevaData} from './DeevaData'
import CodeCard from '../../../uicomp1/CodeCard'

export class Deeva extends Component {
    render() {
        return (
            <div>

                
{DeevaData.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

                
            </div>
        )
    }
}

export default Deeva
