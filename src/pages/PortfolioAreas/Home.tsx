import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

import '../../assets/scss/PortfolioAreas/Home.scss';

const Home = () => {
    return (
        <section className="home">
            <div className="pic-area">
                <div className="profile-pic"></div>

                <div className="profile-details">
                    <p className="name">Guilherme Vinicius Barbosa</p>
                    <p className="area-text">Desenvolvedor Web | Software Engineer</p>

                    <div className="social-links">
                        <a title="Linkedin link" href="https://www.linkedin.com/in/guilhermevbarbosa/" target="_blank" rel="noopener noreferrer">
                            <CiLinkedin />
                        </a>

                        <a title="Github link" href="https://github.com/guilhermevbarbosa" target="_blank" rel="noopener noreferrer">
                            <FiGithub />
                        </a>
                    </div>
                </div>
            </div>

            <div className="scroll-animation"></div>
        </section>
    )
}

export default Home