import ExperienceCard from "../../components/ExperienceCard"
import { Experience } from "../../types/Experience"
import "../../assets/scss/PortfolioAreas/Experiences.scss"

const educationExperiences: Experience[] = [
    {
        companyClass: 'senac',
        companyName: 'Centro Universitário Senac',
        xpArea: 'Graduação em Sistemas para a Internet',
        xpDescription: `
                      <p>
                        Formado na graduação em Sistemas para a Internet no
                        Centro universitário Senac em Santo Amaro, onde também
                        fui representante de turma durante todo o curso.
                      </p>

                      <p>
                        Atuação com desenvolvimento full-stack em aplicações web
                        e mobile, usando as principais e mais atuais tecnologias
                        do mercado, curso que de maneira muito prática te insere
                        na área do TI, onde se ensina todas as áreas, desde de
                        banco de dados até Front-end, Back-end, Mobile, Design e
                        Administração de negócios.
                      </p>`,
        xpTime: '2019 - 2021 - 2 anos e 6 meses'
    },
    {
        companyClass: 'senac',
        companyName: 'Centro Universitário Senac',
        xpArea: 'Graduação em Produção Multimídia',
        xpDescription: `
              <p>
                Formado na graduação em Produção Multimídia no Centro
                universitário Senac em Santo Amaro.
              </p>

              <p>
                Curso que abrange grande parte do mercado digital,
                capacita para ser um profissional multi áreas, rotinas
                de cinema, gravação, design, desenho, diagramação,
                administração e código, além de muitos outros
                conhecimentos adquiridos durante o curso que me
                capacitaram a atuar em diversas áreas e me inseriram no
                cenário de códigos da web.
              </p>`,
        xpTime: '2017 - 2018 - 2 anos'
    },
    {
        companyClass: 'descomplica',
        companyName: 'Descomplica faculdade digital',
        xpArea: 'Pós-Graduação em Projetos de Aplicativos Móveis Multiplataforma',
        xpDescription: ` <p>
                        Formado na pós-graduação em Projetos de Aplicativos
                        Móveis Multiplataforma.
                      </p>

                      <p>
                        O curso é direcionado para atuar profissionalmente no
                        setor de projetos de aplicativos móveis multiplataforma.
                      </p>`,
        xpTime: '2022 - 2023 - 1 ano'
    },
]

const Education = () => {
    return (
        <section className="mod-section">
            <div className="title align-center">
                <h3>Educação</h3>
            </div>

            <div className="experiences cards-data">
                <div className="container">
                    {educationExperiences.map((xp) => (
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

export default Education