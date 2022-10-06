import Contact from "../../components/Contact";
import ImageBox from "../../components/ImageBox";
import LangSelect from "../../components/LangSelect";
import Presentation from "../../components/Presentation";
import Projects from "../../components/Projects";
import { useState } from "react";

const Home = () => {
    const [showImage, setShowImage] = useState(false);
    const [image, setImage] = useState('')

    return ( 
        <div>
            <ImageBox
                showImage={showImage}
                setShowImage={setShowImage}
                image={image}
                setImage={setImage}
            />
            <LangSelect />
            <Presentation />
            <Contact />
            <Projects
                showImage={showImage}
                setShowImage={setShowImage}
                image={image}
                setImage={setImage}
            />
        </div>
     );
}
 
export default Home;