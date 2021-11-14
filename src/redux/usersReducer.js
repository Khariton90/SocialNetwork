const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SHOW_MORE = 'SHOW_MORE';
const IS_FETCHING = 'IS_FETCHING';
let initialState = {
    users: [

    ],
    limit: 4,
    limitSize: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
        return {
            ...state,
            users:[...state.users].map(u => {
                if(u.id === action.id){
                    u.follow = true
                }
                return u
            }),
        }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users].map(u =>{
                    if(u.id === action.id){
                        u.follow = false
                    }
                    return u;
                })
            }
        case SET_USERS: {
             return {...state, users: [...action.users] } 
            }
        case SHOW_MORE: {
            return {...state, limit: action.limit}
        }
        case IS_FETCHING: {
            return {...state, isFetching: action.load}
        }
        default: 
        return state
    }
}
export const follow = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
};
export const unfollow = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}
export const setusers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const showmore = (limit) => {
    return {
        type: SHOW_MORE,
        limit
    }
}
export const isfetching = (load) => {
    return{
        type: IS_FETCHING,
        load
    }
}
export default usersReducer;