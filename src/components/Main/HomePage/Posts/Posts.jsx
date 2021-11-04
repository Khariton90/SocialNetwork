import style from './Posts.module.scss';
import Post from './Post/Post';
const Posts = (props) => {

let post = props.posts.map(post => <Post post={post} key={post.id}/>)
    return (
        <div className={style.posts}>
            {post}
   </div>
    )
}

export default Posts