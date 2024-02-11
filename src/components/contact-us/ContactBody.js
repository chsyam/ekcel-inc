import "./contact-us.css"
import EnvelopeSVG from "../svgs/EnvelopeSVG";
import LocationSVG from "../svgs/LocationSVG";
import PhoneSVG from "../svgs/PhoneSVG";
import ContactForm from "./ContactForm";

export default function ContactBody() {
    return (
        <div>
            {/* <div className="banner">Contact Us</div> */}
            <div>
                <ContactForm />
            </div>
            <div className="contact-cards">
                <div className="card-item">
                    <div className="card-icon">
                        <EnvelopeSVG />
                    </div>
                    <div className="card-head">Mail Here</div>
                    <div className="card-value" style={{ color: "#10d1e3" }}>admin@ekcelinc.com</div>
                </div>
                <div className="card-item">
                    <div className="card-icon">
                        <LocationSVG />
                    </div>
                    <div className="card-head">Visist Here</div>
                    <div className="card-value">1212 Corporate Dr, Suite 555,
                        Irving, TX - 75038
                    </div>
                </div>
                <div className="card-item">
                    <div className="card-icon">
                        <PhoneSVG />
                    </div>
                    <div className="card-head">Call Here</div>
                    <div className="card-value">+1 214-257-8246</div>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.4456451617434!2d-96.79401539999999!3d33.018387800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c23ad644c86d1%3A0xe091e097bbe464a8!2s1400%20Preston%20Rd%20STE%20400%2C%20Plano%2C%20TX%2075093%2C%20USA!5e0!3m2!1sen!2sin!4v1707554926906!5m2!1sen!2sin" title="map" style={{ width: "96%", height: "400px", margin: "1% 1% 1% 2%", border: "2px solid gray" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}