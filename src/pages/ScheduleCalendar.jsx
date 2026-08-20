import { useState } from 'react';
import DatePicker from '../components/DatePicker';

const mockEvents = [
  { id: 1, title: 'Meeting with Client', date: '2023-11-15', time: '10:00 AM' },
  { id: 2, title: 'Project Deadline', date: '2023-11-20', time: '5:00 PM' },
  { id: 3, title: 'Team Lunch', date: '2023-11-22', time: '1:00 PM' },
];

export default function ScheduleCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredEvents = mockEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="w-full sticky top-0 z-40 bg-surface border-b border-border flex justify-between items-center px-margin py-md">
        <div className="flex items-center gap-4">
          <button className="active:scale-95 transition-transform p-1 -ml-1 text-on-surface-variant">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-heading-md text-heading-md text-on-surface">Jadwal Kalender</h1>
        </div>
        <div className="w-6"></div>
      </header>
      <main className="px-margin pt-md pb-32 max-w-md mx-auto space-y-md">
        <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <div className="bg-surface border border-border rounded-lg p-lg space-y-md">
          <h2 className="font-heading-sm text-heading-sm text-on-surface">Acara Hari Ini</h2>
          {filteredEvents.length > 0 ? (
            <ul className="space-y-md">
              {filteredEvents.map(event => (
                <li key={event.id} className="flex items-center gap-md p-md bg-surface-container-lowest rounded-lg">
                  <div className="bg-primary p-2 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary">event</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body-base font-bold text-on-surface">{event.title}</span>
                    <span className="font-body-base text-on-surface-variant">{event.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center py-md">
              <span className="material-symbols-outlined text-on-surface-variant text-[48px]">event_busy</span>
              <p className="font-body-base text-on-surface-variant mt-2">Tidak ada acara untuk hari ini</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
