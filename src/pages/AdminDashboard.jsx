import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStats } from '../api/admin';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-margin pt-lg space-y-lg max-w-md mx-auto">
      <h1 className="font-heading-lg text-heading-lg text-tx-primary">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="bento-card p-md">
          <h2 className="font-heading-md text-heading-md text-tx-primary">Total Users</h2>
          <p className="font-display-lg text-display-lg text-primary">{stats.totalUsers}</p>
        </div>
        <div className="bento-card p-md">
          <h2 className="font-heading-md text-heading-md text-tx-primary">Active Projects</h2>
          <p className="font-display-lg text-display-lg text-primary">{stats.activeProjects}</p>
        </div>
        <div className="bento-card p-md">
          <h2 className="font-heading-md text-heading-md text-tx-primary">Completed Tasks</h2>
          <p className="font-display-lg text-display-lg text-primary">{stats.completedTasks}</p>
        </div>
        <div className="bento-card p-md">
          <h2 className="font-heading-md text-heading-md text-tx-primary">Pending Approvals</h2>
          <p className="font-display-lg text-display-lg text-primary">{stats.pendingApprovals}</p>
        </div>
      </div>
    </div>
  );
}
