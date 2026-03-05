

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2>NUBTK PROJECT</h2>
          <p>Crafted with 💙 by Ratul Raha</p>
        </div>

        <div className="footer-section links">
          <h3>Explore</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#service">Service</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} NUBTK Project. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
