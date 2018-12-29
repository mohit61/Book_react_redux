import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component{
  render(){
    // when app boots up so initially state is null as defined in our reducers/
    // reducer_activeBook.js so if we do not write the below if statement then
    // app will show error as the code below if statement will execute and
    // this.props.book is null and null.title will cause error.
    if(!this.props.book){
      return <div>Select a book to get started</div>;
    }

    return(
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    book:state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetails);
