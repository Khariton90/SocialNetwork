import style from './Header.module.scss'
const Header = (props) => {
    return (
        <header className={style.header}>
            <ul className={style.menu}>
                <li><a href=" ">Home</a></li>
                <li><a href=" ">About</a></li>
                <li><a href=" ">Options</a></li>
                <li><a href=" ">Friends</a></li>
            </ul>
        </header>
    )
}

export default Header;