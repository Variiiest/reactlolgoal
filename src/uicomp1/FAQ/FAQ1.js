import React, { useState } from "react";
function FAQ1() {
    const [question, setquestion] = useState(0);
    return (
        <div className="bg-gray-900 text-gray-300">
            <div className="container mx-auto py-24">
                <div className="text-center pb-3 md:pb-10 xl:pb-20">
                    <p className="text-gray-100 text-base lg:text-lg uppercase leading-tight mb-4">start with the basics</p>
                    <h1 className="px-2 xl:px-0 xl:text-4xl md:text-3xl text-2xl font-extrabold text-gray-100">Frequently Asked Questions</h1>
                </div>
                <div className="w-8/12 mx-auto">
                    <ul>
                        <li className="py-2">
                            <div className="flex justify-between items-center px-2 py-4 bg-gray-800 rounded shadow-2xl">
                                <h3 className="text-gray-100 text-base md:text-xl xl:text-2xl pl-3">What does lorem ipsum actually mean?</h3>
                                <div className="cursor-pointer" onClick={() => (question === 0 ? setquestion(null) : setquestion(0))}>
                                    {question === 0 ? (
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M3,19h18c0.372,0,0.713-0.207,0.886-0.536c0.173-0.329,0.148-0.727-0.063-1.033l-9-13c-0.373-0.539-1.271-0.539-1.645,0 l-9,13c-0.212,0.306-0.236,0.704-0.063,1.033C2.287,18.793,2.628,19,3,19z M12,6.757L19.092,17H4.908L12,6.757z" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M21.886,5.536C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569l9,13 C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13C22.034,6.263,22.059,5.865,21.886,5.536z M12,17.243L4.908,7h14.184 L12,17.243z" /></svg>
                                    )}
                                </div>
                            </div>
                            {question === 0 && <p className="py-3 bg-gray-700 text-sm md:text-base xl:text-lg rounded-b-lg px-4">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                        </li>
                        <li className="py-3">
                            <div className="flex justify-between items-center px-2 py-4 bg-gray-800 rounded shadow-2xl">
                                <h3 className="text-gray-100 text-base md:text-xl xl:text-2xl pl-3">What does lorem ipsum actually mean?</h3>
                                <div className="cursor-pointer" onClick={() => (question === 1 ? setquestion(null) : setquestion(1))}>
                                    {question === 1 ? (
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M3,19h18c0.372,0,0.713-0.207,0.886-0.536c0.173-0.329,0.148-0.727-0.063-1.033l-9-13c-0.373-0.539-1.271-0.539-1.645,0 l-9,13c-0.212,0.306-0.236,0.704-0.063,1.033C2.287,18.793,2.628,19,3,19z M12,6.757L19.092,17H4.908L12,6.757z" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M21.886,5.536C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569l9,13 C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13C22.034,6.263,22.059,5.865,21.886,5.536z M12,17.243L4.908,7h14.184 L12,17.243z" /></svg>
                                    )}
                                </div>
                            </div>
                            {question === 1 && <p className="py-3 bg-gray-700 text-sm md:text-base  xl:text-lg rounded-b-lg px-4">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                        </li>
                        <li className="py-3">
                            <div className="flex justify-between items-center px-2 py-4 bg-gray-800 rounded shadow-2xl">
                                <h3 className="text-gray-100 text-base md:text-xl xl:text-2xl pl-3">What does lorem ipsum actually mean?</h3>
                                <div className="cursor-pointer" onClick={() => (question === 2 ? setquestion(null) : setquestion(2))}>
                                    {question === 2 ? (
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M3,19h18c0.372,0,0.713-0.207,0.886-0.536c0.173-0.329,0.148-0.727-0.063-1.033l-9-13c-0.373-0.539-1.271-0.539-1.645,0 l-9,13c-0.212,0.306-0.236,0.704-0.063,1.033C2.287,18.793,2.628,19,3,19z M12,6.757L19.092,17H4.908L12,6.757z" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M21.886,5.536C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569l9,13 C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13C22.034,6.263,22.059,5.865,21.886,5.536z M12,17.243L4.908,7h14.184 L12,17.243z" /></svg>
                                    )}
                                </div>
                            </div>
                            {question === 2 && <p className="py-3 bg-gray-700 text-sm md:text-base  xl:text-lg rounded-b-lg px-4">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                        </li>
                        <li className="py-3">
                            <div className="flex justify-between items-center px-2 py-4 bg-gray-800 rounded shadow-2xl">
                                <h3 className="text-gray-100 text-base md:text-xl xl:text-2xl pl-3">What does lorem ipsum actually mean?</h3>
                                <div className="cursor-pointer" onClick={() => (question === 3 ? setquestion(null) : setquestion(3))}>
                                    {question === 3 ? (
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M3,19h18c0.372,0,0.713-0.207,0.886-0.536c0.173-0.329,0.148-0.727-0.063-1.033l-9-13c-0.373-0.539-1.271-0.539-1.645,0 l-9,13c-0.212,0.306-0.236,0.704-0.063,1.033C2.287,18.793,2.628,19,3,19z M12,6.757L19.092,17H4.908L12,6.757z" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M21.886,5.536C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569l9,13 C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13C22.034,6.263,22.059,5.865,21.886,5.536z M12,17.243L4.908,7h14.184 L12,17.243z" /></svg>
                                    )}
                                </div>
                            </div>
                            {question === 3 && <p className="py-3 bg-gray-700 text-sm md:text-base  xl:text-lg rounded-b-lg px-4">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                        </li>
                        <li className="py-3">
                            <div className="flex justify-between items-center px-2 py-4 bg-gray-800 rounded shadow-2xl">
                                <h3 className="text-gray-100 text-base md:text-xl xl:text-2xl pl-3">What does lorem ipsum actually mean?</h3>
                                <div className="cursor-pointer" onClick={() => (question === 4 ? setquestion(null) : setquestion(4))}>
                                    {question === 4 ? (
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M3,19h18c0.372,0,0.713-0.207,0.886-0.536c0.173-0.329,0.148-0.727-0.063-1.033l-9-13c-0.373-0.539-1.271-0.539-1.645,0 l-9,13c-0.212,0.306-0.236,0.704-0.063,1.033C2.287,18.793,2.628,19,3,19z M12,6.757L19.092,17H4.908L12,6.757z" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M21.886,5.536C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569l9,13 C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13C22.034,6.263,22.059,5.865,21.886,5.536z M12,17.243L4.908,7h14.184 L12,17.243z" /></svg>
                                    )}
                                </div>
                            </div>
                            {question === 4 && <p className="py-3 bg-gray-700 text-sm md:text-base  xl:text-lg rounded-b-lg px-4">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                        </li>
                        <li className="py-3">
                            <div className="flex justify-between items-center px-2 py-4 bg-gray-800 rounded shadow-2xl">
                                <h3 className="text-gray-100 text-base md:text-xl xl:text-2xl pl-3">What does lorem ipsum actually mean?</h3>
                                <div className="cursor-pointer" onClick={() => (question === 5 ? setquestion(null) : setquestion(5))}>
                                    {question === 5 ? (
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M3,19h18c0.372,0,0.713-0.207,0.886-0.536c0.173-0.329,0.148-0.727-0.063-1.033l-9-13c-0.373-0.539-1.271-0.539-1.645,0 l-9,13c-0.212,0.306-0.236,0.704-0.063,1.033C2.287,18.793,2.628,19,3,19z M12,6.757L19.092,17H4.908L12,6.757z" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 250, 255, 1)', transform: '', msFilter: ''}}><path d="M21.886,5.536C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569l9,13 C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13C22.034,6.263,22.059,5.865,21.886,5.536z M12,17.243L4.908,7h14.184 L12,17.243z" /></svg>
                                    )}
                                </div>
                            </div>
                            {question === 5 && <p className="py-3 bg-gray-700 text-sm md:text-base  xl:text-lg rounded-b-lg px-4">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FAQ1;
