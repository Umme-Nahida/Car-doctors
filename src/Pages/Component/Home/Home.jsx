import About from "../About/About";
import Address from "../Address/Address";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Address></Address>
            <Team></Team>
        </div>
    );
};

export default Home;