import styled from "styled-components";
import { isMobile } from "react-device-detect";
import {Colors} from '../../utils/colors'
import GithubImg from '../../assets/github.png'
import GmailImg from '../../assets/gmail.png'
import LinkedinImg from '../../assets/linkedin.png'
import WppImg from '../../assets/wpp.png'
import AboutMe from "../AboutMe";

const MediaItem = (props) => {
    return (
        <MediaImg>
            <a target="_blank" href={props.link}>
                <ContentMedia>
                    <ContentMediaLeft>
                        <img src={props.img} alt={props.title} className="media-img" />
                    </ContentMediaLeft>
                    {!isMobile && <ContentMediaRight>
                        <span className="title">
                            {props.title}
                        </span>
                        <span className="link">
                            {props.link.replace(/https:\/\//g,'').replace(/http:\/\//g,'').replace(/mailto:/g,'')}
                        </span>
                    </ContentMediaRight>}
                </ContentMedia>
            </a>
        </MediaImg>
    )
}

const Contact = () => {
    return ( 
        <Container>
            <ContainerBlue>
            <MediaFlexbox>
                <MediaItem title="Github" img={GithubImg} link="https://github.com/anti-duhring" />
                <MediaItem title="Email" img={GmailImg} link="mailto:mateus.limavn@gmail.com" />
                <MediaItem title="Linkedin" img={LinkedinImg} link="https://linkedin.com/in/mateus-vinicius-lima/" />
                <MediaItem title="Whatsapp" img={WppImg} link="(81) 988221999" />
            </MediaFlexbox>
            </ContainerBlue>
            <AboutMe />
        </Container>
     );
}
 
export default Contact;

const Container = styled.section`
`
const ContainerBlue = styled.div`
    height: 25rem;
    background-color: ${Colors.primary};
`
const MediaFlexbox = styled.div`
    flex: 1;
    color: white;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 5rem;
`
const MediaImg = styled.div`
    .media-img {
        width: 3rem;
        height: 3rem;
    }
    &:hover .media-img {
        fill: blue;
    }
`
const ContentMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
`
const ContentMediaLeft = styled.div``
const ContentMediaRight = styled.div`
    display: flex;
    flex-direction: column;
    .link {
        color: ${Colors.neutralGray};
        font-size: .8rem;
    }
`