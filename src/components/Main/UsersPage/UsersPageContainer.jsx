import { connect } from "react-redux";
import * as axios from 'axios';
import React from "react";
import UsersPage from './UsersPage';
import {follow, unfollow, setusers, showmore, isfetching} from '../../../redux/usersReducer';
import Preloader from "../../General/Preloader";
import { withRouter } from "react-router";

class UsersPageContainer extends React.Component{
    componentDidMount(){
        window.setTimeout(() => {
            axios.get(`https://jsonplaceholder.typicode.com/users?&_limit=4`).then(response => {
                this.props.setusers(response.data)
            })
            let load = true
            this.props.isfetching(load)
        },200)
    }
    render() {
        if(!this.props.usersPage.isFetching){
            return <Preloader />
        }
        return (
            <UsersPage props={this.props}/>
        )
    }
}



let MapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        isFetching : state.usersPage.isFetching
        // users: state.usersPage.users,
        // limit: state.usersPage.limit,
        // limitSize: state.usersPage.limitSize
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
 let UsersComponentWithRouter = withRouter(UsersPageContainer)
export default connect(MapStateToProps, {
    follow,
    unfollow,
    setusers,
    showmore,
    isfetching
})(UsersComponentWithRouter);
