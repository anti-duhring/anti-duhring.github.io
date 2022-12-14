import { useState } from "react";
import styled, {css} from "styled-components";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsAspectRatioFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import {Colors, layoutSettings} from '../../utils/colors'
import { useSwipeable } from "react-swipeable";

const ImageSlider = ({project, showImage, setShowImage, image, setImage}) => {
    const [imgIndex, setImgIndex] = useState(0)
    
    const handleNext = () => {
        setImgIndex(prevIndex => prevIndex + 1 >= project.images.length ? 0 : prevIndex + 1)
    }

    const handlePrev = () => {
        setImgIndex(prevIndex => prevIndex == 0 ?  project.images.length - 1 : prevIndex - 1)
    }

    const handlers = useSwipeable({
        //onSwiped: (eventData) => console.log("User Swiped!", eventData),
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true,
        trackTouch: true,
        delta: 20,
      });

    return ( 
        <IconContext.Provider value={{ color: 'black',size:'2rem'}}>
        <Container className="parent">
            <ProjectImage 
                {...handlers}
                scale={project.config.scaleImage ? 1 : 0} 
                style={{
                    backgroundImage:`linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 25%),url(${project.images[imgIndex]})`,
                    backgroundSize: project.config.resize,
                    backgroundColor: 'white',
                    borderRadius: '5px 5px 0 0'
                }} 
            >
                <SwipeContainer>
                    <SwipeMove hoverIconColor={project.config.iconColor} className="hover-toggle">
                        <div className="left" onClick={(e) => {e.preventDefault(); handlePrev(project.images)}}>
                            <BsFillArrowLeftCircleFill />
                        </div>
                        <div className="right" onClick={() => handleNext(project.images)}>
                            <BsFillArrowRightCircleFill/>
                        </div>
                    </SwipeMove>
                    <SwipeDots>
                        {project.images.map((item, index) => {
                            return (
                                <Dot 
                                    key={index} 
                                    activeIndex={imgIndex} 
                                    index={index}
                                    onClick={() => setImgIndex(index)}
                                    className="hover-toggle"
                                >
                                    <div className="inner-dot">

                                    </div>
                                </Dot>
                            )
                        })}
                    </SwipeDots>
                    <SwipeFullscreen
                        onClick={() => {
                            setImage(project.images[imgIndex])
                            setShowImage(true)
                        }}
                        className="hover-toggle"
                    >
                        <BsAspectRatioFill />
                        
                    </SwipeFullscreen>
                </SwipeContainer>
            </ProjectImage>
        </Container>
        </IconContext.Provider>
     );
}
 
export default ImageSlider;

const Container = styled.div`
`

const ProjectImage = styled.div((props) => css`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    transform: scale(${props.scale? '1.2' : '1'});
    position: relative;
`)
const SwipeContainer = styled.div`
    display: flex;
    justify-content: center;
`
const SwipeMove = styled.div`
    top:50%;
    width: 90%;
    position: absolute;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;

    div {
        cursor: pointer;
        border-radius: 100%;
    }
    div:active {
        opacity: .8;
    }
    div svg {
        transition: .2s;
        //background-color: rgba(255,255,255,1);
        border-radius: 100%;
        opacity: .3;
        padding: 1px;
    }
    div:hover svg{
        opacity: .8;
    }
`
const SwipeDots = styled.div`
    position: absolute;
    bottom: 5%;
    z-index: 99;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    width: 100%;
    column-gap: .5rem;
    justify-content: center;
`
const Dot = styled.div((props) => css`
    width: 1rem;
    height: 1rem;
    background-color: rgba(0,0,0,0.5);
    border-radius: 100%;
    padding: .2rem;
    cursor: pointer;

    &:hover .inner-dot {
        background-color: rgba(255,255,255,0.5)
    }
    .inner-dot {
        background-color: ${props.index == props.activeIndex ? 'white!important' : 'transparent'};
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }
`)
const SwipeFullscreen = styled.div`
    position: absolute;
    top: 0%;
    right: 5%;
    cursor: pointer;

    &:hover svg{
        opacity: .8;
    }

    svg {
        transition: .2s;
        opacity: .3;
    }

`