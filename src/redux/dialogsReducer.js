const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
    people: [
        {id:1, name:"Olya"},
        {id:2, name:"Olya"},
        {id:3, name:"Olya"},
        {id:4, name:"Olya"},
        {id:5, name:"Olya"}
      ],
      dialogs: [
        {id:1, dialog: 'Hello Man'},
        {id:2, dialog: 'How are you'},
        {id:3, dialog: 'I,m John'},
        {id:4, dialog: 'Nice'},
        {id:5, dialog: 'What?'}
      ],
      newSendMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
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