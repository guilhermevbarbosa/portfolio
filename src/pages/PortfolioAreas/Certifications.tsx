import "../../assets/scss/PortfolioAreas/Experiences.scss";

import { Experience } from "../../types/Experience";
import ExperienceCard from "../../components/ExperienceCard";

const certifications: Experience[] = [
  {
    companyClass: 'aws-cloud-practitioner',
    companyName: 'AWS Certified Cloud Practitioner',
    xpArea: 'Amazon - AWS - Certificação',
    xpDescription: 'Os profissionais que obtêm esta certificação possuem uma compreensão fundamental dos serviços de TI e de seus usos na AWS Cloud. Eles demonstraram fluência em conceitos de nuvem e conhecimento básico da AWS. Os detentores do badge são capazes de identificar os serviços essenciais da AWS necessários para configurar projetos focados em AWS.',
    xpTime: `Validade: 03/12/2025 - 03/12/2028`,
  },
  {
    companyClass: 'aws-cloud-quest',
    companyName: 'AWS Cloud Quest: Cloud Practitioner - Training Badge',
    xpArea: 'Amazon - AWS - Badge',
    xpDescription: 'Os profissionais que obtêm este badge demonstraram conhecimento básico na construção de soluções utilizando serviços da AWS e possuem uma compreensão fundamental dos conceitos da AWS Cloud. Os detentores da credencial adquiriram experiência prática com serviços de computação, rede, banco de dados e segurança.',
    xpTime: `30/10/2025`,
  },
  {
    companyClass: 'aws-partner',
    companyName: 'AWS Partner: Technical Accredited - Training Badge',
    xpArea: 'Amazon - AWS - Badge',
    xpDescription: 'Os profissionais que obtêm este badge são parceiros da AWS que desenvolveram conhecimento técnico fundamental em computação em nuvem AWS, infraestrutura global, serviços, soluções, migração e segurança.',
    xpTime: `09/10/2025`,
  },
]

const Certifications = () => {
  return (
    <section className="mod-section">
      <div className="title align-center">
        <h3>Certificações e Badges</h3>
      </div>

      <div className="experiences certifications cards-data">
        <div className="container">
          {certifications.map((el) => (
            <ExperienceCard
              key={crypto.randomUUID()}
              companyClass={el.companyClass}
              companyName={el.companyName}
              xpArea={el.xpArea}
              xpDescription={el.xpDescription}
              xpTime={el.xpTime} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications;