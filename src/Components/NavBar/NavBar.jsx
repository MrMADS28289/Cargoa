import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navbar bg-base-300">
                <div className="flex-1">
                    <Link
                        to='/'
                        className="btn btn-ghost hover:bg-base-300 normal-case text-xl"> <img className="h-10 rounded-full me-2" src="/src/assets/logo.png" alt="" /> Cargoa
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='login'>Login</Link></li>
                    </ul>
                </div>

            </nav>
            <Outlet />
        </>

    );
};

export default NavBar;