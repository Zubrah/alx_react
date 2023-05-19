import { getFullYear, getFooterCopy, getLatestNotification } from './utils';



// Test for getFullYear
describe('getFullYear', () => {
    it('returns the correct year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
});


// Test for get Footer for Indexes
describe('getFooterCopy', () => {
    it('returns "ALX SWE" when isIndex is true', () => {
        expect(getFooterCopy(true)).toBe('ALX SWE');
    });

    it('returns "ALX Main dashboard" when isIndex is false', () => {
        expect(getFooterCopy(false)).toBe('ALX Main dashboard');
    });
});


// Test for getLatestNotification
describe('getLatestNotification', () => {
    it('returns the correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
