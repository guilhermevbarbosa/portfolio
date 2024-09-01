import "../assets/scss/components/ExperienceCard.scss";
import { Experience } from "../types/Experience";

const ExperienceCard = ({ companyClass, xpArea, companyName, xpTime, xpDescription }: Experience) => {
    return (
        <div data-aos="zoom-out"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500" className={`experience ${companyClass}`}>
            <div className="brand-area">
                <em className={`${companyClass}-logo`}></em>
                {companyClass === 'frt' &&
                    <em className='frito-logo'></em>
                }
            </div>

            <div className="experience-details">
                <h3 className="experience-area">{xpArea}</h3>

                <div className="brand-details">
                    <h3 className="experience-brand">{companyName}</h3>
                    <p className="experience-time">{xpTime}</p>
                </div>

                <div className="experience-description">
                    <p dangerouslySetInnerHTML={{ __html: xpDescription }}></p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard