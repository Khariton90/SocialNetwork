const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET-USERS';
let initialState = {
    users: [

    ],
    limit: 10
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
        return {
            users:[...state.users].map(u => {
                if(u.id === action.id){
                    u.follow = true
                }
                return u
            }),
        }
        case UNFOLLOW:
            return {
                users: [...state.users].map(u =>{
                    if(u.id === action.id){
                        u.follow = false
                    }
                    return u;
                })
            }
        case SETUSERS: 
            return{
                users: [...action.users]
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
        type: SETUSERS,
        users
    }
}
export default usersReducer;