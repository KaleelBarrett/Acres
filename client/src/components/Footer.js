import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
        <Link to="/" className="logo">
        <img src="/acres.png" alt="Acres Logo" />
      </Link>

     <nav className="footer-links">
        <h3>Follow us</h3>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.498 6.186a2.83 2.83 0 0 0-1.989-2.002C19.652 3.6 12 3.6 12 3.6s-7.652 0-9.51.584A2.83 2.83 0 0 0 .5 6.186 29.327 29.327 0 0 0 0 12a29.325 29.325 0 0 0 .5 5.814 2.83 2.83 0 0 0 1.99 2.002C4.348 20.4 12 20.4 12 20.4s7.652 0 9.509-.584a2.83 2.83 0 0 0 1.989-2.002A29.33 29.33 0 0 0 24 12a29.33 29.33 0 0 0-.502-5.814zM9.75 15.02v-6.04l6.25 3.02-6.25 3.02z"/>
            </svg>
            YouTube
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#E1306C" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.41a4.92 4.92 0 0 1 1.77 1.07 4.92 4.92 0 0 1 1.07 1.77c.17.46.355 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.07 1.77 4.92 4.92 0 0 1-1.77 1.07c-.46.17-1.26.355-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.77-1.07 4.92 4.92 0 0 1-1.07-1.77c-.17-.46-.355-1.26-.41-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.07-1.77 4.92 4.92 0 0 1 1.77-1.07c.46-.17 1.26-.355 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0 2.16c-3.154 0-3.52.012-4.76.07-1.027.048-1.583.217-1.95.36a2.755 2.755 0 0 0-1 .65 2.755 2.755 0 0 0-.65 1c-.143.367-.312.923-.36 1.95-.058 1.24-.07 1.606-.07 4.76s.012 3.52.07 4.76c.048 1.027.217 1.583.36 1.95.146.386.368.729.65 1a2.755 2.755 0 0 0 1 .65c.367.143.923.312 1.95.36 1.24.058 1.606.07 4.76.07s3.52-.012 4.76-.07c1.027-.048 1.583-.217 1.95-.36.386-.146.729-.368 1-.65a2.755 2.755 0 0 0 .65-1c.143-.367.312-.923.36-1.95.058-1.24.07-1.606.07-4.76s-.012-3.52-.07-4.76c-.048-1.027-.217-1.583-.36-1.95a2.755 2.755 0 0 0-.65-1 2.755 2.755 0 0 0-1-.65c-.367-.143-.923-.312-1.95-.36-1.24-.058-1.606-.07-4.76-.07zM12 6.46a5.54 5.54 0 1 1 0 11.08 5.54 5.54 0 0 1 0-11.08zm0 9.14a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2zm6.76-9.58a1.296 1.296 0 1 1-2.592 0 1.296 1.296 0 0 1 2.592 0z"/>
            </svg>
            Instagram
        </a>

        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#010101" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.625 7.579c-1.425 0-2.625-1.2-2.625-2.625V2.25H12v12.75a2.25 2.25 0 1 1-2.25-2.25c.225 0 .45.03.66.09V10.3A4.5 4.5 0 1 0 14.25 18V9.377a5.257 5.257 0 0 0 3.375 1.226v-3.024z"/>
            </svg>
            TikTok
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.46 6c-.77.34-1.6.56-2.46.66a4.33 4.33 0 0 0 1.9-2.38 8.59 8.59 0 0 1-2.73 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.1 4.86a4.28 4.28 0 0 0 1.32 5.71 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.29 4.29 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.57 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.73 8.73 0 0 0 24 5.57a8.46 8.46 0 0 1-2.54.7z"/>
            </svg>
            Twitter
        </a>

        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.6v1.71h.05c.5-.95 1.7-1.95 3.45-1.95 3.7 0 4.4 2.45 4.4 5.6V21h-4v-5.65c0-1.35-.03-3.1-1.9-3.1s-2.2 1.48-2.2 3v5.75H9z"/>
            </svg>
            LinkedIn
        </a>
</nav>


      <section className="newsletter">
        <h2>Subscribe to our newsletter</h2>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Join</button>
        </form>
      </section>
        </div>
    
      <div className="footer-bottom">
        Contact Us | ACRES &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
