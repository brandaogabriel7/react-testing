import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Button from '../Button';

describe('button should', () => {
    it('render correctly', () => {
        render(<Button label="click me please" />);
        expect(screen.getByRole('button', { name: /click me please/i })).toBeInTheDocument();
    });

    it('render correctly', () => {
        render(<Button label="whaaat" />);
        expect(screen.getByRole('button', { name: /whaaat/i })).toBeInTheDocument();
    });

    it('match snapshot 1', () => {
        render(<Button label="save" />);
        expect(screen.getByRole('button', { name: /save/i })).toMatchSnapshot();
    });

    it('match snapshot 2', () => {
        render(<Button label="submit" />);
        expect(screen.getByRole('button', { name: /submit/i })).toMatchSnapshot();
    });
});