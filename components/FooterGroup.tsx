import React, { useState } from 'react';

export default function FooterGroup({ title, items }) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="footer-group">
        <input
          type="checkbox"
          checked={checked}
          className="visibility-hidden"
        />
        <label htmlFor="footer-group-2">
          <h3 onClick={() => setChecked(!checked)}>{title}</h3>
        </label>
        <ul className="footer-list">
          {items.map(({ label, link }, i) => (
            <li className="footer-item" key={i}>
              <a href={link} className="link link-secondary">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

{
  /* <li className="footer-item">
                <a href="" className="link link-secondary">
                assassa
                </a>
            </li> */
}
