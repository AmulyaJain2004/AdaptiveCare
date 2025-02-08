import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>The agency for impatient brands®</h2>
      </div>

      <div className="footer-section">
        <div>
          <h3>LONDON</h3>
          <p>newbusiness@agency.com</p>
          <p>+44 20 7989 7571</p>
          <p>Unit 230, Metropolitan Wharf, 70 Wapping Wall, London E1W 3SS</p>
          <a href="#">SEE ON MAP </a>
        </div>
      </div>

      <div className="footer-section">
        <div>
          <h3>BUENOS AIRES</h3>
          <p>buenosaires@agency.com</p>
          <p>+54 6 1769 7549</p>
          <p>Cabildo 4463 1st Floor, Buenos Aires</p>
          <a href="#">SEE ON MAP </a>
        </div>
      </div>

      <div className="footer-section">
        <h3>WANT TO BE THE SMARTEST IN YOUR OFFICE?</h3>
        <a href="#">SIGN UP FOR OUR NEWSLETTER </a>
        <div className="social-links">
          <a href="#"><i className="fab fa-behance"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}
