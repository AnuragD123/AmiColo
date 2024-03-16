import React from 'react';

function CopyrightFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center bg-black text-white text-sm py-4">
      <p>&copy; {currentYear} Amicolo | All Rights Reserved</p>
    </footer>
  );
}

export default CopyrightFooter;
