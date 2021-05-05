import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import FAQ1 from '../../uicomp1/FAQ/FAQ1'
import All from '../All'

export class FAQ extends Component {
    render() {
        return (
            <div>
                <All/>
                <CodeCard>
                    <FAQ1/>
                </CodeCard>
            </div>
        )
    }
}

export default FAQ
