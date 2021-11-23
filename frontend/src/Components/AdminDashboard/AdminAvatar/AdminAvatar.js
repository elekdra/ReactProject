import React from 'react';
import './AdminAvatar.css';
import flag from '../../../assets/flag.png';
import user from '../../../assets/user.png';
import 'react-dropdown/style.css';

function AdminAvatar(props) {
  return (
    <div className='navbar'>
      <img className='logo' src={flag} alt=' logo' />

      <div className='navbar-avatar'>
        <div style={{ paddingTop: '1em' }}>
          <label className='avatar-user'>{props.username}</label>
        </div>
        {/* <select id="company" name="company">
                    <option value="A">HPCL</option>
                    <option value="A">IOCL</option>
                    <option value="A">HPCL</option>
                    <option value="A">AUDI</option>
        </select> */}
        <div style={{ paddingTop: '0.4em' }}>
          <img className='avatar' src={user} alt='avatar' />
        </div>
        {/* <div className='dropdown'>
          <button className='dropbtn'>&#8964;</button>
          <div className='dropdropdown-content'>
            <a href='/'>Logout</a>
          </div>
        </div> */}
        <div
          className='dropdropdown-content'
          style={{ marginTop: '1em', marginLeft: '1.3em' }}
        >
          <a href='/'>Logout</a>
        </div>
        {/* <div style={{paddingTop:"0.9em"}} >
        <Link to='/' className='logout'>
          logout
        </Link>
        </div> */}
      </div>
    </div>
  );
}

export default AdminAvatar;
