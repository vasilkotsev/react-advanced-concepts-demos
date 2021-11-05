import "./App.css";
// import Movie from "./hoc/Movie";
// import Genre from "./hoc/Genre";
// import Counter1 from "./hooks/Counter1";
// import Counter2 from "./hooks/Counter2";
import Users from "./hooks/Users";
import Monsters from "./hooks/Monsters";

function App() {
  return (
    <div>
      {/* <Movie tooltipText={"MOVIE tooltip"} /> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <Genre tooltipText={"GENRE tooltip"} /> */}
      <Users />
      <Monsters />
    </div>
  );
}

export default App;
