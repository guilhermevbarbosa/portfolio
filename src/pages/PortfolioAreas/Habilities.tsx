import "../../assets/scss/PortfolioAreas/Habilities.scss";

import SkillCard from "../../components/SkillCard";
import { Skill } from "../../types/Skill";
import Colors from "../../variables/Colors";
import icons from "../../variables/IconsImport";

const skills: Skill[] = [
    {
        icon: { name: icons.javascript, color: Colors.skills.javascript },
        skillName: 'JavaScript'
    },
    {
        icon: { name: icons.typescript, color: Colors.skills.typescript },
        skillName: 'TypeScript'
    },
    {
        icon: { name: icons.react, color: Colors.skills.react },
        skillName: 'React'
    },
    {
        icon: { name: icons.html, color: Colors.skills.html5 },
        skillName: 'HTML'
    },
    {
        icon: { name: icons.css, color: Colors.skills.css },
        skillName: 'CSS'
    },
    {
        icon: { name: icons.sass, color: Colors.skills.sass },
        skillName: 'SCSS'
    },
    {
        icon: { name: icons.storybook, color: Colors.skills.storybook },
        skillName: 'Storybook'
    },
    {
        icon: { name: icons.angular, color: Colors.skills.angular },
        skillName: 'Angular 2+'
    },
    {
        icon: { name: icons.mysql, color: Colors.skills.mysql },
        skillName: 'MySQL'
    },
    {
        icon: { name: icons.git, color: Colors.skills.git },
        skillName: 'Git'
    },
    {
        icon: { name: icons.github, color: Colors.skills.github },
        skillName: 'GitHub'
    },
]

const Habilities = () => {
    return (
        <section className="mod-section">
            <div className="title align-center">
                <h3>Habilidades</h3>
            </div>

            <div className="skills">
                <div className="container">
                    {skills.map((item) => (
                        <SkillCard
                            key={crypto.randomUUID()}
                            icon={{ name: item.icon.name, color: item.icon.color }}
                            skillName={item.skillName} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Habilities