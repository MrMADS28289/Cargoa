import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const Login = () => {

    const [error, setError] = useState({});
    console.log(error);

    const logIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        const user = { email, password };

        fetch("http://localhost:5000/api/v1/user/login", {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setError(data)
                if (data?.status == "fail") {
                    toast.error(data?.error);
                }
                if (data?.status == "success") {
                    console.log(data);
                    localStorage.setItem("email", data?.data?.email);
                    localStorage.setItem("token", data?.data?.token);
                    toast.success(data?.message)
                    e.target.reset();
                    window.location.reload(true);
                }
            })
    };

    return (
        <>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>
                        <form onSubmit={logIn}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"

                                />

                                <label className="label">
                                    <span className="label-text-alt text-red-500">{error.error}</span>
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    name='password'
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"

                                />

                                <label className="label">
                                    <span className="label-text-alt text-red-500">{error.error}</span>
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                        </form>

                        <p><small>New to CarGoa ? <Link className='text-primary' to="/register">Create New Account</Link></small></p>

                        <div className="divider">OR</div>

                        <button className="btn btn-outline"
                        >Continue with Google</button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Login;