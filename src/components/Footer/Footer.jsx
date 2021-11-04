import style from './Footer.module.scss'
const Footer = (props) => {
    return(
        <footer className={style.footer}>
            <ul>
                <li><a href=" ">Vkontakte</a></li>
                <li><a href=" ">Instagram</a></li>
                <li><a href=" ">FaceBook</a></li>
                <li><a href=" ">LinkedIn</a></li>
            </ul>
        </footer>
    )
}

export default Footer;