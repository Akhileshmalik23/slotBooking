'use client';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Slotbook({ date, month, year }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleClick = (time) => {
    setSelectedTime(time);
  };

  const handleDelete = () => {
    setSelectedTime(null);
  };

  const times = ['11:00 AM', '13:05 PM', '18:45 PM'];

  return (
    <div>
      <div>
        {date !== null ? (
          <>
            <p className="mb-4 font-bold">
              {date}{' '}
              {new Date(2024, month).toLocaleString('default', {
                month: 'long',
              })}{' '}
              {year}
            </p>

            <div className="mt-4">
              {selectedTime ? (
                <div className="flex flex-col justify-between items-center border border-blue-500 rounded-lg p-2 mb-4">
                  <div className='flex justify-between items-center gap-8'>
                    <p className="text-black font-bold">Slot 1</p>
                    <FaTrashAlt
                      className="text-blue-500 cursor-pointer"
                      onClick={handleDelete}
                      size={12}
                    />
                  </div>

                  <p className="text-gray-600">Time: {selectedTime}</p>

                </div>
              ) : (
                times.map((time) => (
                  <div
                    key={time}
                    className="flex justify-center items-center border border-blue-500 text-blue-500 p-2 rounded mb-2 cursor-pointer"
                    onClick={() => handleClick(time)}
                  >
                    {time}
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          <p className='text-gray-400'>No date selected</p>
        )}
      </div>
    </div>
  );
}
