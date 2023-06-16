import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

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

      // Redirect to /login
      navigate('/login');
    } catch (error) {
      // Handle registration failure
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    <button>
        <Link to="/">Home</Link>
    </button>
    </div>
  );
};

export default Register;
