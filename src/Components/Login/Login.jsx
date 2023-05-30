import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>
                        <form>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"

                                />
                                <label className="label">
                                    <span className="label-text-alt text-red-500">errors.email.message</span>
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"

                                />
                                <label className="label">
                                    <span className="label-text-alt text-red-500">errors.email.message</span>
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                        </form>
                        <p><small>New to DocTime <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
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