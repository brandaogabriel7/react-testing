import React from 'react';
import { render, screen } from '@testing-library/react';

import Char from '../Char';

describe('char component should', () => {
    it('render correctly', () => {
        render(<Char />);
    });
})