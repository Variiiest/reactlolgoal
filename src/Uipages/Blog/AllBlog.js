import React, { Component } from 'react'
import Bllog5 from '../../uicomp1/Blog/Bllog5'
import Blog14 from '../../uicomp1/Blog/Blog14'

import CodeCard from '../../uicomp1/CodeCard'

export class AllBlog extends Component {
    render() {
        return (
            <div>
<CodeCard>
    <Bllog5></Bllog5>
</CodeCard>
<CodeCard>
    <Blog14/>
</CodeCard>


            </div>
        )
    }
}

export default AllBlog
