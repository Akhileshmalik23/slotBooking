import Calendar from "./Calendar";


export default function DateTime() {
    return (
        <div>
            <h2 className="text-xl font-bold">Select date and time</h2>
            <div className="mt-4 flex flex-col">
                <Calendar />
                <div className="mt-4">
                    <p className="text-gray-700">Time zone</p>
                    <select className="mt-1 p-2 border rounded w-full">
                        <option>Indian standard time</option>
                        <option>Pacific standard time</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
