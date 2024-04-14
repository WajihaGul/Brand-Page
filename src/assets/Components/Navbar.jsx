const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo here">
          <img src="./images/brandlogo.png" alt="Nike Logo" />
        </div>

        <div>
          <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>

        <button>Login</button>
      </nav>
    </>
  );
};
export default Navbar;
