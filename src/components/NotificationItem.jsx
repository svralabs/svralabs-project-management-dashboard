import React from 'react';

export default function NotificationItem({ icon, title, time, message, priority, isRead }) {
  const bgColor = isRead ? 'bg-surface/60' : 'bg-surface';
  const textColor = isRead ? 'opacity-70' : '';
  const timeColor = isRead ? 'text-outline' : 'text-primary';
  const iconColor = isRead ? 'opacity-80' : '';

  return (
    <div className={`${bgColor} rounded-xl border border-border p-md flex gap-4 transition-colors duration-200`}>
      <div className={`w-12 h-12 ${priority === 'Penting' ? 'bg-secondary-container' : priority === 'Error' ? 'bg-error-tint' : 'bg-surface-container'} rounded-[14px] flex items-center justify-center shrink-0 ${iconColor}`}>
        <span className={`material-symbols-outlined ${priority === 'Penting' ? 'text-primary' : priority === 'Error' ? 'text-error-text' : 'text-on-secondary-fixed-variant'}`}>{icon}</span>
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className={`font-bold ${isRead ? 'font-semibold' : ''} text-on-surface leading-tight ${textColor}`}>{title}</h3>
          <span className={`text-[11px] ${timeColor} font-medium`}>{time}</span>
        </div>
        <p className={`font-body-base text-body-base text-on-surface-variant ${textColor}`}>{message}</p>
        {priority && (
          <div className="mt-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-[10px] uppercase tracking-wider text-primary font-bold">{priority}</span>
          </div>
        )}
      </div>
    </div>
  );
}
