import styled, { css } from "styled-components";
import { useContext } from "react";
import { LanguageContext } from "../../Context/language";
import photoURL from '../../assets/home_empty.png'
import { isMobile } from "react-device-detect";
import {Colors} from '../../utils/colors'
import TagsAnimated from "../TagsAnimated";

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
                <div className="dot dotOne"></div>
                <div className="dot dotTwo"></div>
                <div className="dot dotThree"></div>
                <div className="dot dotFour"></div>
                <TagsAnimated 
                    text={'React Native'} 
                    top={50} 
                    right={30} 
                    type={'up'}
                    position={'right'}
                />
                <TagsAnimated 
                    text={'React'} 
                    top={75} 
                    right={32} 
                    type={'down'} 
                    position={'right'}
                />
                <TagsAnimated 
                    text={'TypeScript'} 
                    top={55} 
                    right={62} 
                    type={'down'}
                    position={'left'}
                />
                <TagsAnimated 
                    text={'Python'} 
                    top={83} 
                    right={59} 
                    type={'up'} 
                    position={'left'} 
                />
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
    position: relative;

    .dot {
        content: " ";
        background: ${Colors.primary};
        position: absolute;
        border-radius: 100%;
    }

    .dotTwo {
        width: ${isMobile? '.5rem' : '1rem'};
        height: ${isMobile? '.5rem' : '1rem'};
        top: 23%;
        right: 60%;
        -webkit-animation: dotAnimated 5s infinite linear;    
        animation: dotAnimated 5s infinite linear; 
    }

    .dotOne {
        width: ${isMobile? '.2rem' : '0.6rem'};
        height: ${isMobile? '.2rem' : '0.6rem'};
        top: 60%;
        right: 80%;
        -webkit-animation: dotAnimatedReverse 3s infinite linear;    
        animation: dotAnimatedReverse 3s infinite linear; 
    }
    .dotThree {
        width: ${isMobile? '.2rem' : '0.6rem'};
        height: ${isMobile? '.2rem' : '0.6rem'};
        top: 30%;
        right: ${isMobile? '30%' : '40%'};
        -webkit-animation: dotAnimatedReverse 3s infinite linear;    
        animation: dotAnimatedReverse 3s infinite linear; 
    }

    .dotFour {
        width: ${isMobile? '.5rem' : '1rem'};
        height: ${isMobile? '.5rem' : '1rem'};
        top: ${isMobile? '60%' : '70%'};
        right: 25%;
        -webkit-animation: dotAnimated 5s infinite linear;    
        animation: dotAnimated 5s infinite linear; 
    }
`
