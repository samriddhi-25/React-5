import React, { useState } from 'react';
import './App.css';
import DateOfBirthInput from './components/DateOfBirthInput';
import AgeDisplay from './components/AgeDisplay';

function App() {
  const [age, setAge] = useState(null);

  const handleDateChange = (age) => {
    setAge(age);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <DateOfBirthInput onDateChange={handleDateChange} />
      <AgeDisplay age={age} />
    </div>
  );
}

export default App;
