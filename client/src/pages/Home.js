import { useEffect } from "react";

const Home = ({ message, error }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".pic1-container, .pic2-container, .text-content"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // Remove to allow re-trigger
          }
        });
      },
      {
        threshold: 0.2, // 20% visible triggers
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="home">
      <div className="hero-section">
        <div className="overlay-content">
          <h1 className="hook">Fresh Fruits and Vegetables Delivered</h1>
          <p className="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            magnam reiciendis consequatur cum doloribus eius deserunt
            perspiciatis rem minus, accusantium omnis ipsa ut doloremque
            necessitatibus, deleniti quo eaque ullam reprehenderit?
          </p>
          <button className="learn-butt">Learn more</button>
        </div>
      </div>

      <div className="About" id="about">
        <div className="about-top">
          <div className="logo-container"></div>
          <p className="intro">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            illum in, soluta sunt voluptate ullam maiores amet ut neque.
            Expedita, fugiat vel ut dolorum exercitationem tempore facere hic
            officia nam?
          </p>
        </div>
        <div className="about-middle">
          <div className="pic1-container"></div>
          <div className="text-content">
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate pariatur laboriosam sint labore reprehenderit.
              Accusantium aliquid vitae, ex, cumque recusandae modi perspiciatis
              repudiandae laudantium minus ipsa sint nemo, est velit.
            </p>
          </div>
        </div>

        <div className="about-bottom">
          <div className="text-content">
            <h2>Our Goals</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              modi eveniet reiciendis qui fuga esse dignissimos totam earum
              quaerat incidunt ut, necessitatibus fugiat beatae repellat
              voluptate error excepturi harum quisquam.
            </p>
          </div>
          <div className="pic2-container"></div>
        </div>
      </div>

      <div className="section" id="group">
        <h2 className="group-title">Our Group of Companies</h2>
        <div className="flex">
          <div className="card">
            <div className="card-img1">
              <img src="./acres.png" alt="Fruit Blends Logo" />
            </div>
            <h3>Fruit Blends</h3>
            <p>
              Juices, smoothies, and frozen delights made from natural fruits.
            </p>
            <a href="https://example.com/fruit-blends" className="text-link">
              Visit Site
            </a>
          </div>

          <div className="card">
            <div className="card-img2">
              <img src="./acres.png" alt="Acres Logo" />
            </div>
            <h3>Acres Agriculture</h3>
            <p>
              Supporting farmers and supplying fresh produce from farm to table.
            </p>
            <a href="https://example.com/acres" className="text-link">
              Visit Site
            </a>
          </div>

          <div className="card">
            <div className="card-img3"></div>
            <h3>Discover Our Group of Companies</h3>
            <a href="https://example.com/group" className="btn-red">
              Learn More <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <div className="contact-container">
          <a href="https://example.com/group" className="btn-red">
            Heard <br /> Enough? <span className="arrow">→</span>
          </a>

          <h1>Contact Us</h1>

          <img src="./acres.png" alt="Company Logo" className="logo" />

          <button className="arrow-button">
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
