import { useNavigate } from "react-router-dom";

import homepage1 from "../assets/images/home-1.jpg";
import homepage2 from "../assets/images/home-2.jpg";
import homepage3 from "../assets/images/home-3.jpg";
import homepage4 from "../assets/images/home-4.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section class="Hero-section position-relative">
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

        <div class=" hero-overlay position-absolute d-flex align-items-center justify-content-center text-center">
          <div class="container  px-3">
            <h1 class="fw-bold display-5">
              Your Favorite Food,
              <br />
              Delivered Fast
            </h1>
            <p class="mt-3 fs-5 ">
              Order from thousands of restaurants and get it delivered to your
              doorstep
            </p>

            <div class="d-flex justify-content-center gap-3 my-4">
              <div>
                <button
                  id="sign-up"
                  class="btn  text-decoration-none"
                  onClick={() => navigate("/register")}
                >Sign up</button>
              </div>
              <div>
                <button
                  id="order-now"
                  class="btn px-4 py-2 rounded-3 fw-bold text-decoration-none"
                  onClick={() => navigate("/login")}
                >Click Now</button>
              </div>
            </div>

            <div
              class=" rounded-3 d-flex align-items-center px-3 py-2 mx-auto gap-2"
              id="search"
            >
              <input
                type="text"
                class="search-bar border-0 w-100"
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
