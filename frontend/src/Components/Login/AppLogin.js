import React, { useRef } from 'react';
import './AppLogin.css';
import data from '../../AdminData/AdminData';

import { useHistory } from 'react-router-dom';

function AppLogin({ authState, setAuthState, username, setUsername }) {
  let history = useHistory();
  const nameForm = useRef(null);

  const handleClickEvent = (props) => {
    console.log(data);
    const form = nameForm.current;
    const userName = form['username'].value;
    const password = form['password'].value;
    data.map((item) => {
      if (item.username === userName && item.password === password) {
        setAuthState(true);
        setUsername(item.username);
        history.push('/trainingdocuments');
        var i = document.getElementById('errormsg');
        i.innerText = 'SuccessFully Logged';
        i.style.color = 'red';
        console.log('success');
        console.log(props);
      } else {
        i = document.getElementById('errormsg');
        i.innerText = 'Incorrect username or password';
        i.style.color = 'red';
      }
      return '';
    });
    console.log(userName, password);
  };
  return (
    <div id='loginform'>
      <h2 id='headerTitle'>Login</h2>
      <div className='form'>
        <form ref={nameForm}>
          <p id='errormsg'></p>
          <div className='row'>
            <label>User ID</label>
            <input type='text' placeholder='User ID' name={'username'} />
          </div>
          <div className='row'>
            <label>Password</label>
            <input name={'password'} type='password' placeholder='Password' />
          </div>
        </form>
        <div id='button' className='row'>
          <button className='submitbutton' onClick={handleClickEvent}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppLogin;
