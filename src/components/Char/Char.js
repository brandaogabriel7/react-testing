import React from 'react';
import './char.css';

const Char = ({ char, clicked }) => {
    return <li className='char-component' onClick={clicked}>{char}</li>;
};

export default Char;