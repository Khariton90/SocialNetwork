import { ChangeNewPostActionCreator, AddPostActionCreator } from '../../../redux/homeReducer'
import HomePage from './HomePage';

const HomePageContainer = (props) => {

    let newPost = props.store.getState().homePage.newPost;
    let posts = props.store.getState().homePage.posts;
    let onChangeMyPost = (text) => {
        props.store.dispatch(ChangeNewPostActionCreator(text));
    }
    let addMyPost = () => {
        props.store.dispatch(AddPostActionCreator());
    }
    return (
        <HomePage onChangeMyPost={onChangeMyPost}  addMyPost={addMyPost} posts={posts} newPost={newPost}/>
    )
}

export default HomePageContainer;