import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {

    const [error, setError] = useState({});

    const registration = (e) => {
        e.preventDefault();
        const firstName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const role = e.target.role.value;

        const user = { email, password, firstName, role };

        fetch("http://localhost:5000/api/v1/user/signup", {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setError(data)
                if (data?.status == "fail") {
                    toast.error(data?.error?.message);
                }
                if (data?.status == "success") {
                    console.log(data.data);
                    localStorage.setItem("email", data?.data?.email)
                    localStorage.setItem("password", data?.data?.password)
                    toast.success(data?.message)
                    e.target.reset();
                    window.location.reload(true);
                }
            })
    };

    return (
        <>
            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Registration</h2>
                        <form onSubmit={registration}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input
                                    name='name'
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"

                                />

                                <label className="label">
                                    <span className="label-text-alt text-red-500">{error?.error?.errors?.firstName?.message}</span>
                                </label>
                            </div>

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
                                    <span className="label-text-alt text-red-500">{error?.error?.errors?.email?.message}</span>
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
                                    <span className="label-text-alt text-red-500">{error?.error?.errors?.password?.message}</span>
                                </label>
                            </div>

                            <div className="mb-4">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>

                                <select
                                    defaultValue="Manufacturer"
                                    name="role"
                                    className="select select-bordered w-full max-w-xs mb-2">
                                    <option disabled>Select your role</option>
                                    <option value="Manufacturer">Manufacturer</option>
                                    <option>Transporter</option>
                                </select>
                            </div>

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                        </form>

                        <p><small>Have a account ? <Link className='text-primary' to="/login">Login</Link></small></p>

                        <div className="divider">OR</div>

                        <button className="btn btn-outline"
                        >Continue with Google</button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Registration;