import { render, renderHook } from '@testing-library/react';
import React from 'react';
import Store, { Context, useFeature } from '..';
import renderer from 'react-test-renderer';

const state = {
    show: '0',
    max: 5,
    avaSize: "lg"
};
const dispatch = jest.fn();

const wrapper = ({ children }) => (
    <Context.Provider value={{ state, dispatch }}>
        {children}
    </Context.Provider>
);

const mockUseContext = jest.fn().mockImplementation(() => ({ state, dispatch }));

React.useContext = mockUseContext;

describe('test', () => {
    test('state and dispatch function', () => {
        render(<Store />)
        const { result } = renderHook(() => useFeature(), { wrapper });

        expect(result.current.state.show).toBe('0');
        expect(result.current.state.max).toBe(5);
        expect(result.current.state.avaSize).toBe('lg');

        expect(result.current).toEqual({ state, dispatch });

        const tree = renderer.create(<Store />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
