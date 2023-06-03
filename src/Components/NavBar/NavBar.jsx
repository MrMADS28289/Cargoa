import { Outlet, Link } from 'react-router-dom';
import useLogin from '../Hooks/useLogin';
import { toast } from "react-toastify";

const NavBar = () => {

    const [user] = useLogin();

    const logout = () => {
        localStorage.clear();
        window.location.reload(true);
        toast.success("Logout successfull")
    }

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
                        {
                            user?.email ? <li><button onClick={logout}>Logout</button></li> : <li><Link to='login'>Login</Link></li>
                        }
                    </ul>
                </div>

            </nav>
            <Outlet />
        </>

    );
};

export default NavBar;