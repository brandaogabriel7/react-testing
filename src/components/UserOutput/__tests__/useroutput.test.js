import { render, screen } from '@testing-library/react';

import UserOutput from '../UserOutput';

describe('user output should', () => {
    it('render correctly', () => {
        const username = 'myUsername123';
        render(<UserOutput username={username} />);
        expect(screen.getByText(`Username: ${username}`)).toBeInTheDocument();
        expect(screen.getByText('I hope I\'ll be overwritten!')).toBeInTheDocument();
    });

    it('match snapshot 1', () => {
        const username = 'brandsons';
        const { container } = render(<UserOutput username={username} />);
        expect(container).toMatchSnapshot();
    });

    it('match snapshot 2', () => {
        const username = 'randonUsername';
        const { container } = render(<UserOutput username={username} />);
        expect(container).toMatchSnapshot();
    });
});