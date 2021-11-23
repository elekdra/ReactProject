import React from 'react';
import AdminAvatar from './AdminAvatar/AdminAvatar';
import AdminDashboardButtons from './AdminDashboardButtons/AdminDashboardButtons';
import AdminHeader from './AdminHeader/AdminHeader';
import './AdminDashboard.css';
function AdminDashboard(props) {
  console.log(props);
  return (
    <div className='admin-dashboard'>
      <div className='admin-dashboard-avatar'>
        <AdminAvatar username={props.username} />
      </div>
      <div>
        <AdminHeader style={{ marginTop: '6rem', padding: '2rem',borderTopColor:"rgb(230, 230, 230)" }} title='Admin Dashboard' />
      </div>
      <div>
        <AdminDashboardButtons />
      </div>
    </div>
  );
}

export default AdminDashboard;
