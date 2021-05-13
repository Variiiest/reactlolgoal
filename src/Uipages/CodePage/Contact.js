import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import All from '../All'
import {Contacttemp} from '../../components/Templates/Achrome/Data'
import '../../components/Templates/Achrome/Achrome.css'


export class Contact extends Component {

    render() {





        return (
            <div className="font-opensans">

            <All />
            
            {Contacttemp.map((data,key)=>
                  <CodeCard code={data.code} id={data.id}/>
            )}
            
              
                  </div>
        )
    }
}

export default Contact
