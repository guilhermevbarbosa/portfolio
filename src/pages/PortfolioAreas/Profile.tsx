import "../../assets/scss/PortfolioAreas/Profile.scss";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Profile = () => {
    return (
        <section className="profile">
            <div className="container-limiter">
                <div className="title">
                    <h2>Sobre</h2>
                </div>

                <div className="subsection">
                    <div className="bio-text">
                        <p className="text">
                            Olá! Meu nome é Guilherme, tenho <span id="age"></span> anos e
                            moro em São Paulo.
                        </p>

                        <p className="text">
                            Sou graduado em Sistemas para Internet e em Produção Multimídia
                            (Centro Universitário Senac) e Pós-graduado em Projetos Móveis
                            Multiplataforma.
                        </p>

                        <p className="text">
                            Atuo como desenvolvedor web com JavaScript, Typescript, SCSS, CSS,
                            Angular e Storybook para desenvolver landing pages, sites,
                            sistemas e bibliotecas responsivas.
                        </p>

                        <div className="contact">
                            <p className="text">Entre em contato!</p>

                            <span className="email text">
                                <MdOutlineEmail />
                                <a href="mailto:guilhermevb99@icloud.com">
                                    guilhermevb99@icloud.com
                                </a>
                            </span>

                            <span className="linkedin text">
                                <CiLinkedin />
                                <a href="https://www.linkedin.com/in/guilhermevbarbosa/" target="_blank">
                                    LinkedIn
                                </a>
                            </span>

                            <span className="whatsapp text">
                                <FaWhatsapp />
                                <a target="_blank" href="https://wa.me/5511991688635?text=Contato+do+seu+site%21">
                                    +55 (11) 99168-8635
                                </a>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Profile