import "../assets/scss/components/SkillCard.scss";
import { Skill } from "../types/Skill";

const SkillCard = ({ icon, skillName }: Skill) => {
    const { name: Icon, color } = icon;

    return (
        <div data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600" className="skill">
            <Icon style={{ color }} />
            <p className="skill-title">{skillName}</p>
        </div >
    )
}

export default SkillCard