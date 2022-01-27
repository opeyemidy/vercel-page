import React from 'react';

export default function Button({ children, color, hoverColor }) {
  return (
    <span className="button-wrapper">
      <button
        type="submit"
        className="custom-button"
        style={{
          '--button-custom-bg': color,
          '--button-custom-border': color,
          '--button-custom-hover-bg': hoverColor,
          '--button-custom-hover-border': hoverColor,
        }}
      >
        {children}
      </button>
    </span>
  );
}
