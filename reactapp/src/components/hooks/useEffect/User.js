import { useEffect } from "react";

function User({ counter }) {
    console.log("rendering outside...");
    useEffect(() => {
        console.log("re-rendering...", counter);

        return (() => {
            console.log('rendering', counter);
        });

    }, [counter]);

    return (
        <h3>useEffect hook</h3>
    );
}
export default User;
