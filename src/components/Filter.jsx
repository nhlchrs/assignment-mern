import React from 'react';

const FILTERS = ['all', 'completed', 'pending'];

export default function Filter({ current, onChange }) {
  return (
    <div className="filter">
      {FILTERS.map((type) => (
        <button
          key={type}
          className={current === type ? 'active' : ''}
          onClick={() => onChange(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}
