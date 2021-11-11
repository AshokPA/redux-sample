const BlogComponet = (props) => {
    const {blog} = props;
    return (
        <div>
            <h3>{blog.title}</h3>
            <span>{blog.body}</span>
        </div>
    )
}
export default BlogComponet;