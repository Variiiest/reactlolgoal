import React, { Component } from 'react'
import Auth8 from '../../uicomp1/Authentication/Auth8'
import CodeCard from '../../uicomp1/CodeCard'

export class AuthRight extends Component {
    render() {
        return (
            <div>
                 <CodeCard>
                    <Auth8 />
                </CodeCard>
            </div>
        )
    }
}

export default AuthRight
