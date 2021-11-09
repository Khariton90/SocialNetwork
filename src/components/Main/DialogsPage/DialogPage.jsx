import style from './DialogPage.module.scss';
import Dialog from './Dialog/Dialog';
import People from './Dialog/People';
import {ChangeNewMessageCreator, SendNewMessageCreator} from '../../../redux/dialogsReducer';
import StoreContext from '../../../StoreContext';
const DialogPage = () => {

    return <StoreContext.Consumer>
        { store => {
                let state = store.getState().dialogsPage;
                let dialogs = state.dialogs;
                let people = state.people;
                let newSendMessage = state.newSendMessage;
            
                let changeMessage = (e) => {
                    let body = e.target.value;
                    return store.dispatch(ChangeNewMessageCreator(body))
                }
                let sendNewMessage = () => {
                   store.dispatch(SendNewMessageCreator());
                }
                let dialog = dialogs.map(el => <Dialog key={el.id} dialog={el.dialog}/>);
                let person = people.map(el => <People key={el.id} person={el} />)
            return(
                <div className={style.dialogPage}>
                    <div className={style.people}>
                        {person}
                    </div>
                    <div className={style.dialog}>
                        {dialog}
                        <div>
                        <div>
                            <textarea value={newSendMessage} onChange={ changeMessage }></textarea>
                        </div>
                        <div><button onClick={ sendNewMessage }>Send</button></div>
                    </div>
                    </div>
        
                </div>
            )
        }

        }
    </StoreContext.Consumer>
    
}

export default DialogPage;