const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type){
        case CHANGE_MESSAGE: 
            state.newSendMessage = action.body;
            return state
        case SEND_MESSAGE:
            let id = state.dialogs.length + 1;
            let dialog = state.newSendMessage;
            state.dialogs.push({id: id, dialog: dialog});
            state.newSendMessage = '';
            return state
        default:
            return state
    }
}

export const ChangeNewMessageCreator = (body) => {
    return {
      type: CHANGE_MESSAGE,
       body: body
     }
  }
  export const SendNewMessageCreator = () => {
   return {
     type: SEND_MESSAGE
    }
 }

export default dialogsReducer;