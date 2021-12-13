import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const Slider = ({ position, setPosition, images }) => {
  //Framer animation
  const controls = useAnimation();
  const onSlideStart = () => {
    controls.start("anim");
  };
  //box-shadow animation
  const shadowVariants = {
    anim: {
      boxShadow: [
        "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        "0px 0px 40px 20px rgba(0, 0, 0, 0.2)",
      ],
      transition: { ease: "easeOut", duration: 0.8 },
    },
  };
  const swipeMe = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Right") {
        if (position > 0) {
          setPosition(position - 1);
        }
      }
      if (eventData.dir === "Left") {
        if (position < images.length - 1) {
          setPosition(position + 1);
        }
      }
    },
  });
  return (
    <Container
      position={position}
      setPosition={setPosition}
      images={images}
      variants={shadowVariants}
      animate={controls}
      {...swipeMe}>
      {images.map((img, index) => (
        <Slide
          onAnimationStart={onSlideStart}
          key={index}
          initial={{ scale: 0 }}
          animate={{
            scale: index === position ? 1 : 0.8,
            left: `${(index - position) * 40}vw`,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}>
          <a href={img.link} target="_blank">
            <img src={img.path} alt={img.alt} />
          </a>
        </Slide>
      ))}
    </Container>
  );
};
const Container = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 70vh;
  top: -35vh;
  left: -20vw;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;
const Slide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    img {
      height: 100%;
    }
  }
`;
export default Slider;
