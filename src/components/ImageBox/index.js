import styled, {css} from "styled-components";
import { layoutSettings } from "../../utils/colors";
import { BsFillXCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const ImageBox = (props) => {
    return ( 
        <Container>
            {props.showImage &&
            <>
            <Model>
                <Menu>
                    <IconContext.Provider value={{ color: 'rgba(0,0,0,0.5)',size:'2rem'}}>
                        <div className="menu-button" onClick={() => props.setShowImage(false)}>
                            <BsFillXCircleFill />
                        </div>
                    </IconContext.Provider>
                </Menu>
                <ImageContainer>
                    <a href={props.image} target="_blank" rel="noopener noreferrer"> 
                        <img src={props.image} alt="" className="image-model" />
                    </a>
                </ImageContainer>
            </Model>
            <Overlay onClick={() => props.setShowImage(false)} />
            </>}
        </Container>
     );
}
 
export default ImageBox;

const Container = styled.div``
const Model = styled.div`
    position: fixed;
    top: 10vh;
    left: 5vw;
    z-index: 999;
    background-color: white;
    width: 90vw;
    height: 80vh;
    border-radius: ${layoutSettings.borderRadius};
    padding: .5rem;
`
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 99;
    cursor: pointer;
`
const Menu = styled.div`
    text-align: right;
    display: flex;
    justify-content: flex-end;
    .menu-button {
        cursor: pointer;
        width: 2rem;
    }
    .menu-button:active {
        opacity: .5;
    }
`
const ImageContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    .image-model {
        max-width: 100%;
        max-height: 100%;
        cursor: pointer;
        object-fit: contain;
    }
`