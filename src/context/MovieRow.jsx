import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow() {
  const userContext = useContext(UserContext); // return the current context value
  console.log("context", userContext);
  return (
    <div>
      <p>
        Movie Row {userContext.currentUser ? userContext.currentUser.name : ""}
      </p>
    </div>
  );
}

export default MovieRow;
