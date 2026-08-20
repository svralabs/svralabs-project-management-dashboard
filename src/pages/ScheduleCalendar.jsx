import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ScheduleCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    }
  };

  const calendarDays = getCalendarDays();

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-border flex items-center justify-between px-md h-14">
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary transition-colors duration-200 ease-in-out hover:bg-surface-container p-2 rounded-full">
            arrow_back
          </button>
          <h1 className="font-heading-md text-heading-md font-bold text-on-surface">Jadwal</h1>
        </div>
      </header>

      <main className="pt-14 pb-20 px-gutter">
        <div className="bg-surface rounded-xl border border-border p-4 mt-6">
          <div className="flex justify-between items-center mb-4">
            <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-surface-container transition-colors">
              <ArrowLeft className="w-5 h-5 text-primary" />
            </button>
            <h2 className="font-bold text-on-surface text-lg">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-surface-container transition-colors">
              <ArrowRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center font-medium text-on-surface-variant text-sm">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDateClick(day)}
                className={`aspect-square rounded-full flex items-center justify-center transition-colors ${
                  day
                    ? 'hover:bg-surface-container cursor-pointer'
                    : 'invisible'
                } ${
                  selectedDate &&
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentDate.getMonth() &&
                  selectedDate.getFullYear() === currentDate.getFullYear()
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {selectedDate && (
          <div className="mt-6 bg-surface rounded-xl border border-border p-4">
            <h3 className="font-bold text-on-surface mb-2">
              Jadwal untuk {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]}
            </h3>
            <div className="space-y-3">
              <div className="bg-surface-container rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-on-surface">Rapat Tim</h4>
                    <p className="text-sm text-on-surface-variant">10:00 - 11:30</p>
                  </div>
                  <span className="text-xs bg-primary text-on-primary px-2 py-1 rounded-full">Penting</span>
                </div>
                <p className="text-sm text-on-surface-variant mt-2">Diskusi proyek baru dan pembaruan tim.</p>
              </div>
              <div className="bg-surface-container rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-on-surface">Konsultasi Klien</h4>
                    <p className="text-sm text-on-surface-variant">14:00 - 15:00</p>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant mt-2">Pembahasan kebutuhan klien untuk proyek X.</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 w-full z-50 bg-surface border-t border-border flex justify-around items-center h-16 px-gutter pb-safe">
        <a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-label-caps text-label-caps">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
          <span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
          <span className="font-label-caps text-label-caps">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-primary font-bold transition-transform duration-150 active:scale-95" href="#">
          <div className="relative">
            <span className="material-symbols-outlined" data-icon="notifications" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error-text border-2 border-surface rounded-full"></span>
          </div>
          <span className="font-label-caps text-label-caps">Inbox</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-label-caps text-label-caps">Profile</span>
        </a>
      </nav>
    </div>
  );
}
