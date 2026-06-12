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

      

       <section className="py-16 text-center bg-(--color-primary) text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Become a Restaurant Partner</h1>

          <p className="mt-4 max-w-2xl mx-auto">
            Grow your business with Cravings. Join thousands of restaurants
            already delivering with us.
          </p>

          <button className="mt-6 px-6 py-3 rounded-md bg-white text-(--color-primary) font-semibold">
            Partner With Us
          </button>
        </div>
      </section>

    </>
  );
}

export default Home;
