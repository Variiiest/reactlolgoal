import React, { Component } from 'react'
import Auth2 from '../../uicomp1/Authentication/Auth2'
import CodeCard from '../../uicomp1/CodeCard'

export class Authspec extends Component {
    render() {
        return (
            <div>
                   <CodeCard>
                    <Auth2 />
                </CodeCard>
            </div>
        )
    }
}

export default Authspec
