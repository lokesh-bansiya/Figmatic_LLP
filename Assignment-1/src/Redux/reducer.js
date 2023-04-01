import * as types from "./actionTypes";

const prevState = {
    data: [],
    isLoading: false,
    isError: false,
};

const reducer = (state = prevState, action) => {

    const { type, payload } = action;

    switch (type) {
        case types.GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload,
            };
        case types.GET_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    };
};

export { reducer };