import { ChangeNewPostActionCreator, AddPostActionCreator } from '../../../redux/homeReducer'
import HomePage from './HomePage';
import { connect } from 'react-redux';

// const HomePageContainer = () => {
//     return <StoreContext.Consumer>
//         { store => {
//                 let newPost = store.getState().homePage.newPost;
//                 let posts = store.getState().homePage.posts;
//                 let onChangeMyPost = (text) => {
//                     store.dispatch(ChangeNewPostActionCreator(text));
//                 }
//                 let addMyPost = () => {
//                     store.dispatch(AddPostActionCreator());
//                 }
            
//                 return (
//                     <HomePage onChangeMyPost={onChangeMyPost}  addMyPost={addMyPost} posts={posts} newPost={newPost}/>
//                 )
//         }

//         }
//     </StoreContext.Consumer>

// }

const MapStateToProps = (state) => {
    return {
        newPost: state.homePage.newPost,
        posts: state.homePage.posts
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        onChangeMyPostContainer: (text) => {
            return dispatch(ChangeNewPostActionCreator(text))
        },
        addMyPostContainer: () =>{
            return dispatch(AddPostActionCreator())
        }
    }
}
const HomePageContainer = connect(MapStateToProps,MapDispatchToProps)(HomePage);
export default HomePageContainer;