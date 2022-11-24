import Reducer from '../reducer';


describe('Reducer function test', () => {
    test('SET_SHOW action is disptched', () => {
        const state = {
            show: '0'
        }

        const action = {
            type: "SET_SHOW",
            payload: '1'
        };

        const updatedState = Reducer(state, action);
        expect(updatedState).toEqual({ show: '1' });
    });

    test('SET_MAX action is disptched', () => {
        const state = {
            max: 5
        }

        const action = {
            type: "SET_MAX",
            payload: 2
        };

        const updatedState = Reducer(state, action);
        expect(updatedState).toEqual({ max: 2 });
    });

    test('SET_AVA_SIZE action is disptched', () => {
        const state = {
            avaSize: 'lg'
        }

        const action = {
            type: "SET_AVA_SIZE",
            payload: 'xs'
        };

        const updatedState = Reducer(state, action);
        expect(updatedState).toEqual({ avaSize: 'xs' });
    });


});