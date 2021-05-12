import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import All from '../All'
import {FeatureComp} from '../../components/Achrome/Data'
import '../../components/Achrome/Achrome.css'

export class Feature extends Component {
    render() {
        return (
            <div>
                <All/>
             
{FeatureComp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

            </div>
        )
    }
}

export default Feature
