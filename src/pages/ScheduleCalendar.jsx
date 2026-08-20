// src/pages/ScheduleCalendar.jsx
import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEvents } from '../api/admin';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const CELL_SIZE = 'h-10 w-10';

const formatDate = (date) => date.toISOString().split('T')[0];
const isSameDay = (a, b) => formatDate(a) === formatDate(b);
const isSameMonth = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
const startOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);
const endOfMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);
const startOfWeek = (date) => {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
};
const endOfWeek = (date) => {
  const d = new Date(date);
  d.setDate(d.getDate() + (6 - d.getDay()));
  return d;
};
const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

const MonthGrid = ({ date, events, onDateClick }) => {
  const startOfMonthDate = startOfMonth(date);
  const endOfMonthDate = endOfMonth(date);
  const startOfGridDate = startOfWeek(startOfMonthDate);
  const endOfGridDate = endOfWeek(endOfMonthDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const weeks = useMemo(() => {
    const weeks = [];
    let current = new Date(startOfGridDate);
    while (current <= endOfGridDate) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        const dayEvents = events.filter(event => {
          const eventStart = new Date(event.start);
          const eventEnd = new Date(event.end);
          return isSameDay(current, eventStart) ||
            (eventStart < current && eventEnd > current);
        });
        week.push({
          date: new Date(current),
          isCurrentMonth: isSameMonth(current, startOfMonthDate),
          isToday: isSameDay(current, today),
          events: dayEvents
        });
        current = addDays(current, 1);
      }
      weeks.push(week);
    }
    return weeks;
  }, [date, events]);

  return (
    <div className="grid grid-cols-7 gap-px bg-border">
      {WEEKDAYS.map(day => (
        <div key={day} className={`${CELL_SIZE} flex items-center justify-center font-medium text-tx-secondary`}>
          {day}
        </div>
      ))}
      {weeks.map((week, weekIdx) => (
        week.map((day, dayIdx) => (
          <button
            key={`${weekIdx}-${dayIdx}`}
            className={`${CELL_SIZE} flex flex-col items-center justify-start p-1 gap-1 bg-surface hover:bg-bg-canvas transition-colors ${!day.isCurrentMonth ? 'opacity-50' : ''} ${day.isToday ? 'border border-accent' : ''}`}
            onClick={() => onDateClick(day.date)}
          >
            <div className={`text-sm ${day.isToday ? 'text-accent' : 'text-tx-primary'}`}>
              {day.date.getDate()}
            </div>
            {day.events.slice(0, 2).map((event, i) => (
              <div key={i} className="w-full h-1 rounded bg-accent opacity-80" />
            ))}
            {day.events.length > 2 && (
              <div className="text-xs text-tx-secondary">+{day.events.length - 2}</div>
            )}
          </button>
        ))
      ))}
    </div>
  );
};

export default function ScheduleCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  const goToToday = () => setCurrentDate(new Date());
  const goToPrevMonth = () => setCurrentDate(prev => {
    const d = new Date(prev);
    d.setMonth(d.getMonth() - 1);
    return d;
  });
  const goToNextMonth = () => setCurrentDate(prev => {
    const d = new Date(prev);
    d.setMonth(d.getMonth() + 1);
    return d;
  });

  const handleDateClick = (date) => {
    navigate(`/schedule?date=${formatDate(date)}`);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <button onClick={goToPrevMonth} className="p-2 rounded-full hover:bg-surface">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="text-lg font-medium">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <button onClick={goToNextMonth} className="p-2 rounded-full hover:bg-surface">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <button onClick={goToToday} className="text-sm text-tx-secondary hover:text-tx-primary self-start">
        Today
      </button>
      <MonthGrid date={currentDate} events={events} onDateClick={handleDateClick} />
    </div>
  );
}
