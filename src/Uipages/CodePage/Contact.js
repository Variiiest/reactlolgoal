import React, { Component } from 'react'
import CodeCard from '../../tailblocks/CodeCard'

import {Contacttemp} from '../../components/Templates/Achrome/Data'
import '../../components/Templates/Achrome/Achrome.css'


export class Contact extends Component {

    render() {





        return (
            <div className="font-opensans">

            
            {Contacttemp.map((data,key)=>
                  <CodeCard code={data.code} id={data.id}/>
            )}
            
              
                  </div>
        )
    }
}

export default Contact
