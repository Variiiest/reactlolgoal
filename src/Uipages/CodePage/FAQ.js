import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import All from '../All'
import {FaqTemp} from '../../components/Achrome/Data'
import '../../components/Achrome/Achrome.css'

export class FAQ extends Component {
    render() {
        return (
            <div className="font-opensans">

            <All />
            
            {FaqTemp.map((data,key)=>
                  <CodeCard code={data.code} id={data.id}/>
            )}
            
              
                  </div>
        )
    }
}

export default FAQ
