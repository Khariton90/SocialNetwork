import style from './UsersPage.module.scss';
import male from './../../../assets/img/maleUser.jpg';
import female from './../../../assets/img/femaleUser.jpg';
import React from 'react';
import axios from 'axios';
class UsersPage extends React.Component{

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users?&_limit=6`).then(response => {
            this.props.setusers(response.data)
        })
    }
    render() {

        return (
            <div>
                {
                    this.props.users.map(el => <div key={el.id} className={style.users}>
                <div className={style.userPhoto}>{el.gender === 'male' ? <img src={male} alt={el.gender}/>: <img src={female} alt={el.gender}/>}</div>
                    <div className={style.userName}>{el.name}</div>
                 <div> {el.company.catchPhrase} </div>
                    <div>{el.follow 
                    ? <button onClick={() => {this.props.unfollow(el.id)}} className={style.follow}>Подписаться</button> 
                    : <button onClick={() => {this.props.follow(el.id)}} className={style.unfollow}>Удалить из друзей</button>}
                </div>
                </div>)
                }

            </div>
        )
    }
}

export default UsersPage;