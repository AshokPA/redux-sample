import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from '../store/actions';

const HomePage = (props) => {
    const {title} = useSelector((state) => state.Home);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.setTitle('Home Page'))
    }, [])
    return (
        <div>
            <Link to="/blog">Blog</Link>
            <h3>{title}</h3>
            
        </div>
        
    )
}
export default HomePage;