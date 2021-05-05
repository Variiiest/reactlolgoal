import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import CTA1 from '../../uicomp1/CTA/CTA1'
import All from '../All'

export class CTA extends Component {
    render() {
        return (
            <div>
                <All/>
                <CodeCard>
                    <CTA1/>
                </CodeCard>
                
            </div>
        )
    }
}

export default CTA
