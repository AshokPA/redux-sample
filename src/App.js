import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import logo from './logo.svg';
import './App.css';
import HomePage from "./containers/home";
import Blog from "./containers/blog";
import HomeReducer from "./store/reducers/home.reducer";
import BlogReducer from "./store/reducers/blog.reducer";

const rootReducer = combineReducers({
  Home: HomeReducer,
  Blog: BlogReducer
});

const store =  createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
