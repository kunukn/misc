import util from './util';

describe('util', () => {
    it('to be defined', () => {
        expect(util).toBeDefined();
    });

    it('whoami', () => {
        expect(util.whoami()).toBe('i am util');
    });
});