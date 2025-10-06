import React from 'react';

function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="inline-block px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full transition-color text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}

export default Button;
