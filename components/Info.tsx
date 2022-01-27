import React from 'react';

export default function Info({ title, body, length }) {
  return (
    <div className="info-container">
      <div>
        <span className="spacer space-top-small"></span>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="geometricPrecision"
          style={{ color: 'var(--primary)' }}
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="var(--fill-color)"
            stroke="var(--fill-color)"
          ></path>
          <path d="M8 11.8571L10.5 14.3572L15.8572 9"></path>
        </svg>
      </div>
      <div
        className="content"
        style={{
          '--flex': '0 0 auto',
          '--justify-content': 'flex-start',
          '--align-items': 'stretch',
          marginLeft: 12,
        }}
      >
        <h3 className="info-title">{title}</h3>
        <p
          className="info-body"
          style={length ? { '--content-length': length + 'ch' } : undefined}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
