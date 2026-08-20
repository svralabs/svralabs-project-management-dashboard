const mockEvents = [
  {
    id: 1,
    title: 'Design Sync - Mob',
    start: new Date(2025, 10, 12, 10, 0),
    end: new Date(2025, 10, 12, 11, 0),
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: new Date(2025, 10, 6, 14, 0),
    end: new Date(2025, 10, 6, 15, 0),
  },
  {
    id: 3,
    title: 'Client Presentation',
    start: new Date(2025, 10, 14, 16, 0),
    end: new Date(2025, 10, 14, 17, 0),
  },
];

const mockStats = {
  totalUsers: 1245,
  activeProjects: 42,
  completedTasks: 876,
  pendingApprovals: 12,
};

export const getEvents = async (start, end) => {
  // In a real app, this would be an API call
  return mockEvents.filter(event =>
    event.start >= start && event.end <= end
  );
};

export const getStats = async () => {
  // In a real app, this would be an API call
  return mockStats;
};
