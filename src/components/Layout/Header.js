import { Link } from "react-router-dom";
import companyLogo from "./../../components/images/companyLogo.png"
import "./../styles/Header.css";

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={companyLogo} height="72" alt="company logo" />
            </div>
            <div className="header_menu">
                <div className="menu_item">
                    <Link to="/" className="link">
                        Home
                    </Link>
                </div>
                <div className="menu_item">
                    <Link to="/aboutus" className="link">
                        About Us
                    </Link>
                </div>
                <div className="menu_item">Services</div>
                <div className="menu_item">
                    <Link to="/careers" className="link">
                        Careers
                    </Link>
                </div>
                <div className="menu_item">
                    <Link to="/contact" className="link">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;