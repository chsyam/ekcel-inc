import "./../styles/Footer.css";
import companyLogo from "./../../components/images/companyLogo.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <div className="footer">
            <div className="footer_sections">
                <div className="column">
                    <img src={companyLogo} height="80" alt="Company Logo" />
                </div>
                <div className="column">
                    <div className="column_head">Get in Touch</div>
                    <div className="address">
                        Ekcel Technologies Inc.<br />
                        1400 Preston Rd,<br />
                        Suite # 400,<br />
                        Plano, Tx-75093, USA.<br />
                        <span>Phone : </span>+1 469-699-8202<br />
                        <span>Fax : </span>+1 469-699-8202<br />
                        <span>Email : </span> info@ekcelinc.com<br />
                    </div>
                </div>
                <div className="column">
                    <div className="column_head">Services</div>
                    <div className="column_menu_item">About Us</div>
                    <div className="column_menu_item">Tech - 360°</div>
                    <div className="column_menu_item">Talent Transformation</div>
                    <div className="column_menu_item">Continuous Improvement & Support</div>
                    <div className="column_menu_item">Blogs</div>
                    <div className="column_menu_item">Careers</div>
                </div>
                <div className="column4">
                    <div className="column_head">Subscribe</div>
                    <div style={{ fontSize: "13px" }}>
                        Join our newsletter to stay up to date on features and releases.
                    </div>
                    <div className="footer_form">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                    <div className="consent">
                        By subscribing to our newsletter, you agree to our Privacy Policy and provide consent to receive updates from our company.
                    </div>
                </div >
            </div>
            <div className="social_media">
                <div className="policies">
                    <div>@ 2023 Relume. All rights reserved.</div>
                    <div>Privacy Policy</div>
                    <div>Terms of Service</div>
                    <div>Cookies Settings</div>
                </div>
                <div className="icons_section">
                    <div className="icon"><FaFacebook /></div>
                    <div className="icon"><FaTwitter /></div>
                    <div className="icon"><FaLinkedin /></div>
                    <div className="icon"><FaInstagram /></div>
                    <div className="icon"><FaYoutube /></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;