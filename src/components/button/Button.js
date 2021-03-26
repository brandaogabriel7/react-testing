import React from 'react';
import './button.css';

const Button = ({ label }) => {
    return <button className="button-style">{label}</button>;
};

export default Button;