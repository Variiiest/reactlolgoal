import React, { Component } from 'react'
import Blog1 from '../../uicomp1/Blog/Blog1'

import Blog2 from '../../uicomp1/Blog/Blog2'
import Blog3 from '../../uicomp1/Blog/Blog3'
import Blog4 from '../../uicomp1/Blog/Blog4'

import Blog8 from '../../uicomp1/Blog/Blog8'
import CodeCard from '../../uicomp1/CodeCard'
import Special from './Special'

export class AllBlog extends Component {
    render() {
        return (
            <div>



                <Special/>
                    <CodeCard>
                    <Blog8/>

                </CodeCard>
           

<CodeCard>
                    <Blog4/>

                </CodeCard>

<CodeCard>
                    <Blog3 />

                </CodeCard>
                <CodeCard>
                    <Blog2 />

                </CodeCard>
                <CodeCard>
                    <Blog1 />

                </CodeCard>
            </div>
        )
    }
}

export default AllBlog
