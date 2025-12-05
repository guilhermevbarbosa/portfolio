import Certifications from "./PortfolioAreas/certifications"
import Education from "./PortfolioAreas/Education"
import Experiences from "./PortfolioAreas/Experiences"
import Habilities from "./PortfolioAreas/Habilities"
import Profile from "./PortfolioAreas/Profile"

const About = () => {
    return (
        <div className="about">
            <div className="container-limiter">
                <Profile />
                <Certifications />
                <Habilities />
                <Experiences />
                <Education />
            </div>
        </div>
    )
}

export default About