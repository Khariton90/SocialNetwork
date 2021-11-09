// import homeReducer from './homeReducer';
// import dialogsReducer from './dialogsReducer';
let store = {
  _state:{
    ProfilePage :{
        posts: [
            {id:1, post: 'Hello man', likeCount: 11, likeActive: false},
            {id:2, post: 'Hello man', likeCount: 11, likeActive: false},
            {id:3, post: 'Hello man', likeCount: 11, likeActive: false}
          ],
          newPost: '',
    },
    DialogsPage: {
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
},
_callSubscriber() {
  console.log('State Changed')
},
getState(){
  return this._state
},
subscribe(observer){
  this._callSubscriber = observer;
},
dispatch(action){
  this._state.ProfilePage = homeReducer(this._state.ProfilePage, action);
  this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);

  this._callSubscriber(this._state);
 }
}



export default store

window.store = store;