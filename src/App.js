import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [userDetail, setUserDetail] = useState({
    fname: '',
    email: '',
    number: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == 'number' && value !== '' && !Number(value)) {
      alert('pleas add number');
      return;
    }
    setUserDetail((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('huuu', userDetail);
  };
  return (
    <div>
      <h1>Practice react form !</h1>
      <form>
        <label>
          name
          <input type="text" name="fname" onChange={handleChange} />
        </label>
        <label>
          email
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <label>
          Number
          <input type="text" name="number" onChange={handleChange} />
        </label>
        <label>
          gender
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />{' '}
          male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />{' '}
          female
        </label>
        <button onClick={handleSubmit}>submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <td> name </td>
            <td> email </td>
            <td> number </td>
            <td> gender </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {userDetail.fname} </td>
            <td>{userDetail.email} </td>
            <td> {userDetail.number} </td>
            <td>{userDetail.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
