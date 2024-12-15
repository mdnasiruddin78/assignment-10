import { FaCheck } from 'react-icons/fa';
import doller from '../assets/doller.png'

const Membership = () => {
    return (
        <div>
            <h3 className="text-center text-green-500 text-3xl font-bold mb-5">Take A Membership</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                <div className="card bg-[#014900]">
                    <figure className="px-10 pt-10">
                        <img
                            src={doller}
                            alt="Shoes"
                            className="w-32" />
                            <h3 className='text-white text-5xl font-bold'>FREE</h3>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white"><FaCheck className='text-white'/>No Credit Card Requirement</h2>
                        <p className="card-title text-white"><FaCheck className='text-white'/>Low quality regulation</p>
                        <p className="card-title text-white"><FaCheck className='text-white'/>Get some bollywood content</p>
                        <p className="card-title text-white"><FaCheck className='text-white'/>All Free Content</p>
                        <p className="card-title text-white"><FaCheck className='text-white'/>Limited collection</p>
                        <div className="card-actions">
                        <button to="/login" className='btn px-7 rounded-full border-2 bg-[#002130] text-white'>Start Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#014900]">
                    <figure className="px-10 pt-10">
                        <img
                            src={doller}
                            alt="Shoes"
                            className="w-32" />
                            <h3 className='text-white text-5xl font-bold'>$500</h3>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white"><FaCheck className='text-white'/>Monthly Access</h2>
                        <p className="card-title text-white"><FaCheck className='text-white'/>High quality regulation</p>
                        <p className="card-title text-white"><FaCheck className='text-white'/>Hollywood,bollywood content</p>
                        <p className="card-title text-white"><FaCheck className='text-white'/>All premium Content</p>
                        <p className="card-title text-white"><FaCheck className='text-white'/>Unlimited collection</p>
                        <div className="card-actions">
                        <button to="/login" className='btn px-7 rounded-full border-2 bg-[#002130] text-white'>Start Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#014900]">
                    <figure className="px-10 pt-10">
                        <img
                            src={doller}
                            alt="Shoes"
                            className="w-32" />
                            <h3 className='text-white text-5xl font-bold'>$200</h3>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white"><FaCheck className='text-white'/>Weekly Access</h2>
                        <p className="card-title text-white"><FaCheck className='text-white'/>Qualityfull regulation</p>
                        <p className="card-title text-white"><FaCheck className='text-white'/>Get English content</p>
                        <p className="card-title text-white"><FaCheck className='text-white'/>All Free Content</p>
                        <p className="card-title text-white"><FaCheck className='text-white'/>Midium collection</p>
                        <div className="card-actions">
                        <button to="/login" className='btn px-7 rounded-full border-2 bg-[#002130] text-white'>Start Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;