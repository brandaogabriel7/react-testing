import { render, screen } from '@testing-library/react';

import UserOutput from '../UserOutput';

const renderUsernameCorrectlyTestCases = [
    ['myUsername123', 'Username: myUsername123', 'I hope I\'ll be overwritten!'],
    ['brandsons', 'Username: brandsons', 'I hope I\'ll be overwritten!'],
    ['theBest001', 'Username: theBest001', 'I hope I\'ll be overwritten!']
];

const matchSnapshotTestCases = [
    ['randomUsername123'],
    ['anotherUsename']
];

describe('user output should', () => {
    it.each(renderUsernameCorrectlyTestCases)('render \'%s\' username correctly', (username, firstP, secondP) => {
        render(<UserOutput username={username} />);
        expect(screen.getByText(firstP)).toBeInTheDocument();
        expect(screen.getByText(secondP)).toBeInTheDocument();
    });

    it.each(matchSnapshotTestCases)('match snapshot for \'%s\' username', (username) => {
        const { container } = render(<UserOutput username={username} />);
        expect(container).toMatchSnapshot();
    });
});