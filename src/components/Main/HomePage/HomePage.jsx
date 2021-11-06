import style from './HomePage.module.scss';
import Posts from './Posts/Posts';

const HomePage = (props) => {
    let newPost = props.newPost
    let posts = props.posts
    let onChangeMyPost = (e) => {
        let text = e.target.value
        props.onChangeMyPost(text);
    }
    let addMyPost = () => {
        props.addMyPost();
    }
    return (
        <div className={style.home}>
            <div className={style.header}>
                <img src="https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="logo" />
            </div>
            {/* Стена */}
            <div className={style.wall}>
                <div className={style.wallTitle}>
                    Стена
                </div>
                <div className={style.wallForm}>
                    {/* ТекстАреа */}
                    <div className={style.textarea}>
                        <textarea value={newPost} onChange={onChangeMyPost}></textarea>
                    </div>
                    <div className={style.wallBtn}>
                        <button onClick={addMyPost}>Send</button>
                    </div>
                </div>
            <Posts posts={posts}/>
            </div>
        </div>
    )
}

export default HomePage;