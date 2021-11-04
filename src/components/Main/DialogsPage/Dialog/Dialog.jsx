import style from './Dialog.module.scss';

const Dialog = (props) => {
    let dialog = props.dialog;
    return(
        <div className={style.dialog}>
            <div>{dialog}</div>
        </div>
    )
}

export default Dialog