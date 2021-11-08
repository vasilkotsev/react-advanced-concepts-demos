import React from "react";

const UserContext = React.createContext(); //returns context object
UserContext.displayName = "UserContext";
/* it's a good practise to give explicitly a specific name for each context which we create
 we can see it in react dev tool*/

export default UserContext;
