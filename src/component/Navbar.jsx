import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../../programmer (1).png" alt="Logo" className="logo" />
        <span className="logo-text" onClick={()=>{
          console.log("Home");
        }}>CodeFactory</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li className="dropdown">
          <a href="#pages">Courses</a>
          <ul className="dropdown-menu">
            <li>
              <a href="#page1">DSA Batch</a>
            </li>
            <li>
              <a href="#page2">Web Development</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Contact Us</a>
        </li>

        <li>
          <a href="#blog">Blog</a>
        </li>
      </ul>
      <button className="get-in-touch">Get in Touch</button>
    </nav>
  );
};

export default Navbar;
