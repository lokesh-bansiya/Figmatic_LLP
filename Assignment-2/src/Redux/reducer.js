import * as types from "./actionTypes";

const prevState = {
    dashboardData: [],
    singleItem: [],
    totalCount: 0,
    isLoading: false,
    isError: false,
};

const reducer = (state = prevState, action) => {

    const { type, payload } = action;

    switch (type) {
        case types.GET_DASHBOARD_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_DASHBOARD_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dashboardData: payload.products,
                totalCount: payload.count,
            };
        case types.GET_DASHBOARD_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case types.GET_DASHBOARD_BYID_REQUEST:
            return {
                ...state,
            };
        case types.GET_DASHBOARD_BYID_SUCCESS:
            return {
                ...state,
                singleItem: payload,
            };
        case types.GET_DASHBOARD_BYID_ERROR:
            return {
                ...state,
            };
        default:
            return state;
    };
};

export { reducer };