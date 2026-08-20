import { useState } from 'react';

const daysOfWeek = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

export default function DatePicker({ selectedDate, onDateChange }) {
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentYear, currentMonth, day);
    onDateChange(newDate);
  };

  const renderDays = () => {
    const days = [];
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

    // Previous month days
    for (let i = 0; i < firstDayOfMonth; i++) {
      const day = prevMonthDays - firstDayOfMonth + i + 1;
      days.push(
        <button
          key={`prev-${i}`}
          className="w-8 h-8 text-on-surface-variant/50"
          onClick={() => handlePrevMonth()}
        >
          {day}
        </button>
      );
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = selectedDate.getDate() === i &&
                         selectedDate.getMonth() === currentMonth &&
                         selectedDate.getFullYear() === currentYear;

      days.push(
        <button
          key={`current-${i}`}
          className={`w-8 h-8 rounded-full ${isSelected ? 'bg-primary text-on-primary' : 'text-on-surface'}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </button>
      );
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <button
          key={`next-${i}`}
          className="w-8 h-8 text-on-surface-variant/50"
          onClick={() => handleNextMonth()}
        >
          {i}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-lg space-y-md">
      <div className="flex justify-between items-center">
        <button
          className="p-1 text-on-surface-variant active:scale-95 transition-transform"
          onClick={handlePrevMonth}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h2 className="font-heading-sm text-heading-sm text-on-surface">
          {new Date(currentYear, currentMonth).toLocaleString('id-ID', { month: 'long', year: 'numeric' })}
        </h2>
        <button
          className="p-1 text-on-surface-variant active:scale-95 transition-transform"
          onClick={handleNextMonth}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center font-label-caps text-label-caps text-on-surface-variant">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {renderDays()}
      </div>
    </div>
  );
}
