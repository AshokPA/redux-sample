import * as Actions from '../actions';
const initialState = {
    title: 'Home'
}

const HomeReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.SET_HOME_TITLE: 
            return {
                 ...state,
                 title :  action.title
            }
        default: 
            return state
    }
}
export default HomeReducer;