import React, { Component } from 'react'
import Auth1 from '../uicomp1/Authentication/Auth1'
import Auth10 from '../uicomp1/Authentication/Auth10'
import Auth11 from '../uicomp1/Authentication/Auth11'
import Auth2 from '../uicomp1/Authentication/Auth2'
import Auth3 from '../uicomp1/Authentication/Auth3'
import Auth4 from '../uicomp1/Authentication/Auth4'
import Auth5 from '../uicomp1/Authentication/Auth5'
import Auth6 from '../uicomp1/Authentication/Auth6'
import Auth7 from '../uicomp1/Authentication/Auth7'
import Auth8 from '../uicomp1/Authentication/Auth8'
import Auth9 from '../uicomp1/Authentication/Auth9'
import CodeCard from '../uicomp1/CodeCard'

export class authentication extends Component {
    render() {
        return (
            <div>
                <CodeCard>
                    <Auth11 />
                </CodeCard>
                <CodeCard>
                    <Auth10 />
                </CodeCard>
                <CodeCard>
                    <Auth9 />
                </CodeCard>
                <CodeCard>
                    <Auth8 />
                </CodeCard>
                <CodeCard>
                    <Auth7 />
                </CodeCard>
                <CodeCard>
                    <Auth1 />
                </CodeCard>
                <CodeCard>
                    <Auth2 />
                </CodeCard>
                <CodeCard>
                    <Auth3 />
                </CodeCard>
                <CodeCard>
                    <Auth4 />
                </CodeCard>
                <CodeCard>
                    <Auth5 />
                </CodeCard>
                <CodeCard>
                    <Auth6 />
                </CodeCard>

            </div>
        )
    }
}

export default authentication
