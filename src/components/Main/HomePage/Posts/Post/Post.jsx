import style from './Post.module.scss';
import like from '../../../../../../src/assets/img/likes.svg'

const Post = (props) => {
    let likes =  `${props.post.likeCount ? 'Нравится:' + props.post.likeCount : ''} `

    return (
        <div className={style.post}>
            <div className={style.postLogo}>
                <img src="https://www.bettsport.net/api/v1/customerMedia/male/displayDefault" alt="" />
            </div>
            <div>
                <p>{props.post.post} <a href=" "><span className={style.like} title="like"><img src={like} alt=""/></span></a></p>
                    <div className={style.likes}>
                        <a href=" ">{likes}</a>
                        <a href=" " className={style.answer}>Ответить</a>
                    </div>
            </div>
        </div>
    )
};

export default Post