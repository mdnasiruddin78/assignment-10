import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Membership from "./Membership";
import Movicategory from "./Movicategory";
import Featuredmovie from "./Featuredmovie";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HOME</title>
            </Helmet>
            <section>
                <Banner></Banner>
            </section>
            <section className="py-20">
                <Featuredmovie></Featuredmovie>
            </section>
            <section>
                <Movicategory></Movicategory>
            </section>
            <section className="py-20">
                <Membership></Membership>
            </section>
        </div>
    );
};

export default Home;