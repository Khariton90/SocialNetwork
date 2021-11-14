import { connect } from "react-redux";
import UsersPage from './UsersPage';
import {follow, unfollow, setusers} from '../../../redux/usersReducer';
let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        limit: state.usersPage.limit
    }
}

// let MapDispatchToProps = (dispatch) => {
//     return {
//         followContainer(id){
//             dispatch(FollowActionCreator(id))
//         },
//         unFollowContainer(id){
//             dispatch(UnFollowActionCreator(id))
//         },
//         setUsersContainer(users){
//             dispatch(SetUsersActionCreator(users))
//         }
//     }
// }
//Рефакторинг MapDispatchToProps
const UsersPageContainer = connect(MapStateToProps, {
    follow,
    unfollow,
    setusers
})(UsersPage);

export default UsersPageContainer;