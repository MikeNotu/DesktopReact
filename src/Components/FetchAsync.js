import React, { useEffect, useState } from "react";

function FetchAsync() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      response = await response.json();
      setData(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div>
      {data !== null
        ? data.map((user) => {
            return <p>{user.title}</p>;
          })
        : null}
    </div>
  );
}

export default FetchAsync;
