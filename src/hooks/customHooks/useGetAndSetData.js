import { useEffect } from "react";
import axios from "axios";

export default function useGetData(setState) {
  useEffect(() => {
    //adds async function, used as a wrapper for the request, because the 1st useEffect parameter cannot be async
    async function getData() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setState(data);
    }
    //call async function explicitly
    getData();
  });
}
