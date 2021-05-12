import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import All from '../All'
import {FooterTemp} from '../../components/Achrome/Data'
import '../../components/Achrome/Achrome.css'

export class Footers extends Component {
    render() {
        return (
            <div>
                <All/>
             
{FooterTemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

            </div>
        )
    }
}

export default Footers
