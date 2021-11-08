import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
  componentDidMount() {
    console.log("context", this.context); //currentUser context object;
  }
  render() {
    return (
      /* return Consumer component who expects a function as a child with parametar who receives the context object*/
      <UserContext.Consumer>
        {userContext => <div>Movie List {userContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}

//static property which provide currentUser context object outside render() -> for exapmple in componentDidMount
MovieList.contextType = UserContext;

export default MovieList;
