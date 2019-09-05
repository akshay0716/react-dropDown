import { SET_ERRORS, CLEAR_ERRORS } from "../types";

export const setErrors = ( errors ) => async dispatch => {
    try{
        if( errors.response ){
            if( errors.response.status === 500 ){
                dispatch({
                    type : SET_ERRORS,
                    payload : { message : "Internal Server Errors!" }
                });
                window.alert("It seems to be an error with the server!");
            } else {
                dispatch({
                    type: SET_ERRORS,
                    payload : err.response.data
                });
            }
        } else {
            dispatch({
                type : SET_ERRORS,
                payload : errors
            });
        }
    } catch ( err ){
        console.log("There is an Error while setting up Error", err );
    }
}

export const clear_all_errors = () => async dispatch => {
    try{
        dispatch({
            type : CLEAR_ERRORS
        });
    } catch ( err ){
        console.log( err );
    }
}