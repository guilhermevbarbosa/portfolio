import Experiences from "./PortfolioAreas/Experiences"
import Habilities from "./PortfolioAreas/Habilities"
import Profile from "./PortfolioAreas/Profile"

const About = () => {
    return (
        <div className="about">
            <div className="container-limiter">
                <Profile />
                <Habilities />
                <Experiences />
            </div>
        </div>
    )
}

export default About