import { ChangeNewPostActionCreator, AddPostActionCreator } from '../../../redux/homeReducer'
import HomePage from './HomePage';
import StoreContext from '../../../StoreContext';

const HomePageContainer = () => {
    return <StoreContext.Consumer>
        { store => {
                let newPost = store.getState().homePage.newPost;
                let posts = store.getState().homePage.posts;
                let onChangeMyPost = (text) => {
                    store.dispatch(ChangeNewPostActionCreator(text));
                }
                let addMyPost = () => {
                    store.dispatch(AddPostActionCreator());
                }
            
                return (
                    <HomePage onChangeMyPost={onChangeMyPost}  addMyPost={addMyPost} posts={posts} newPost={newPost}/>
                )
        }

        }
    </StoreContext.Consumer>

}

export default HomePageContainer;