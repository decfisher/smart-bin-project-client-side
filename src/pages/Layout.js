import { Outlet, Link } from "react-router-dom"

function Layout() {
    return (
        <div className="layout">
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li>
                        <Link to="/" className="nav-link">User View</Link>
                    </li>
                    <li>
                        <Link to="/manager" className="nav-link">Management View</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout