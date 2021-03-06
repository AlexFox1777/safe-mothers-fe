import {types} from "../actions/index";

const {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    DELETE_USERS_START,
    DELETE_USERS_SUCCESS,
    DELETE_USERS_FAILURE,
    EDIT_USERS_START,
    EDIT_USERS_SUCCESS,
    EDIT_USERS_FAILURE,
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    ERROR_CLEAN,
} = types;

const initialState = {
    isLoading: false,
    error: "",
    users: [],
};

const settingsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: "",
                users: payload,
            };
        case GET_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case DELETE_USERS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case DELETE_USERS_SUCCESS:
            let deleteAdmin = state.users.filter(item => item.id !== payload);
            return {
                ...state,
                isLoading: false,
                error: "",
                users: deleteAdmin,
            };
        case DELETE_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };

        case EDIT_USERS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case EDIT_USERS_SUCCESS:
            let admins = state.users.map(user => user.id === payload.id ? payload : user);
            return {
                ...state,
                isLoading: false,
                error: "",
                users: admins,
            };
        case EDIT_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case CREATE_USER_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case CREATE_USER_SUCCESS:
            console.log("USER ", payload);
            return {
                ...state,
                isLoading: false,
                users: [...state.users, payload],
                error: "",
            };
        case CREATE_USER_FAILURE:
                console.log("REDUCE", payload)
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case ERROR_CLEAN:
            return {
                ...state,
                error: "",
            };

        default:
            return state;
    }
};


export default settingsReducer;