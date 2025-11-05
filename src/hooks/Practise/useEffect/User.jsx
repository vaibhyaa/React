import { useState, useEffect } from "react";

function useUserFetch(url) {
  const [fetchedData, setfetchedData] = useState(null);

  useEffect(() => {
    // let isMounted = true; // to prevent state update after unmount

    fetch(url)
      .then((res) => res.json())
      .then((json) => setfetchedData(json))
      .catch((err) => console.error(err));

    // return () => {
    //   isMounted = false; // cleanup
    // };
  }, [url]);

  useEffect(() => {
    console.log(
      "this is the data we are setting/passing  from userside from useuserFetch:- ",
      fetchedData
    );
  }, [fetchedData]);

  return {
    fetchedData,
  };
  //   / means → { fetchedData: { id: 1, title: "Hello" } }
}

export default function User() {
  const fetchedResultObject = useUserFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const { fetchedData } = fetchedResultObject;

  console.log(
    "the data we got aftaer callig the useUserfetch function:- ",
    fetchedResultObject
  );
  console.log(
    "this data is after destructuring the object got from resut L- ",
    fetchedData
  );
  console.log("app is rendering ....!");

  return (
    <div>
      <div>Hello...!</div>
      {fetchedData ? JSON.stringify(fetchedData) : "Loading..."}
    </div>
  );
}
