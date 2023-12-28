import React from 'react';

export const Checkbox = ({ label, ...props }) => {
  return (
    <label className="font-sanspro font-normal text-base leading-5">
      <input type="checkbox" {...props} />
      {label}
    </label>
  );
};
