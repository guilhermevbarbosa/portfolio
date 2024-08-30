import '../../assets/scss/PortfolioAreas/Home.scss';
import icons from '../../variables/IconsImport';

const Home = () => {
    const { github: GithubIcon, linkedin: LinkedinIcon } = icons;

    return (
        <section className="home">
            <div className="pic-area">
                <div className="profile-pic"></div>

                <div className="profile-details">
                    <p className="name">Guilherme Vinicius Barbosa</p>
                    <p className="area-text">Desenvolvedor Web | Software Engineer</p>

                    <div className="social-links">
                        <a title="Linkedin link" href="https://www.linkedin.com/in/guilhermevbarbosa/" target="_blank" rel="noopener noreferrer">
                            <LinkedinIcon />
                        </a>

                        <a title="Github link" href="https://github.com/guilhermevbarbosa" target="_blank" rel="noopener noreferrer">
                            <GithubIcon />
                        </a>
                    </div>
                </div>
            </div>

            <div className="scroll-animation"></div>
        </section>
    )
}

export default Home