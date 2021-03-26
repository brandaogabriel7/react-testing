import { render, screen } from '@testing-library/react';

import UserInput from '../UserInput';

describe('user input should', () => {
    beforeEach(() => render(<UserInput />));

    it('render correctly', () => {
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('match snapshot', () => {
        expect(screen.getByRole('textbox')).toMatchSnapshot();
    });
});