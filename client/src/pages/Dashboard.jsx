import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';

const Dashboard = () => {
  const { search } = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* SIDEBAR */}
        <DashSidebar />
      </div>
      {/* PROFILE */}
      {tab === 'profile' && <DashProfile />}
      {/* POSTS */}
      {tab === 'posts' && <DashPosts />}
    </div>
  );
};

export default Dashboard;
