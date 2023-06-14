import { rootReducer } from './rootReducer';

describe('Root Reducer', () => {
    test('should return the initial state', () => {
        const initialState = {
            courses: new Map(),
            notifications: new Map(),
            ui: new Map(),
        };

        const state = rootReducer(undefined, { type: '@@INIT' });

        expect(state).toEqual(initialState);
    });
});
