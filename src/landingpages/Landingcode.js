import React from 'react'
import {LandingData} from './LandingData'

import { useParams } from "react-router";
import CodeCard from '../uicomp1/CodeCard';
function findtempByname(slug) {
  return LandingData.find(o => o.slug === slug);
}



export default function LandingCode() {

    var { slug } = useParams(),
    post = findtempByname(slug);
        return (
            <div className="font-opensans">

      <CodeCard code={post.code} id={post.id}/>

                
            </div>
        )
    }