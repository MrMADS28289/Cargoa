import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='md:flex bg-gray-800 p-8'>
            <img src="/src/assets/404-error.webp" alt="notfound" />
            <div className='md:w-1/2 text-white flex flex-col justify-center items-center'>
                <h1 className='text-4xl text-center mb-8 font-extrabold'>Lost in Space</h1>
                <Link className='btn' to='/' >Go Back</Link>
            </div>
        </div>
    );
};

export default NotFound;