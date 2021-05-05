import React, { Component } from 'react'
import CodeCard from '../../uicomp1/CodeCard'
import Contact1 from '../../uicomp1/Contact/Contact1'
import Contact2 from '../../uicomp1/Contact/Contact2'
import All from '../All'

export class Contact extends Component {

    render() {





        return (
            <div>
                <All />
                <CodeCard>
                    <Contact2/>
                </CodeCard>
                <CodeCard>
                    <Contact1/>
                </CodeCard>
            </div>
        )
    }
}

export default Contact
