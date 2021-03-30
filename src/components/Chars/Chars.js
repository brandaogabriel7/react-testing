import React from 'react';
import './chars.css';

const Chars = ({ text = '', clicked }) => {
    return (
        <ul>
            {text.split('').map((c, index) =>
                <li key={index} className="char-component" onClick={() => clicked(index)}>{c}</li>
            )}
        </ul>
    );
};

export default Chars;