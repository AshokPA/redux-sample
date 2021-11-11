import * as Actions from '../actions';

const initialState = {
    blogs : []
}
const BlogReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.SET_BLOGS: 
            return {
                ...state,
                blogs: action.blogs
            }
        case Actions.ADD_BLOG:
            return {
                ...state,
                blogs: state.blogs.push(action.blog)
            }
        case Actions.RESET_BLOG:
            return initialState;
        default:
            return state
    }

}
export default BlogReducer;