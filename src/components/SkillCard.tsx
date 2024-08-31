import "../assets/scss/components/SkillCard.scss";
import { Skill } from "../types/Skill";

const SkillCard = ({ icon, skillName }: Skill) => {
    const { name: Icon, color } = icon;

    return (
        <div className="skill">
            <Icon style={{ color }} />
            <p className="skill-title">{skillName}</p>
        </div >
    )
}

export default SkillCard