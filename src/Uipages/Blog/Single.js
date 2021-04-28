import React, { Component } from 'react'
import Blog6 from '../../uicomp1/Blog/Blog6'
import Blog7 from '../../uicomp1/Blog/Blog7'
import CodeCard from '../../uicomp1/CodeCard'

export class Single extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            code1:``,
       }
   }
   

    render() {
        return (
            <div>



<CodeCard code={this.state.code1}>
                    <Blog6 />

                </CodeCard>
                     <CodeCard>
                    <Blog7/>

                </CodeCard>


            </div>
        )
    }
}

export default Single
