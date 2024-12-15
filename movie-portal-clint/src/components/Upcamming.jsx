import img1 from '../assets/upca/1.jpg';
import img2 from '../assets/upca/2.jpg';
import img3 from '../assets/upca/3.jpg';
import img4 from '../assets/upca/4.jpg';
import img5 from '../assets/upca/5.jpg';
import img6 from '../assets/upca/6.jpg';
import img7 from '../assets/upca/7.jpg';
import img8 from '../assets/upca/8.jpg';
import img9 from '../assets/upca/9.jpg';

const Upcamming = () => {
    return (
        <div className='mb-10'>
            <h3 className="text-3xl text-green-500 font-bold text-center mb-5">Upcamming Movie</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                <img src={img1} className="rounded-xl h-[300px]  w-[430px]" />
                <img src={img2} className="rounded-xl h-[300px]  w-[430px]" />
                <img src={img3} className="rounded-xl h-[300px]  w-[430px]" />
                <img src={img4} className="rounded-xl h-[300px]  w-[430px]" />
                <img src={img5} className="rounded-xl h-[300px]  w-[430px]" />
                <img src={img6} className="rounded-xl h-[300px]  w-[430px]" />
                <img src={img7} className="rounded-xl h-[300px]  w-[430px]" />
                <img src={img8} className="rounded-xl h-[300px]  w-[430px]" />
                <img src={img9} className="rounded-xl h-[300px]  w-[430px]" />
            </div>
        </div>
    );
};

export default Upcamming;