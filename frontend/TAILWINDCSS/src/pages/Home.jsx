import { useNavigate } from "react-router-dom";

import homepage1 from "../assets/images/home-1.jpg";
import homepage2 from "../assets/images/home-2.jpg";
import homepage3 from "../assets/images/home-3.jpg";
import homepage4 from "../assets/images/home-4.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="Hero-section relative ">
        <img src={homepage1} alt="home" className="homepage w-full h-screen" />

        
          <div className="container absolute top-44 ">
            <h1 className="text-center font-bold text-white ">
              Your Favorite Food,
              <br />
              Delivered Fast
            </h1>
            <p className="text-center text-white">
              Order from thousands of restaurants and get it delivered to your
              doorstep
            </p>

            <div className="flex text-center gap-10">
              <div className="text-center">
                <button
                  id="sign-up"
                  className="btn  "
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </button>
              </div>
              <div >
                <button
                  id="order-now"
                  className="btn "
                  onClick={() => navigate("/login")}
                >
                  Click Now
                </button>
              </div>
            </div>

            <div className=" " id="search">
              <input
                type="text"
                className="search-bar border-0 w-100"
                placeholder=" Search restaurants or dishes ... "
              />
            </div>
          </div>
        
      </section>
    </>
  );
}

export default Home;
