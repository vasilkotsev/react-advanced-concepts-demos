import React, { useState, Fragment } from "react";
import useGetAndSetData from "./customHooks/useGetAndSetData";

function Monsters() {
  const [monsters, setMonsters] = useState([]);

  // custom hook call
  useGetAndSetData(setMonsters);

  return (
    <Fragment>
      <ul>
        {monsters.map(monster => (
          <li key={monster.id}>
            <span>{monster.name}</span>
            <span>{monster.username}</span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Monsters;
