import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import Footer1 from '../../uicomp1/Footers/Footer1'
import All from '../All'

export class Footers extends Component {
    render() {
        return (
            <div>
                <All/>
                <CodeCard>
                    <Footer1/>
                </CodeCard>
            </div>
        )
    }
}

export default Footers
