import React, { Component } from 'react'
import {Data} from './Data'
import CodeCard from '../../../uicomp1/CodeCard'
import './Denim.css'

export class DenimComp extends Component {
    render() {
        return (
            <div>

                
{Data.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

                
            </div>
        )
    }
}

export default DenimComp
