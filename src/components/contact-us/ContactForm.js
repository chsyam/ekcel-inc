import ContactImage from "./../images/contact.jpg"

export default function ContactForm() {
    return (
        <div className="contact-form">
            <div className="form-head">Get In Touch With Us</div>
            <div className="form-subhead">Anything On your Mind. We'll Be Glad To Assist You!</div>
            <div className="sections">
                <div className="image">
                    <img src={ContactImage} alt="contact" width="100%" height="90%" style={{ objectFit: "cover" }} />
                </div>
                <div className="form">
                    <form>
                        <div>
                            <label>First Name</label><br />
                            <input required type="text" name="firstName" />
                        </div>
                        <div>
                            <label>Last Name</label><br />
                            <input required type="text" name="lastName" />
                        </div>
                        <div>
                            <label>Email</label><br />
                            <input required type="email" name="email" />
                        </div>
                        <div>
                            <label>Phone</label><br />
                            <input required type="number" />
                        </div>
                        <div>
                            <label>Comments (optional)</label><br />
                            <textarea name="comments" rows="3" cols="54" />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}