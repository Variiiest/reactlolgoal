import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import Content1 from '../../uicomp1/Content/Content1'
import Content2 from '../../uicomp1/Content/Content2'
import All from '../All'

export class Content extends Component {
    render() {
        return (
            <div>
                <All/>
                
                <CodeCard>
                <Content2/>
                </CodeCard>
                <CodeCard>
                <Content1/>
                </CodeCard>
            </div>
        )
    }
}

export default Content
