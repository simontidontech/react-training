import { Link } from "react-router-dom";

export default function NavBar({ heading }) {
    return (
        <div>
            <h1>{heading}</h1>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <hr />
        </div>
    )
}