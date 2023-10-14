import React, { useState } from 'react';

const DateOfBirthInput = ({ onDateChange }) => {
  const [dob, setDob] = useState('');

  const handleDateChange = (e) => {
    setDob(e.target.value);
  };

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dobDate.getFullYear();
    onDateChange(age);
  };

  return (
    <div>
      <label>Enter your Date of Birth:</label>
      <br/>
      <input type="date" value={dob} onChange={handleDateChange} />
      <br/>
      <button onClick={calculateAge}>Calculate Age</button>
    </div>
  );
};

export default DateOfBirthInput;
