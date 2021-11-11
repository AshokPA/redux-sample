import axios from "axios";

export const SET_BLOGS = 'SET_BLOGS';
export const ADD_BLOG = 'ADD_BLOG';
export const RESET_BLOG = 'RESET_BLOG';
export function setBlog(blogs) {
    return {
        type: SET_BLOGS,
        blogs
    }
}

export function addBlog(blog) {
    return {
        type: ADD_BLOG,
        blog
    }
}
export function resetBlog() {
    return {
        type: RESET_BLOG
    }
}

export function getBlog() {
    return async function(dispatch, getState) {
        const {title} = getState().Home;
        console.log("title", title);
        const {data} =  await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(setBlog(data));
    }
} 