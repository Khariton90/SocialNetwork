const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const ADD_POST = 'ADD-POST';
let initialState = {
  posts: [
      {id:1, post: 'Hello man', likeCount: 11, likeActive: false},
      {id:2, post: 'Hello man', likeCount: 11, likeActive: false},
      {id:3, post: 'Hello man', likeCount: 11, likeActive: false}
    ],
    newPost: '',
}
const homeReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_NEW_POST:{
          let StateCopy = {...state}
          StateCopy.newPost = action.post;
        return StateCopy
        }
      case ADD_POST: 
      {
        let StateCopy = {...state}
        let myNewPost = {
          id: StateCopy.posts.length + 1,
          post: StateCopy.newPost,
          likeCount: 0
        }
        if(StateCopy.newPost){
          StateCopy.posts.push(myNewPost);
          StateCopy.newPost = '';
        }
        return StateCopy 
      }
        default: 
        return state
    }
}
export const ChangeNewPostActionCreator = (text) => {
    return {type: CHANGE_NEW_POST, post: text}
  }
  export const AddPostActionCreator = () => {
    return { type: ADD_POST }
  }
export default homeReducer;