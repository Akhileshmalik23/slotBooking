'use client'
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slotbook from './Slotbook';

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const currentYear = 2024;
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11); // Move to December
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0); // Move to January
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    setSelectedDate(prevDate => (prevDate === day ? null : day));
  };

  const renderCalendarDays = () => {
    const days = [];
    const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
    const firstDay = firstDayOfMonth(currentMonth, currentYear);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-center"></div>);
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const isSelected = selectedDate === day;

      days.push(
        <div
          key={day}
          className={`text-center text-sm cursor-pointer rounded-full p-1 ${isSelected ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
            }`}
          onClick={() => handleDateClick(day)}
          aria-label={`Select ${day}`}
          tabIndex={0}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <>
      <div>
        <h2 className="text-xl font-bold ">Select date and time</h2>
        <div className="mt-4 flex flex-col">
          <div>
            <div className="bg-white p-6 rounded-lg ">
              <div className="flex justify-between items-center mb-2">
                <button onClick={handlePreviousMonth} aria-label="Previous month">
                  <FaChevronLeft size={14} />
                </button>
                <span className="text-lg ">
                  {new Date(currentYear, currentMonth).toLocaleString('default', {
                    month: 'long',
                  })}{' '}
                  {currentYear}
                </span>
                <button onClick={handleNextMonth} aria-label="Next month">
                  <FaChevronRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                  <div key={day} className="text-center font-bold text-xs">
                    {day}
                  </div>
                ))}
                {renderCalendarDays()}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-700">Time zone</p>
            <select className="mt-1 p-2 border rounded-lg w-full">
              <option>Indian standard time</option>
              <option>Pacific standard time</option>
            </select>
          </div>
        </div>
      </div>
      <Slotbook
        date={selectedDate}
        month={currentMonth}
        year={currentYear}
      />
    </>
  );
}
