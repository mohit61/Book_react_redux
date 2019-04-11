//this action will be triggered when user clicks on any book in the list.
//payload will return the actual action i.e. the thing this action needs to do.
// here selectBook is action creator and will return an action.
// action = object(i.e wrapped in {} braces) with type property
// exporting as default so import {selectBook} ko braces me likne ki zaroorat nhi hai
export default function selectBook(book){
  return(
    {
      type: 'BOOK_SELECTED',
      payload: book
    }
  );
}
