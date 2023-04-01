import axios from "axios";
import * as types from "./actionTypes";

const getData = () => (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST });
    return axios.get(`https://json-server-kappa-five.vercel.app/Calculator`)
        .then((res) => {
            dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data });
            console.log(res.data);
        })
        .then((err) => {
            dispatch({ type: types.GET_DATA_FAILURE, payload: err });
        })
};

const addNewData = (payload) => (dispatch) => {
    dispatch({ type: types.ADD_NEW_DATA_REQUEST });
    return axios.post(`https://json-server-kappa-five.vercel.app/Calculator`, payload)
        .then((res) => {
            dispatch({ type: types.ADD_NEW_DATA_SUCCESS, payload: res.data });
        })
        .then((err) => {
            dispatch({ type: types.ADD_NEW_DATA_FAILURE, payload: err });
        })
};

const updateData = (id, payload) => (dispatch) => {
    dispatch({ type: types.UPDATE_DATA_REQUEST });
    return axios.patch(`https://json-server-kappa-five.vercel.app/Calculator/${id}`, payload)
        .then((res) => {
            dispatch({ type: types.UPDATE_DATA_SUCCESS, payload: res.data });
            console.log("updated data: ", payload);
        })
        .then((err) => {
            dispatch({ type: types.UPDATE_DATA_FAILURE, payload: err });
        })
};


const deleteData = (id) => (dispatch) => {
    dispatch({ type: types.DELETE_REQUEST });
    return axios.delete(`https://json-server-kappa-five.vercel.app/Calculator/${id}`)
        .then((res) => {
            dispatch({ type: types.DELETE_SUCCESS, payload: res.data });
            console.log("deleted data: ", res.data);
        })
        .then((err) => {
            dispatch({ type: types.DELETE_FAILURE, payload: err });
        })
};


export { getData, addNewData, updateData, deleteData };