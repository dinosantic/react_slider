import React, { useState } from "react";
import styled from "styled-components";
//components
import Slider from "./components/Slider";

function App({ images }) {
  const [position, setPosition] = useState(1);

  //Switch slides
  const next = () => {
    if (position < images.length - 1) {
      setPosition(position + 1);
    }
  };
  const previous = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };
  return (
    <>
      <ButtonWrapper>
        <Button onClick={previous} disabled={position === 0 ? true : false}>
          Previous
        </Button>
        <Button
          onClick={next}
          disabled={position === images.length - 1 ? true : false}>
          Next
        </Button>
      </ButtonWrapper>
      <Swipe>
        {position === 0 ? (
          <span style={{ color: "rgb(197, 197, 197)" }}>&#8249;</span>
        ) : (
          <span>&#8249;</span>
        )}{" "}
        Swipe{" "}
        {position === images.length - 1 ? (
          <span style={{ color: "rgb(197, 197, 197)" }}>&#8250;</span>
        ) : (
          <span>&#8250;</span>
        )}
      </Swipe>
      <Main>
        <Row>
          <Slider
            position={position}
            setPosition={setPosition}
            images={images}></Slider>
        </Row>
      </Main>
    </>
  );
}
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Button = styled.button`
  background-color: transparent;
  color: #444;
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: color 0.5s ease-in-out;
  :disabled {
    color: rgb(197, 197, 197);
    cursor: unset;
  }
`;
const Swipe = styled.p`
  color: #444;
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  @media (min-width: 769px) {
    display: none;
  }
  span {
    transition: color 0.5s ease-in-out;
  }
`;
const Main = styled.div`
  width: 100vw;
  height: 90vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Row = styled.div`
  position: relative;
  padding: 0;
`;

export default App;
