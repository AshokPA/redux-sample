import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from '../store/actions';
import axios from "axios";
import BlogComponet from "../components/blog";
const Blog = (props) => {
    const {title} = useSelector((state) => state.Home);
    const {blogs} = useSelector((state) => state.Blog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.setTitle("Blog Page"));
    }, [])

    useEffect(() => {
        getBlogs();
    }, [])

    const getBlogs = async() => {
        // const {data} =  await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(Actions.getBlog());
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h3>{title}</h3>
            {blogs.map(blog => {
                return (
                    <BlogComponet key={blog.id} blog={blog}/>
                )
            })}
        </div>
    )
}
export default Blog;