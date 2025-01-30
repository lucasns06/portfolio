import Lottie from "lottie-react";
import paperline from "../img/paperline.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
const Paper = () => {
    const style = {
      width: 128,
    };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const paper = document.querySelector(".paper");

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: paper,
        toggleActions: "play none none none",
        start: "bottom bottom",
      },
      defaults:{
        duration: 4
      },
      repeat: -1,
    });

    tl.to(paper, { x: '90vw' })
        .to(paper, { scaleX: -1 })
        .to(paper, { x: 0 })
        .to(paper, { scaleX: 1 });
  }, []);
  return (
    <Lottie
      className="paper"
      animationData={paperline}
      loop={true}
      style={style}
    />
  );
};

export default Paper;
