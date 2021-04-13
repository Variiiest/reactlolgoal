import React, { Component } from 'react'
import CourseBanner from '../../components/CourseBanner'

export class CoursePage extends Component {
    render() {
        return (
            <div>
          <CourseBanner/>
          <CourseBanner/>
          <CourseBanner/>
            </div>
        )
    }
}

export default CoursePage
