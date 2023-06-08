import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
    it('should return the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
});

describe('getFooterCopy', () => {
    it('should return "ALX SWE" if isIndex is true', () => {
        const isIndex = true;
        expect(getFooterCopy(isIndex)).toBe('ALX SWE');
    });

    it('should return "ALX Main dashboard" if isIndex is false', () => {
        const isIndex = false;
        expect(getFooterCopy(isIndex)).toBe('ALX Main dashboard');
    });
});

describe('getLatestNotification', () => {
    it('should return the latest notification in the correct format', () => {
        const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toBe(expectedNotification);
    });
});
