import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import Features1 from '../../uicomp1/Features/Features1'
import All from '../All'

export class Feature extends Component {
    render() {
        return (
            <div>
                <All/>
                <CodeCard>
                    <Features1/>
                    </CodeCard>

                
            </div>
        )
    }
}

export default Feature
