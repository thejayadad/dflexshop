import React from 'react';

const FormInput = ({ type, placeholder, onChange, className }) => {
  return <input type={type} placeholder={placeholder} onChange={onChange} className={className} />;
};

export default FormInput;

