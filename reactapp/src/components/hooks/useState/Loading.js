import { useState } from "react";

function Loading() {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <h2> useState hook with Boolean Type</h2>
      <button onClick={() => setLoading((prevState) => !prevState)}>
        Get data
      </button>
      <br />
      {isLoading ? <p>Loading...</p> : "Data is here..."}
    </>
  );
}

export default Loading;
