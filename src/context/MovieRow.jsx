import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow() {
  const currentUser = useContext(UserContext);
  return (
    <div>
      <p>User: {currentUser.name}</p>
    </div>
  );
}

export default MovieRow;
