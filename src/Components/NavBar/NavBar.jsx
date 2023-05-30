
const NavBar = () => {
    return (
        <nav className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl"> <img className="h-10 rounded-full me-2" src="/src/assets/logo.png" alt="" /> Cargoa
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;