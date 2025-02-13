import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import Login from './Login';
import MarksEntry from './MarksEntry';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="login-container">
          <Login onLoginSuccess={handleLoginSuccess} />
        </div>
      ) : (
        <div className="mark-entry-container">
          <MarksEntry />
        </div>
      )}
    </div>
  );
}

export default App;
