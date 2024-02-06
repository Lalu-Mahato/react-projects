import { useContext } from "react";
import UserContext from "../context/UserContext";

function Detail() {
    const user = useContext(UserContext);

    return (
        <>
            <h2>Detail:</h2>
            <button onClick={() => user.setUser("John Doe")}>Change Name</button>
        </>
    );
}

export default Detail;
