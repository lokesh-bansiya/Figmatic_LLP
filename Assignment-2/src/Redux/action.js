import axios from "axios";
import * as types from "./actionTypes";

const getDashboardData = (page, value) => (dispatch) => {
    dispatch({ type: types.GET_DASHBOARD_DATA_REQUEST });

    if(value === "LIVE" || value === "DRAFT" || value === "ARCHIVED")
    {
        return axios.get(`https://awesome-products-backend.vercel.app/dashboard?page=${page}&limit=12&status=${value}`)
        .then((res) => {
            dispatch({ type: types.GET_DASHBOARD_DATA_SUCCESS, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.GET_DASHBOARD_DATA_FAILURE, payload: err });
        })
    }
    else if(value === "Marketing" || value === "Sales")
    {
        return axios.get(`https://awesome-products-backend.vercel.app/dashboard??page=${page}&limit=12&tag=${value}`)
        .then((res) => {
            dispatch({ type: types.GET_DASHBOARD_DATA_SUCCESS, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.GET_DASHBOARD_DATA_FAILURE, payload: err });
        })
    }
    else{
        return axios.get(`https://awesome-products-backend.vercel.app/dashboard?page=${page}&limit=12&`)
        .then((res) => {
            dispatch({ type: types.GET_DASHBOARD_DATA_SUCCESS, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.GET_DASHBOARD_DATA_FAILURE, payload: err });
        })
    }
};

const addNewDashboardData = (payload) => (dispatch) => {
    dispatch({ type: types.ADD_NEW_DASHBOARD_DATA_REQUEST });
    return axios.post(`https://awesome-products-backend.vercel.app/dashboard/add`, payload)
        .then((res) => {
            dispatch({ type: types.ADD_NEW_DASHBOARD_DATA_SUCCESS, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.ADD_NEW_DASHBOARD_DATA_FAILURE, payload: err });
        })
};

const updateDashboardData = (id, payload) => (dispatch) => {
    dispatch({ type: types.UPDATE_DASHBOARD_DATA_REQUEST });
    return axios.patch(`https://awesome-products-backend.vercel.app/dashboard/update/${id}`, payload)
        .then((res) => {
            dispatch({ type: types.UPDATE_DASHBOARD_DATA_SUCCESS, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.UPDATE_DASHBOARD_DATA_FAILURE, payload: err });
        })
};


const deleteDashboardData = (id) => (dispatch) => {
    dispatch({ type: types.DELETE_DASHBOARD_REQUEST });
    return axios.delete(`https://awesome-products-backend.vercel.app/dashboard/delete/${id}`)
        .then((res) => {
            dispatch({ type: types.DELETE_DASHBOARD_SUCCESS, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.DELETE_DASHBOARD_FAILURE, payload: err });
        })
};

const getDashboardById = (id) => (dispatch) => {
    dispatch({type: types.GET_DASHBOARD_BYID_REQUEST});
    return axios.get(`https://awesome-products-backend.vercel.app/dashboard/getById/${id}`)
    .then((res) => {
        dispatch({ type: types.GET_DASHBOARD_BYID_SUCCESS, payload: res.data });
    })
    .then((err) => {
        dispatch({ type: types.GET_DASHBOARD_BYID_ERROR, payload: err });
    })
}


export { getDashboardById, getDashboardData, updateDashboardData, deleteDashboardData, addNewDashboardData};