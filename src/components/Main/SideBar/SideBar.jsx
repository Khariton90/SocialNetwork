import style from './SideBar.module.scss';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
    return (
        <aside className={style.sidebar}>
            <ul className={style.menu}>
                <li><NavLink to="/" exact activeClassName={style.active}>Moя Страница</NavLink></li>
                <li><NavLink to="/messages" activeClassName={style.active}>Мои Сообщения</NavLink></li>
                <li><NavLink to="/friends" activeClassName={style.active}>Мои друзья</NavLink></li>
                <li><NavLink to="settings" activeClassName={style.active}>Мои настройки</NavLink></li>
            </ul>
        </aside>
    )
}

export default SideBar;