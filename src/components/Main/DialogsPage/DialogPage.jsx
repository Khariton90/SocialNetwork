import style from './DialogPage.module.scss';
import Dialog from './Dialog/Dialog';
import People from './Dialog/People'
const DialogPage = (props) => {
                let dialog = props.dialogs.map(el => <Dialog key={el.id} dialog={el.dialog}/>);
                let person = props.people.map(el => <People key={el.id} person={el} />)
                let changeMessage = (e) =>{
                    let body = e.target.value;
                    props.changeMessage(body);
                }
                let sendNewMessage = () => {
                    props.sendNewMessage();
                }
            return(
                <div className={style.dialogPage}>
                    <div className={style.people}>
                        {person}
                    </div>
                    <div className={style.dialog}>
                        {dialog}
                        <div>
                        <div>
                            <textarea value={props.newSendMessage} onChange={ changeMessage }></textarea>
                        </div>
                        <div><button onClick={ sendNewMessage }>Send</button></div>
                    </div>
                    </div>
        
                </div>
            )
    
}

export default DialogPage;