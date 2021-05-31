import React, { useState } from "react";
export default function SideBar() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="w-full h-full">
                <div className="flex flex-no-wrap">
                    {/* Sidebar starts */}
                    <div className="w-64 absolute lg:relative h-screen flex-col justify-between hidden lg:flex pb-12">
                        <div className="px-8">
                            <ul className="mt-12">
                                <li className="flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Dashboard</span>
                                    </div>
                                    <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">5</div>
                                </li>
                                <li className="flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Dashboard</span>
                                    </div>
                                    <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">5</div>
                                </li>
                                <li className="flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Dashboard</span>
                                    </div>
                                    <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">5</div>
                                </li>
                                <li className="flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Dashboard</span>
                                    </div>
                                    <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">5</div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Products</span>
                                    </div>
                                    <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">8</div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Performance</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Deliverables</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Invoices</span>
                                    </div>
                                    <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">25</div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Inventory</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                    <div className="flex items-center">
                                        <span className="text-sm">Settings</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Performance</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Deliverables</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Invoices</span>
                                    </div>
                                    <div className="py-1 px-3 bg-indigo-700 rounded text-white flex items-center justify-center text-xs">25</div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
                                    <div className="flex items-center">
                                        <span className="text-sm">Inventory</span>
                                    </div>
                                </li>
                                <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                    <div className="flex items-center">
                                        <span className="text-sm">Settings</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"}>
                        <div className="bg-gray-800 opacity-50 w-full h-full absolute" onClick={() => setShow(!show)}></div>
                        <div className="w-64 md:w-96 absolute z-40 bg-white shadow h-full flex-col justify-between lg:hidden pb-4 transition duration-150 ease-in-out">
                            <div className="flex flex-col justify-between h-full">
                               
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    {/* Sidebar ends */}
                    <div className="w-full">
                        {/* Navigation starts */}
                        <nav className="h-16 flex items-center lg:items-stretch justify-start lg:justify-between bg-white shadow relative z-0">
                         
                            <div className="text-gray-600 mr-8 relative" onClick={() => setShow(!show)} id="menu">
                                {show ? (
                                    ""
                                ) : (
                                    <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                )}
                            </div>
                        </nav>
                        {/* Navigation ends */}
                        {/* Remove class [ h-64 ] when adding a card block */}
                        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6 dark:bg-gray-900">
                            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                            <div className="w-full h-full rounded border-dashed border-2 border-gray-300">{/* Place your content here */}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
