import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import OpeningsList from "./OpeningsList";
import "./careers.css"

export default function Careers() {
    return (
        <div>
            <Header />
            <div className="careers">
                <div className="info">
                    Ekcel INC is excited to present some of best IT jobs in the country. United IT Solutions works primarily with large Fortune 1000 companies,
                    therefore giving you exposure to the best companies and the most current technologies. We look forward to discussing your next opportunity.
                </div>
                <div className="list_head">Hot Openings</div>
                <div className="apply">
                    <OpeningsList />
                    <div style={{ fontSize: "20px", fontWeight: "600" }}>Not Ready to Apply?</div>
                    <div style={{ fontSize: "14px", margin: "5px" }}>Join our talent pool and we'll reach out when a job fits your skills.</div>
                    <div>
                        <button>Submit Resume</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}