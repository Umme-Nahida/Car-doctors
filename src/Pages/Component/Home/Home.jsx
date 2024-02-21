import About from "../About/About";
import Address from "../Address/Address";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Team from "../Team/Team";
import ChooseUs from "../chooseUs/ChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Address></Address>
            <Team></Team>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;