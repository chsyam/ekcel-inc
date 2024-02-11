export default function OpeningsList() {
    const openingsList = [
        {
            title: "Java Backend Developer",
            postedOn: "21st Oct 2023",
            location: "Hyderabad, India",
            type: "Full Time",
            salary: "15L - 20L",
            experienced: "3 Years",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ..."
        }, {
            title: "Mern Stack Developer",
            postedOn: "31st Jan 2024",
            location: "Hyderabad, India",
            type: "Remote",
            salary: "16L",
            experienced: "2 Years",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ..."
        }, {
            title: "Python Developer",
            postedOn: "31st Jan 2024",
            location: "Hyderabad, India",
            type: "Full Time",
            salary: "16L",
            experienced: "2 Years",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ..."
        }, {
            title: "React Developer",
            postedOn: "31st Jan 2024",
            location: "Hyderabad, India",
            type: "Full Time",
            salary: "16L",
            experienced: "2 Years",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ..."
        }, {
            title: "React Developer",
            postedOn: "31st Jan 2024",
            location: "Hyderabad, India",
            type: "Full Time",
            salary: "16L",
            experienced: "2 Years",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ..."
        }
    ];
    return (
        <div className="list">
            <div>
                {
                    openingsList.map((item, index) => {
                        return (
                            <div key={index} className="jobItem">
                                <div className="firstRow">
                                    <div className="title">{item.title}</div>
                                    <div className="metaInfo">
                                        <li className="postedOn">{item.postedOn}</li>
                                        <li className="type">{item.type}</li>
                                        <li className="location">{item.location}</li>
                                    </div>
                                </div>
                                <div className="description">{item.description}</div>
                                <div>CTC : <span className="salary">{item.salary}</span></div>
                                <div>Experience Required : <span className="experienced">{item.experienced}</span></div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}