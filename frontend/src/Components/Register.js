import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name,
        age,
        gender,
      });

      // Handle successful registration
      console.log('Registration successful:', response.data);

      // Show notification box with name and uhid
      toast.success(
        <div>
          <p><b>Registration successful</b></p>
          <p>Name: {name}</p>
          <p>UHID: {response.data.uhid}</p>
          <p><b>Please save UHID</b></p>
        </div>
      );
      // Redirect to /login after a delay
      setTimeout(() => {
        navigate('/login');
      }, 10000);
    } catch (error) {
      // Handle registration failure
      console.error('Registration failed:', error);
    }
  };

  return (
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>REGISTER</h2>
          <form class="form" onSubmit={handleFormSubmit}>
            <label for="user-email" style={{ paddingTop: '13px', textAlign: 'left' }}>
              &nbsp;Name
            </label>
            <input
              type="text"
              id="user-email"
              class="form-content"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div class="form-border"></div>
            <label htmlFor="user-email" style={{ paddingTop: '26px', textAlign: 'left' }}>
              &nbsp;Age
            </label>
            <input
              type="number"
              id="user-email"
              class="form-content"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <div class="form-border"></div>
            <label htmlFor="user-email" style={{ paddingTop: '29px', textAlign: 'left' }}>
              &nbsp;Gender
            </label>
            <select
              id="user-email"
              class="form-content"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <div class="form-border"></div>
            <input id="submit-btn" type="submit" name="submit" value="REGISTER" />
          </form>
          <div style={{ display: 'flex', justifyContent: 'center' }} className='buttons-container'>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};




export default Register;
