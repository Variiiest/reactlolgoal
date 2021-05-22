import React from 'react'
import {DeevaData} from './DeevaData'
import CodeCard from '../../../uicomp1/CodeCard'
import { useParams } from "react-router";
function findtempByname(name) {
  return DeevaData.find(o => o.name === name);
}



export default function Deeva() {

    var { name } = useParams(),
    post = findtempByname(name);
        return (
            <div className="font-opensans">

      <CodeCard code={post.code} id={post.id}/>

                
            </div>
        )
    }