import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
    it('returns the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toEqual(currentYear);
    });
});

describe('getFooterCopy', () => {
    it('returns "ALX SWE" when isIndex is true', () => {
        expect(getFooterCopy(true)).toEqual('ALX SWE');
    });

    it('returns "ALX Main dashboard" when isIndex is false', () => {
        expect(getFooterCopy(false)).toEqual('ALX Main dashboard');
    });
});

describe('getLatestNotification', () => {
    it('returns the latest notification string', () => {
        const notification = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toEqual(notification);
    });
});
