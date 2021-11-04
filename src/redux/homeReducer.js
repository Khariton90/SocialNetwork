const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const ADD_POST = 'ADD-POST';

const homeReducer = (state, action) => {
    switch (action.type){
        case CHANGE_NEW_POST:
        state.newPost = action.post;
        return state
      case ADD_POST:
        let myNewPost = {
          id: state.posts.length + 1,
          post: state.newPost,
          likeCount: 0
        }
        if(state.newPost){
            state.posts.push(myNewPost);
            state.newPost = '';
        }
        return state
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