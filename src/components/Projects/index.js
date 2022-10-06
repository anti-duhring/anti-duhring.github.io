import styled, {css} from "styled-components";
import { useContext } from "react";
import { LanguageContext } from "../../Context/language";
import {Colors, layoutSettings} from '../../utils/colors'
import data from '../../data/projects.json'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import ImageSlider from "../ImageSlider";

const Projects = (props) => {
    const {
        language,
        projects
    } = useContext(LanguageContext)

    const ProjectItem = ({project}) => {
        return (
            <ProjectContainer>
                <ProjectImageContainer>
                    <ImageSlider 
                        project={project} 
                        showImage={props.showImage}
                        setShowImage={props.setShowImage}
                        image={props.image}
                        setImage={props.setImage}
                    />
                </ProjectImageContainer>
                <ProjectInfo>
                    <ProjectTitle>
                        {project.title[language]}
                    </ProjectTitle>
                    <ProjectDesc>
                        {project.description[language]}
                        <br />
                        <br />
                        <a className="project-link" href={project.url}>
                            {project.url.replace(/https:\/\//g,'')}
                        </a>
                    </ProjectDesc>
                </ProjectInfo>
            </ProjectContainer>
        )
    }

    return ( 
        <Container>
            <Title>{projects.title[language]}</Title>
            <ProjectsGrid>
                {data.projects.map((item, index) => <ProjectItem key={index} project={item} />)}
            </ProjectsGrid>
        </Container>
     );
}
 
export default Projects

const Container = styled.div`
    padding-bottom: 5rem;
`
const Title = styled.p`
    text-align: center;
    font-size: ${layoutSettings.fontSizeTitle};
    color: ${Colors.primary};
    font-weight: 700;
`
const ProjectsGrid = styled.div`
    margin: 5rem 1rem 0 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit,minmax(auto,30rem));
`
const ProjectContainer = styled.div`
    text-align: center;
    height: 30rem;
    display: flex;
    flex-direction:column;
`
const ProjectTitle = styled.div`
    color: white;
    flex: 1;
    font-weight: 700;
`
const ProjectDesc = styled.div`
    color: ${Colors.neutralGray} ;
    font-size: .8rem;
    flex: 3;
    .project-link {
        color: white;
    }
`
const ProjectInfo = styled.div`
    flex: 1;
    background-color: ${Colors.primary};
    padding: .5rem;
    border-radius: 0 0 ${layoutSettings.borderRadius} ${layoutSettings.borderRadius};
    margin-top: -1px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const ProjectImageContainer = styled.div`
    flex: 3;
    .parent {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
`
