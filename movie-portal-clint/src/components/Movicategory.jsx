import Marquee from "react-fast-marquee";
import english1 from '../assets/english1.jpg';
import english2 from '../assets/english2.jpg';
import english3 from '../assets/english3.jpg';
import english4 from '../assets/english4.png';
import english5 from '../assets/english5.jpg';
import english6 from '../assets/english6.jpg';
import hindi1 from '../assets/hindi1.jpg';
import hindi2 from '../assets/hindi2.jpg';
import hindi3 from '../assets/hindi3.jpg';
import hindi4 from '../assets/hindi4.jpg';
import hindi5 from '../assets/hindi5.jpg';
import hindi6 from '../assets/hindi6.jpg';


const Movicategory = () => {
    return (
        <div className="space-y-5 border-2 border-green-500 p-3 rounded-xl">
            <h3 className="text-center text-green-500 text-3xl font-bold">Movie Category</h3>
            <div>
                <p className="text-green-500 font-bold text-xl">Latest-Movie</p>
                <Marquee pauseOnHover={true}>
                    <img className="w-60 h-40" src={english1} alt="" />
                    <img className="w-60 h-40" src={english2} alt="" />
                    <img className="w-60 h-40" src={english3} alt="" />
                    <img className="w-60 h-40" src={hindi1} alt="" />
                    <img className="w-60 h-40" src={hindi2} alt="" />
                    <img className="w-60 h-40" src={hindi3} alt="" />
                </Marquee>
            </div>
            <div>
                <p className="text-green-500 font-bold text-xl">Hindi-Movie</p>
                <Marquee pauseOnHover={true} direction="right">
                    <img className="w-60 h-40" src={hindi1} alt="" />
                    <img className="w-60 h-40" src={hindi2} alt="" />
                    <img className="w-60 h-40" src={hindi3} alt="" />
                    <img className="w-60 h-40" src={hindi4} alt="" />
                    <img className="w-60 h-40" src={hindi5} alt="" />
                    <img className="w-60 h-40" src={hindi6} alt="" />
                </Marquee>
            </div>
            <div>
                <p className="text-green-500 font-bold text-xl">English-Movie</p>
                <Marquee pauseOnHover={true}>
                    <img className="w-60 h-40" src={english1} alt="" />
                    <img className="w-60 h-40" src={english2} alt="" />
                    <img className="w-60 h-40" src={english3} alt="" />
                    <img className="w-60 h-40" src={english4} alt="" />
                    <img className="w-60 h-40" src={english5} alt="" />
                    <img className="w-60 h-40" src={english6} alt="" />
                </Marquee>
            </div>
        </div>
    );
};

export default Movicategory;