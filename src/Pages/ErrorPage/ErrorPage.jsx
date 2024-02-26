import { Link } from "react-router-dom";
import image from "../../../public/image/banner/Add a heading.png";
const ErrorPage = () => {
  return (
    <div className="pb-10">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="btn bg-[#FF3811] text-white border-[#FF3811] hover:bg-inherit hover:text-[#FF3811] hover:border-[#FF3811]">
            Go back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
