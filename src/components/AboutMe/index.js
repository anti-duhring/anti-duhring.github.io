import styled from "styled-components";
import { useContext } from "react";
import {LanguageContext} from '../../Context/language'
import { Colors, layoutSettings } from "../../utils/colors";

const AboutMe = () => {
    const {
        language,
        aboutMe,
        skills
    } = useContext(LanguageContext)

    const Skills = () => {
        return (
            <SkillsContainer>
                <Title>{skills.title[language]}</Title>
                <Body>
                    <SkillsText>
                        <span className="title-skills">Front-end:</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">TypeScript</span>
                        <span className="skill">React</span>
                        <span className="skill">jQuery</span>
                        <span className="skill">CSS</span>
                        <span className="skill">SCSS</span>
                        <span className="skill">HTML5</span>
                    </SkillsText>
                    <SkillsText>
                        <span className="title-skills">Mobile:</span>
                        <span className="skill">React Native</span>
                        <span className="skill">Flutter</span>
                        <span className="skill">Expo/EAS</span>
                        <span className="skill">Android Environment</span>
                    </SkillsText>
                    <SkillsText>
                        <span className="title-skills">Back-end:</span>
                        <span className="skill">Python</span>
                        <span className="skill">Node</span>
                        <span className="skill">API Rest</span>
                        <span className="skill">Flask</span>
                    </SkillsText>
                    <SkillsText>
                        <span className="title-skills">{skills.others[language]}:</span>
                        <span className="skill">GIT</span>
                        <span className="skill">SQLite</span>
                        <span className="skill">Firebase/Firestore</span>
                        <span className="skill">MongoDB</span>
                    </SkillsText>
                    <SkillsText>
                        <span className="title-skills">Soft Skills:</span>
                        <span className="skill">{skills.softSkill1[language]}</span>
                        <span className="skill">{skills.softSkill2[language]}</span>
                        <span className="skill">{skills.softSkill3[language]}</span>
                    </SkillsText>
                </Body>
            </SkillsContainer>
        )
    }

    return ( 
        <Container>
            <ContainerBlue>
            <Title>{aboutMe.title[language]}</Title>
            <Body>
                <p>{aboutMe.body[language]}</p>
            </Body>
            <Skills />
            </ContainerBlue>
        </Container>
     );
}
 
export default AboutMe;

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const ContainerBlue = styled.div`
    background-color: ${Colors.secondaryBlue};
    color: white;
    padding: 1.5rem;
    padding-top: 0;
    width: 90%;
    border-radius: ${layoutSettings.borderRadius};
    margin-top: -13rem;
`
const Title = styled.p`
    font-size: ${layoutSettings.fontSizeTitle};
    font-weight: 700;
    text-align: center;
`
const Body = styled.div``
const SkillsContainer = styled.div``
const SkillsText = styled.p`
    word-break: break-word;
    /*line-height: 2rem;*/
    .skill {
        background-color: #ffffff14;
        border-radius: 5px;
        color: #ffffff8f;
        margin-right: .5rem;
        margin-bottom: .2rem;
        padding: .3rem .5rem;
        display: inline-block;
    }
    .title-skills {
        margin-right: .5rem;
    }
`