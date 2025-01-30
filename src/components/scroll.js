import Lottie from "lottie-react";
import scrollAnimation from '../img/scroll.json';

const Scroll = () => {
    const style = {
        width: 48,
    };

    return (
        <Lottie animationData={scrollAnimation} loop={true} style={style}  />
    );
};

export default Scroll;