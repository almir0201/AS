import React from 'react';

const Input = React.forwardRef((props, ref) => (
  <input
    ref={ref}
    type="text"
    {...props}
    className={`${props.className} Input`}
  />
));

export default Input;
