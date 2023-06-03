import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="mx-10">
            <Link
                to='/chat/lsdkf'
                className="btn btn-block justify-start my-3"
            >
                <div className="avatar online me-5">
                    <div className="w-10 rounded-full">
                        <img src="/src/assets/meee.png" />
                    </div>
                </div> Adam Moon</Link>

            <Link
                to='/chat/4093'
                className="btn btn-block justify-start my-3"
            >
                <div className="avatar online me-5">
                    <div className="w-10 rounded-full">
                        <img src="/src/assets/meee.png" />
                    </div>
                </div> Adam Moon</Link>

            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn"><span className="text-2xl me-1 mt-[-4px]">+</span> Add Order</label>

            {/* Order Modal */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">Youve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default Home;