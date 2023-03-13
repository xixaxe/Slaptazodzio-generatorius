import './App.css';
import React, { useState } from 'react';


function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState(true);

  const generatePassword = () => {
    let possible = "";
    if (includeNumbers) {
      possible += "0123456789";
    }
    if (includeUpperCase) {
      possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLowerCase) {
      possible += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeSpecialCharacters) {
      possible += "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
    }
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    setPassword(generatedPassword);
  }
  const resetForm = () => {
    setPassword("");
    setLength(8);
    setIncludeNumbers(true);
    setIncludeUpperCase(true);
    setIncludeLowerCase(true);
    setIncludeSpecialCharacters(true);
}

  return (
    <div className="container">
    <div className="password-generator">
      
      <h1>Generate a Strong Password!</h1>
      <div className="form-group">
        <label htmlFor="password"></label>
        <input
          type="text"
          value={password}
          //className="form-control"
        />
        
        <button onClick={resetForm} className="btn btn-danger">
        Reset
      </button>
      </div>
      
      <button onClick={() => generatePassword(length)} className="btn btn-primary">
        GENERATE RANDOM PASSWORD
      </button>

      <div className="form-group">
        <label htmlFor="length">Password Length</label>
        <input
          type="number"
          min="8"
          max="50"
          value={length}
          onChange={e => setLength(e.target.value)}
          //className="form-control"
        />
      </div>
      
      <div className="form-check">
      <label>
  <input className="form-check-input"
    type="checkbox"
    checked={includeNumbers}
    onChange={() => setIncludeNumbers(!includeNumbers)}
  />

  Include Numbers
</label>
      <label>
  <input className="form-check-input"
    type="checkbox"
    checked={includeUpperCase}
    onChange={() => setIncludeUpperCase(!includeUpperCase)}
  />
  
  Include Upercase Letters
</label>
      <label>
  <input className="form-check-input"
    type="checkbox"
    checked={includeLowerCase}
    onChange={() => setIncludeLowerCase(!includeLowerCase)}
  />
 
  Include Lowercase Letters
</label>
<label>
<input className="form-check-input"
type="checkbox"
checked={includeSpecialCharacters}
onChange={() => setIncludeSpecialCharacters(!includeSpecialCharacters)}
/>

Include Special Characters
</label>
      </div>
    </div>
    </div>
  );
}

export default PasswordGenerator;
