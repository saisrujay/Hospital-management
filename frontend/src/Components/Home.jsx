import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Register() {
  const navigate = useNavigate();

  const fun1 = async () => {
    navigate('/login');
  };

  const fun2 = async () => {
    navigate('/register');
  };
  return (

    <div id="card" >
      <div id="card-content">
        <div id="card-title">
          <h2>HOME</h2>
          <form className="form">
            <label htmlFor="user-email" style={{ paddingTop: '8px', textAlign: 'center' }}>
              &nbsp;Existing User
            </label>
            <input id="submit-btn" type="submit" value="LOGIN" onClick={fun1} />
            <label htmlFor="user-email" style={{ paddingTop: '15px', textAlign: 'center' }}>
              &nbsp;New User
            </label>
            <input id="submit-btn" type="submit" value="REGISTER" onClick={fun2} />
          </form>
        </div>
      </div>
    </div>
  );
}
