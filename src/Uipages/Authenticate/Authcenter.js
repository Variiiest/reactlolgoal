import React, { Component } from 'react'
import Auth1 from '../../uicomp1/Authentication/Auth1'
import Auth9 from '../../uicomp1/Authentication/Auth9'
import CodeCard from '../../uicomp1/CodeCard'

export class Authcenter extends Component {
    render() {
        return (
            <div>
                <CodeCard>
                    <Auth9/>
                </CodeCard>
                <CodeCard>
                    <Auth1 />
                </CodeCard>
            </div>
        )
    }
}

export default Authcenter
