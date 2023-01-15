import  contact  from "../assets/contact.png"
const Header = () => {
  return (
    <nav
      className=" navbar-light container-fluid "
      style={{ backgroundColor: "#F5EEC2" }}
    >
      <a className="navbar-brand ps-5" href="#">
        <img
          src={contact}
          alt=""
          width="140"
          height="80"
        />
      </a>
    </nav>
  );
};

export default Header;
