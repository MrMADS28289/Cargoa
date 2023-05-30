import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="mx-10">
            <Link
                to='/blabla'
                className="btn btn-block justify-start my-3"
            >
                <div className="avatar online me-5">
                    <div className="w-10 rounded-full">
                        <img src="/src/assets/meee.png" />
                    </div>
                </div> Adam Moon</Link>

            <Link
                to='/blabla'
                className="btn btn-block justify-start my-3"
            >
                <div className="avatar online me-5">
                    <div className="w-10 rounded-full">
                        <img src="/src/assets/meee.png" />
                    </div>
                </div> Adam Moon</Link>
        </div>
    );
};

export default Home;