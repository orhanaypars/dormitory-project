import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  return (
    <div id="navbar">
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden lg:flex">
        <DesktopNavbar />
      </div>
    </div>
  );
}

export default Navbar;
