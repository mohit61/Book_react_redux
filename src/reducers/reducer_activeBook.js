//here state is not application's state but its component
// state. i.e. state argument here is not application state
// but state this reducer is responsible for.
// all reducer contains 2 argument current state and action. if action changes
// the state and it needs to pass to application then new state is returned to application
//   otherwise current state is returned through return state.
// state=null is done bcoz jab app open hoga and no book is selected by user
// app state is undefined and we cannot return undefined state , react does not
// allow this. so we set state to null and when user clicks on a book state is
// automatically changed.
export default function(state=null,action){
  switch (action.type) {
    case "BOOK_SELECTED":
    // i.e. we are returning the selected book to the application.
        return action.payload;
  }
  return state;
}
