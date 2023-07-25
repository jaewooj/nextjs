

const PostLi = ({item}) => {
    const {title,body} = item
    return (
        <li>
            <h3>{title}</h3>
            <p>{body}</p>
        </li>
    );
};

export default PostLi;