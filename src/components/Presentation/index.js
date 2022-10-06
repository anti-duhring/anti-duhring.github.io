import styled, { css } from "styled-components";
import { useContext } from "react";
import { LanguageContext } from "../../Context/language";
import photoURL from '../../assets/home.png'
import { isMobile } from "react-device-detect";
import {Colors} from '../../utils/colors'

const Presentation = () => {
    const {
        title,
        language
    } = useContext(LanguageContext)

    return ( 
        <Container>
            <TitleContainer>
                <Title>
                    {title[language].split('Mateus')[0]}<Name>Mateus</Name>
                    {title[language].split('Mateus')[1]}
                </Title>
            </TitleContainer>
            <PhotoContainer>
                <Photo src={photoURL} />
            </PhotoContainer>
        </Container>
     );
}
 
export default Presentation;

const Container = styled.section``
const TitleContainer = styled.div`
    text-align: ${isMobile? 'start': 'center'};
    display: flex;
    justify-content: center;
`
const Title = styled.p`
    color: ${Colors.primary};
    font-weight: 700;
    font-size: 2rem;
    width: ${isMobile? '90%' : '80%'};
`
const Name = styled.span`
    color: ${Colors.secondaryBlue};
`
const Photo = styled.img((props) => css`
    width: ${isMobile? '100%' : '60%'};
`)
const PhotoContainer = styled.div`
    display: flex;
    justify-content: center;

`
