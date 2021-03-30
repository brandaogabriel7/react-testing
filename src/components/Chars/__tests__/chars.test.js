import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    it('pass the char clicked handler to each char', () => {
        const text = "aaa";

        const clicked = jest.fn();
        render(<Chars clicked={clicked} text={text} />);

        const chars = screen.getAllByRole('listitem');

        chars.forEach((char, index) => {
            userEvent.click(char);
            expect(clicked).toHaveBeenLastCalledWith(index);
        });

        expect(clicked).toHaveBeenCalledTimes(text.length);
    });
});