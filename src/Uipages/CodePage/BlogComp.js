import React, { Component } from 'react'

import CodeCard from '../../uicomp1/CodeCard'
import All from '../All'
import {Blogtemp} from '../../components/Templates/Achrome/Data'
import '../../components/Templates/Achrome/Achrome.css'

export class BlogComp extends Component {
    render() {
        return (
            <div>
  <div className="font-opensans">

<All />

{Blogtemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
            </div>
        )
    }
}

export default BlogComp
