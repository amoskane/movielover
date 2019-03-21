
import axios from "axios";
import { FETCH_DATA_SUCCESS, FETCH_CHAR_SUCCESS } from "./types";

const apiUrl = 'https://swapi.co/api/films/';
const apiCharUrl = 'https://swapi.co/api/people/';

export function fetchMovieData() {
    return function(dispatch) {
        return axios.get(apiUrl)
            .then(({ data }) => {
                dispatch(setMovieData(data));
            });
    };
}

function setMovieData(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data.results
    };
}

export function fetchChar() {//fetches all chars
    return function(dispatch) {
        return axios.get(apiCharUrl)
            .then(({ data }) => {
                dispatch(setChar(data));
            });
    };
}

function setChar(data) {
    return {
        type: FETCH_CHAR_SUCCESS,
        payload: data
    };
}
