const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SHOW':
            return {
                ...state,
                show: action.payload
            };
        case 'SET_MAX':
            return {
                ...state,
                max: action.payload,
            };

        case 'SET_AVA_SIZE':
            return {
                ...state,
                avaSize: action.payload,
            };
        default:
            return state;
    }
};

export default Reducer;