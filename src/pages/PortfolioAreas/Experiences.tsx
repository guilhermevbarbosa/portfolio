import ExperienceCard from "../../components/ExperienceCard";
import { Experience } from "../../types/Experience";
import "../../assets/scss/PortfolioAreas/Experiences.scss";

const experiences: Experience[] = [
    {
        companyClass: 'gft',
        companyName: 'GFT',
        xpArea: 'Desenvolvedor Front-end',
        xpDescription: 'Desenvolvedor Front-end atuando terceirizado em projetos de desenvolvimento web para o Bradesco.',
        xpTime: 'ago de 2024 - o momento'
    },
    {
        companyClass: 'frt',
        companyName: 'fri.to/frt',
        xpArea: 'Desenvolvedor Front-end',
        xpDescription: ` <p>
                        Desenvolvedor Front-end atuando terceirizado em projetos
                        de desenvolvimento web para o Bradesco. Atuação com
                        JavaScript, Typescript, HTML, SCSS, Angular e Storybook
                        em bibliotecas de componentes, sites, portais, landing
                        pages e Design Systems.
                      </p>

                      <p>
                        Atuação em diversos projetos, desde páginas
                        institucionais, landing pages de apresentação e
                        incentivo de produtos e campanhas, componentes do app
                        Bradesco, sites relacionadas a Àgora, Next, Open
                        Finance, MEI, Bravoz e BAC (antigo BAC Florida Bank e
                        agora Bradesco Bank), adições e refatorações em páginas
                        do portal principal.
                      </p>

                      <p>
                        Atuei no desenvolvimento da biblioteca de componentes, o
                        Design System do Bradesco, utilizada em todo ecossistema
                        Bradesco, biblioteca essa compatível com todas as
                        tecnologias e usada em todas as vertentes, apps e sites
                        do banco.
                      </p>

                      <p>
                        Atuei no desenvolvimento ainda em projetos de landing
                        pages, páginas promocionais e sites de diversas marcas
                        como Fini, Jundiá, Yoki, Nazca Grupy Kids, site
                        principal da
                        <a target="_blank" href="https://fri.to">Fri.to</a> e
                        <a target="_blank" href="https://frt.digital/">FRT</a>.
                      </p>`,
        xpTime: 'set de 2019 - ago de 2024 - 4 anos e 11 meses'
    },
    {
        companyClass: 'senac',
        companyName: 'Senac',
        xpArea: 'Desenvolvedor Front-end',
        xpDescription: `
        <p>
                        Desenvolvimento de aplicações web em HTML, CSS, Ionic,
                        JavaScript, Angular e Java Spring.
                      </p>

                      <p>
                        Desenvolvimento do site do CIT Senac e do painel
                        administrativo para gerenciamento do site em tempo real,
                        utilizando Angular 5, Firebase Realtime Database, Cloud
                        Storage e Cloud Functions.
                      </p>

                      <p>
                        Desenvolvimento de uma plataforma para a área de
                        permanêcia do Senac para armazenar e atender
                        reclamações, enviar respostas para os setores
                        responsáveis e permitir a interação total via
                        plataforma.
                      </p>

                      <p>
                        Participação no desenvolvimento de uma plataforma de
                        eventos francesa utilizando Angular 5, Ionic 3.
                      </p>`,
        xpTime: 'set de 2017 - set de 2019 - 2 anos'
    },
]

const Experiences = () => {
    return (
        <section className="mod-section">
            <div className="title align-center">
                <h3>Experiências</h3>
            </div>

            <div className="experiences cards-data">
                <div className="container">
                    {experiences.map((xp) => (
                        <ExperienceCard
                            key={crypto.randomUUID()}
                            companyClass={xp.companyClass}
                            companyName={xp.companyName}
                            xpArea={xp.xpArea}
                            xpDescription={xp.xpDescription}
                            xpTime={xp.xpTime} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experiences