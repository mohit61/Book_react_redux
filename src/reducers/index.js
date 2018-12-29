import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_activeBook';
// this is the place where we combine reducer with the application state
// below key is the state and value is the output of the function(reducer)
const rootReducer = combineReducers({
  books : BooksReducer,
  activeBook : ActiveBook
});

export default rootReducer;
