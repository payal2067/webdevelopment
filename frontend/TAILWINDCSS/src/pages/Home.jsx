import { useNavigate } from "react-router-dom";

import homepage1 from "../assets/images/home-1.jpg";
import homepage2 from "../assets/images/home-2.jpg";
import homepage3 from "../assets/images/home-3.jpg";
import homepage4 from "../assets/images/home-4.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section class="">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={homepage1} alt="home" className="homepage w-100 " />
            </div>
            <div class="carousel-item">
              <img src={homepage2} alt="home" className="homepage w-100" />
            </div>
            <div class="carousel-item">
              <img src={homepage3} alt="home" className="homepage w-100" />
            </div>
            <div class="carousel-item">
              <img src={homepage4} alt="home" className="homepage w-100" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div class=" ">
          <div class="">
            <h1 class="">
              Your Favorite Food,
              <br />
              Delivered Fast
            </h1>
            <p class="">
              Order from thousands of restaurants and get it delivered to your
              doorstep
            </p>

            <div class="">
              <div>
                <button class="btn" onClick={() => navigate("/register")}>
                  Sign up
                </button>
              </div>
              <div>
                <button>
                  class="btn" onClick={() => navigate("/login")}
                  Click Now
                </button>
              </div>
            </div>

            <div class="" id="search">
              <input
                type="text"
                class=""
                placeholder=" Search restaurants or dishes ... "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
