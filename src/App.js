import React from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/Login";
import "./App.css";
// import Movie from "./hoc/Movie";
// import Genre from "./hoc/Genre";
// import Counter1 from "./hooks/Counter1";
// import Counter2 from "./hooks/Counter2";
// import Users from "./hooks/Users";
// import Monsters from "./hooks/Monsters";

class App extends React.Component {
  state = {
    currentUser: null
  };

  handleLoggedIn = username => {
    console.log("Getting the user: " + username); //imitate server call
    const user = { name: "Vasko" }; //getting the user object
    this.setState({ currentUser: user });
  };

  render() {
    return (
      /* <Movie tooltipText={"MOVIE tooltip"} /> */
      /* <Counter1 /> */
      /* <Counter2 /> */
      /* <Genre tooltipText={"GENRE tooltip"} /> */
      /* <Users />
        <Monsters /> */

      /* return Provider component and pass currentUser down in component tree with special prop "value*/
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn
        }}
      >
        <MoviePage />
        <Login />
      </UserContext.Provider>
    );
  }
}

export default App;
