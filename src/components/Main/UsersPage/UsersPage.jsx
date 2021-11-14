import style from './UsersPage.module.scss';
import React from 'react';
import * as axios from 'axios'
import { NavLink } from 'react-router-dom';
const UsersPage = ({props}) => {
    let show = () => {
        let load = false
        props.isfetching(load)
        let limit = props.usersPage.users.length + 4;
        props.showmore(limit)
        window.setTimeout(() => {
            axios.get(`https://jsonplaceholder.typicode.com/users?&_limit=${limit}`).then(response => {
                props.setusers(response.data)
                load = true
                props.isfetching(load)
            })
        },400)
    }
    let users = props.usersPage.users.map(user => <div key={user.id}> <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
                 {
                 user.follow 
                 ? <div><button onClick={() => props.unfollow(user.id)} className={style.unfollow}>Отписаться</button></div> 
                 : <div><button onClick={() => props.follow(user.id)} className={style.follow}>Подписаться</button></div> 
                 }
    </div>)
    return (
        <div className={style.usersPage}>
            {users}
            {<div className={style.showMore}><button onClick={() => show()}>Показать еще</button></div>}
        </div>
    )
}

export default UsersPage;