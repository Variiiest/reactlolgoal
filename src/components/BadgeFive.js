import React, { Component } from 'react'

export class BadgeFive extends Component {
    render() {
        return (
            <div>
                <div className="py-2">
                    <div className="grid text-center grid-cols-6">
                        <div className="flex items-center justify-center ">
                            <div className="w-12 h-12 inline-flex items-center bg-red-400 rounded-l-full justify-center mb-4 flex-shrink-0">
                            </div>

                        </div>
                        <div className="flex items-center justify-center ">
                            <div className="w-12 h-12 inline-flex items-center bg-red-600 justify-center mb-4 flex-shrink-0">

                            </div>

                        </div>
                        <div className="flex items-center justify-center ">
                            <div className="w-12 h-12 inline-flex items-center bg-gray-200 justify-center mb-4 flex-shrink-0">

                            </div>

                        </div>
                        <div className="flex items-center justify-center ">
                            <div className="w-12 h-12 inline-flex items-center bg-gray-900 justify-center mb-4 flex-shrink-0">

                            </div>

                        </div>
                        <div className="flex items-center justify-center ">
                            <div className="w-12 h-12 inline-flex items-center bg-red-900 rounded-r-full justify-center mb-4 flex-shrink-0">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeFive
