import React from 'react'
import {BlogData} from './data'
import { useParams } from "react-router";
function findPostBySlug(slug) {
  return BlogData.find(o => o.slug === slug);
}


export default function BlogPage() {
  var { slug } = useParams(),
  post = findPostBySlug(slug);
  return (
    <div>
      <section className="text-gray-100 body-font">
  <div className="container px-5 mx-auto">

    <div className="flex flex-wrap -mx-4 -mb-10">
      <div className="md:w-2/3 sm:mb-0 mb-6 bg-gray-800">
                  
                   <article className="py-12 px-4">
        <h1 className="sm:text-4xl text-2xl text-white mb-4 sm:mx-2 mx-2 font-semibold font-heading font-semibold">{post.title}</h1>
      
        <div className="max-w-3xl sm:mx-2 mx-2">
        <div dangerouslySetInnerHTML={{__html:post["body"]}}></div>
        </div>
      </article>
      </div>

      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 mt-2">
 
      <div className="bg-gray-900 p-2 shadow-lg">
   <h2 className="text-xl font-medium title-font text-gray-100 mt-2">Github Repository</h2>
              <p className="text-base leading-relaxed mt-2">Fork this Github Repository to learn About DRF.</p>
              <a href="/" className="inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg> 
              </a>
   </div> 


           
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
