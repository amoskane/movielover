
import axios from "axios";
import { FETCH_DATA_SUCCESS } from "./types";

const apiUrl = 'https://swapi.co/api/films/';

export function fetchData() {
    return function(dispatch) {
        return axios.get(apiUrl)
            .then(({ data }) => {
                dispatch(setData(data));
            });
    };
}

function setData(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    };
}
