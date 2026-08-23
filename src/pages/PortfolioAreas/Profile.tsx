import "../../assets/scss/PortfolioAreas/Profile.scss";

import { TimeCalculator } from "../../static/TimeCalculator";
import icons from "../../variables/IconsImport";

const Profile = () => {
    const { email: Email, linkedin: Linkedin, whatsapp: Whatsapp } = icons;
    const age = TimeCalculator.calculateAge("1999-02-18");

    return (
        <section className="profile">
            <div
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
                className="title"
            >
                <h2>Sobre</h2>
            </div>

            <div className="mod-section">
                <div
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="500"
                    className="bio-text"
                >
                    <p className="text">
                        Olá! Meu nome é Guilherme, tenho {age} anos e moro em São Paulo.
                    </p>

                    <p className="text">
                        Sou graduado em Sistemas para Internet e em Produção Multimídia
                        (Centro Universitário Senac) e Pós-graduado em Projetos Móveis
                        Multiplataforma.
                    </p>

                    <p className="text">
                        Especialista em front‑end, atuo como engenheiro de software com foco em
                        aplicações escaláveis e design systems. Além da experiência em
                        JavaScript, Angular e Storybook, possuo certificação AWS Cloud
                        Practitioner, que reforça meu conhecimento em soluções de nuvem e
                        arquitetura moderna.
                    </p>

                    <div className="contact">
                        <p className="text">Entre em contato!</p>

                        <span className="email text">
                            <Email />
                            <a href="mailto:guilhermevb99@icloud.com">
                                guilhermevb99@icloud.com
                            </a>
                        </span>

                        <span className="linkedin text">
                            <Linkedin />
                            <a
                                href="https://www.linkedin.com/in/guilhermevbarbosa/"
                                target="_blank"
                                rel="noopener"
                            >
                                LinkedIn
                            </a>
                        </span>

                        <span className="whatsapp text">
                            <Whatsapp />
                            <a
                                target="_blank"
                                href="https://wa.me/5511991688635?text=Contato+do+seu+site%21"
                                rel="noopener"
                            >
                                +55 (11) 99168-8635
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
