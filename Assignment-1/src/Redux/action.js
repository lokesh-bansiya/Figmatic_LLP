import axios from "axios";
import * as types from "./actionTypes";

const getData = (page) => (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST });
    return axios.get(`https://figmatic-llp-v29x.vercel.app/calculator?page=${page}&limit=5`)
        .then((res) => {
            dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.GET_DATA_FAILURE, payload: err });
        })
};

const addNewData = (payload) => (dispatch) => {
    dispatch({ type: types.ADD_NEW_DATA_REQUEST });
    return axios.post(`https://figmatic-llp-v29x.vercel.app/calculator/add`, payload)
        .then((res) => {
            dispatch({ type: types.ADD_NEW_DATA_SUCCESS, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.ADD_NEW_DATA_FAILURE, payload: err });
        })
};

const updateData = (id, payload) => (dispatch) => {
    dispatch({ type: types.UPDATE_DATA_REQUEST });
    return axios.patch(`https://figmatic-llp-v29x.vercel.app/calculator/update/${id}`, payload)
        .then((res) => {
            dispatch({ type: types.UPDATE_DATA_SUCCESS, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.UPDATE_DATA_FAILURE, payload: err });
        })
};


const deleteData = (id) => (dispatch) => {
    dispatch({ type: types.DELETE_REQUEST });
    return axios.delete(`https://figmatic-llp-v29x.vercel.app/calculator/delete/${id}`)
        .then((res) => {
            dispatch({ type: types.DELETE_SUCCESS, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.DELETE_FAILURE, payload: err });
        })
};


export { getData, addNewData, updateData, deleteData };