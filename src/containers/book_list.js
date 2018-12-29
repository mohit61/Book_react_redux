import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{

  // this.props.books will contain array of all books with key as title and value
  // as name of the book. props contain this because last 2 functions in this file.
  renderList(){
    return this.props.books.map(book => {
        return(
          <li
           key={book.title}
           onClick={()=>this.props.selectBook(book)}
           className="list-group-item">
           {book.title}
          </li>
        );
    });
  }

  render(){
    // col-sm-4 here is 4 is the width
    // and sm is for tablets size screen.
    return(
      <ul className="list-group  col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

}

// we have 2 properties in the state so using books property(state) here.
// our state looks like this:
// {
//    books: [{title: 'MK Gandhi'},{title: 'The Intelligent Investor'}],
//    activeBooks: [{itle: 'MK Gandhi'}]
// }
// so these 2 properties are there in our state and we are using state.books below.
// this is passed as props to container.
// whatever is returned by this function will end up as props in our containers BookList.
function mapStateToProps(state){
  return(
    {books: state.books}
  );
}
// anything returned from this function will end up as props in the BookList container.
// thus we can use this.props.selectBook
function mapDispatchToProps(dispatch){
  // whenever selectBook is called, the result will be passed to all the reducers,
  // so bindActionCreators is responsible for doing this.
  // dispatch take actions and pass to all reducers.
  return bindActionCreators({selectBook:selectBook},dispatch);
}
// this will connect redux to our container BookList
// i.e. this promotes componet to a container.
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
