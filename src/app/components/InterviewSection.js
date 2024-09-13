import React from 'react'

export default function InterviewSection() {
    return (
        <div><div>
            <h2 className="text-xl text-black font-bold">Interview 1</h2>
            <p className="text-black">(Create slots for students)</p>
            <div className="mt-4 space-y-4">
                <div>
                    <p className="text-black">Duration</p>
                    <select className="mt-1 p-2 border rounded-lg w-full">
                        <option>30 minutes</option>
                        <option>1 hour</option>
                    </select>
                </div>
                <div>
                    <p className="text-black">Interval</p>
                    <select className="mt-1 p-2 border rounded-lg w-full">
                        <option>10 minutes</option>
                        <option>15 minutes</option>
                    </select>
                </div>
                <div>
                    <p className="text-black">Graphic designer</p>
                </div>
            </div>
        </div></div>
    )
}
