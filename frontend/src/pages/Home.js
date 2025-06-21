const Home = ({ message, error }) => {
  return (
    <div className="home">
      <div
       className="hero-section">
        <div className="overlay-content">
          <h1 className="hook">Fresh Fruits and Vegetables Delivered</h1>
          <p className="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magnam reiciendis consequatur 
            cum doloribus eius deserunt perspiciatis rem minus, accusantium omnis ipsa ut doloremque necessitatibus, 
            deleniti quo eaque ullam reprehenderit?
          </p>
          <button className="learn-butt">Learn more</button>
        </div>
      </div>

       <div className="About" id="about"> {/* ← Add this ID */}
      <div className="about-top">
        <div className="logo-container"></div>
        <p className="intro">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Corporis illum in, soluta sunt voluptate ullam maiores amet ut neque. Expedita, 
            fugiat vel ut dolorum exercitationem tempore facere hic officia nam?</p>
      </div>
      <div className="about-middle">
        <div className="pic1-container"></div>
        <div className="text-content">
            <h2>Our Vision</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate pariatur laboriosam sint labore reprehenderit. Accusantium aliquid vitae, ex, cumque recusandae modi perspiciatis repudiandae laudantium minus ipsa sint nemo, est velit.</p>
        </div>
        </div>

        <div className="about-bottom">
        <div className="text-content">
            <h2>Our Goals</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi eveniet reiciendis qui fuga esse dignissimos totam earum quaerat incidunt ut, necessitatibus fugiat beatae repellat voluptate error excepturi harum quisquam.</p>
        </div>
        <div className="pic2-container"></div>
        </div>
    </div>
        <div class="section" id="group">
          <h2 class="group-title">Our Group of Companies</h2>
          <div class="flex">
            <div class="card">
              <div class="card-img1">
                <img src="./acres.png" alt="Fruit Blends Logo" />
              </div>
              <h3>Fruit Blends</h3>
              <p>Juices, smoothies, and frozen delights made from natural fruits.</p>
              <a href="https://example.com/fruit-blends" class="text-link">Visit Site</a>
            </div>

            <div class="card">
              <div class="card-img2">
                <img src="./acres.png" alt="Acres Logo" />
              </div>
              <h3>Acres Agriculture</h3>
              <p>Supporting farmers and supplying fresh produce from farm to table.</p>
              <a href="https://example.com/acres" class="text-link">Visit Site</a>
            </div>

            <div class="card">
              <div class="card-img3"></div>
              <h3>Discover Our Group of Companies</h3>
              <a href="https://example.com/group" class="btn-red">
                Learn More <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        <div class="contact" id="contact">
          <div class="contact-container">
            <a href="https://example.com/group" class="btn-red">
              Heard <br /> Enough? <span class="arrow">→</span>
            </a>

            <h1>Contact Us</h1>

            <img src="./acres.png" alt="Company Logo" class="logo" />

            <button class="arrow-button">
              <span class="arrow">→</span>
            </button>
          </div>
        </div>
    </div>    
  );
};

export default Home;
