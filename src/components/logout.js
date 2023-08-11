import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the access token from local storage
    localStorage.removeItem('access_token');

    // Use navigate to go to a specific route after logout
    navigate('/'); // For example, navigate to the login page
  };

  return (
    <button onClick={handleLogout} className="button1">
      Logout
    </button>
  );
};

export default LogoutButton;
