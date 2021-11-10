import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

function MovieRow() {
  const userContext = useContext(UserContext); // return the current context value
  const cartContext = useContext(CartContext);
  console.log("context", userContext);
  console.log("cartContext: ", cartContext);
  return (
    <div>
      <p>
        Movie Row {userContext.currentUser ? userContext.currentUser.name : ""}
      </p>
    </div>
  );
}

export default MovieRow;
