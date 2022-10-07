import styled, { css } from "styled-components";
import { Colors } from "../../utils/colors";
import { isMobile } from "react-device-detect";

const TagsAnimated = (props) => {
    return ( 
        <Container top={props.top} right={props.right} position={props.position}>
            <Content type={props.type}>
                <span>
                    {props.text}
                </span>
            </Content>
        </Container>
     );
}
 
export default TagsAnimated;

const Container = styled.div((props) => css`
    position: absolute;
    top: ${isMobile? props.top - 10 : props.top}%;
    right: ${isMobile? props.position == 'right' ? props.right - 17 : props.right + 10 : props.right}%;
`)
const Content = styled.div((props) => css`
    background: white;
    width: ${isMobile?  '5rem' : '10rem'};
    height: ${isMobile?  '2rem' : '3rem'};
    font-size: ${isMobile? '0.6rem' : '1rem'};
    border-radius: 10rem;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0 ${isMobile? '0.3rem' : '7px'} rgb(255 255 255 / 20%);
    animation-name: ${props.type == 'up' ? 'tagAnimatedOne' : 'tagAnimatedTwo'};
    animation-duration: ${(Math.random() * 2) + 5}s;//2s;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    span {
        color: ${Colors.primary};
        font-weight: bold;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10+ */
        user-select: none;
    }
`)