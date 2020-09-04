import { Dictionary } from '../../main/src';

describe('bar', () => {
    it('sync function returns true', () => {
        const dict = new Dictionary<string>();
        expect(dict).toBeDefined();
    });

    it('async function returns true',  () => {
        expect({}).toBeDefined();
    });
});