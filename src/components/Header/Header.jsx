import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to='..' relative='route'>{'Test task'.toUpperCase()}</Link>
            </div>
        </nav>
    );
};

