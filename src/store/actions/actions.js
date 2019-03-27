import {ADD_TEXT_JSON, DELETE_TEXT_JSON, AUTH_CHECK, AUTH_OK, AUTH_DENEGATE} from './actionTypes'

export const addText = (add_Text) => {
    return {
        type: ADD_TEXT_JSON,
        textToAdd: add_Text
    }
}

export const deleteText = (delete_Text) => {
    return {
        type: DELETE_TEXT_JSON,
        textToDelete: delete_Text
    }
}

export const authCheck = () => {
    return {
        type: AUTH_CHECK
    }
}

export const authValidated = () => {
    return {
        type: AUTH_OK
    }
}

export const authDenegated = () => {
    return {
        type: AUTH_DENEGATE
    }
}