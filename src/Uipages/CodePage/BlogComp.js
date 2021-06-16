import React, { Component } from 'react'

import CodeCard from '../../tailblocks/CodeCard'

import {Blogtemp} from '../../Boiled/Data'


export class BlogComp extends Component {
    render() {
        return (
            <div>
  <div className="font-opensans">


{Blogtemp.map((data,key)=>
      <CodeCard code={data.code} id={data.id}/>
)}

  
      </div>
            </div>
        )
    }
}

export default BlogComp
