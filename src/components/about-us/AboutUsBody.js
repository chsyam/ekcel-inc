import Mission from "./../images/mission.jpg"
import Vision from "./../images/vision.jpg"
import ContactUs from "./../images/contact.jpg"
import "./AboutUsBody.css"

export default function AboutUsBody() {
    const sectionsList = [
        {
            image: ContactUs,
            title: "Our Company",
            description: "United IT is a technology-obsessed IT organization with a passion and commitment to helping organizations adapt to changing technology trends faster. \
            We build tailor-made solutions and support with our resources to an exhaustive list of clients worldwide With 15+ years of experience in Innovation, Technology Redefining and Continuous Improvement in \
            areas such as AI & ML, Cloud & Business Analytics, Application Development, RPA & many other areas, United IT has set itself apart in the technology industry as a leader. We work with our \
            partners and clients to anticipate the challenges of the future and create opportunities by proactively creating solutions for the future now and enabling our partners and clients to be more successful."
        },
        {
            image: Mission,
            title: "Our Mission",
            description: "To stay true to our vision and traverse the IT industry with technologies, resources, skills and systems needed to enable our clients with best-in-class services while promoting honesty, transparency & accountability"
        }, {
            image: Vision,
            title: "Our Vision",
            description: "To become a pioneering IT organization on a global scale and help our partners to achieve greater success"
        }
    ];
    return (
        <div>
            <div className="section">
                <div className="image">
                    <img src={sectionsList[0].image} alt="our company" />
                </div>
                <div className="description">
                    <div>{sectionsList[0].title}</div>
                    <div>{sectionsList[0].description}</div>
                </div>
            </div>
            <div className="section">
                <div className="description">
                    <div>{sectionsList[1].title}</div>
                    <div>{sectionsList[1].description}</div>
                </div>
                <div className="image">
                    <img src={sectionsList[1].image} alt="our company" />
                </div>
            </div>
            <div className="section">
                <div className="image">
                    <img src={sectionsList[2].image} alt="our company" />
                </div>
                <div className="description">
                    <div>{sectionsList[2].title}</div>
                    <div>{sectionsList[2].description}</div>
                </div>
            </div>
        </div>
    );
}