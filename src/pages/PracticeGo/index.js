import styled from "styled-components";
import Header from "../../components/Header";
import List from "./Components/List";
import Show from "./Components/Show";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { EasyPose } from "../../global/ImagePath";

const PracticeGo = () => {
  const { state } = useLocation();
  const [slide, setSlide] = useState({
    engName: "Listen carefully, the class will start in 10 seconds...",
    chiName: "",
    imagePath: EasyPose,
    duration: 10,
  });

  return (
    <>
      <Header />
      <Main>
        <Show poses={state} slide={slide} setSlide={setSlide} />
        <List poses={state} />
      </Main>
    </>
  );
};

export default PracticeGo;

// styled components
const Main = styled.div`
  width: 100%;
  position: relative;
`;
