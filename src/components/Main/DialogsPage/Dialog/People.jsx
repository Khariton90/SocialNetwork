import style from './People.module.scss';
import {NavLink} from 'react-router-dom';

const People = (props) => {
    let person = props.person.name;
    let path = props.person.id;
    return (
        <div className={style.person}>
        <NavLink to={'/messages/' + path} className={style.people}>
            <span className={style.peopleLogo}><img src="https://www.bettsport.net/api/v1/customerMedia/male/displayDefault" alt="" /></span><span className={style.name}>{person}</span>
        </NavLink>
        </div>
    )
};

export default People