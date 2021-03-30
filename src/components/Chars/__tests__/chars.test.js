import { render, screen } from '@testing-library/react';
import React from 'react';

import Chars from '../Chars';

const renderListWithCharsTestCases = [
    ['aa'],
    ['batata'],
    ['this is a text'],
    ['this is another text'],
    ['email7@test.com'],
];

describe('chars should', () => {
    it('render correctly', () => {
        render(<Chars />);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it.each(renderListWithCharsTestCases)('render a list with the chars in \'%s\'', (text) => {
        render(<Chars text={text} />);

        const chars = screen.getAllByRole('listitem');

        expect(chars.length).toBe(text.length);

        text.split('').forEach((char, index) => {
            expect(chars[index].textContent).toBe(char);
        });
    });
});