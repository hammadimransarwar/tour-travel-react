import React from 'react';
function Navbar() {
  return (
    <div className="navbar">
        <img src="/logo.png" alt="Logo" style={{ height: '70px' }} />
        <button>Home</button>
        <button>Services</button>
        <button>About</button>
        <button>Contactus</button>
    </div>
  );
}

export default Navbar;