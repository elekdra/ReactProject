import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboardButtonStyle.css';

function AdminDashBoardButtonStyle(props) {
  console.log(props.item.component_class);

  return (
    <div className='AdminDashboardButton'>
      <div className='button-body'>
        <div style={{ paddingTop: '.8em' }}>
          <img className='icon' src={props.item.link_icon} alt='logo' />
        </div>
        <div style={{ paddingTop: '1em' }}>
          <Link to={props.item.component_class} className='service-title'>
            {props.item.link_title}
          </Link>
        </div>
        <div style={{ padding: '.9em', fontSize: '1.3em', color: 'grey' }}>
          <a href={props.item.component_class} className='service-title-arrow'>
            &#62;
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoardButtonStyle;
