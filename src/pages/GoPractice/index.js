import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Demo from "./Components/Demo";
import Schedule from "./Components/Schedule";
import Footer from "./Components/Footer";

const GoPractice = () => {
  const { state } = useLocation();
  const { listData, roomData } = state;
  const [speech, setSpeech] = useState("click 'START' when you are all set.");
  const [slide, setSlide] = useState(listData[0]);
  const [duration, setDuration] = useState(slide.duration);

  return (
    <>
      <Header />
      <Main>
        <Content>
          <Title primary>{speech}</Title>
          <Boxes>
            <Demo slide={slide} roomData={roomData} />
            <Schedule
              slide={slide}
              duration={duration}
              setDuration={setDuration}
            />
          </Boxes>
        </Content>
      </Main>
      <Footer
        speech={speech}
        setSpeech={setSpeech}
        listData={listData}
        setSlide={setSlide}
        roomData={roomData}
        setDuration={setDuration}
      />
    </>
  );
};

export default GoPractice;

// styled components
const Main = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  @media (max-width: 1024px) {
    height: auto;
  }
`;

const Content = styled.div`
  width: 1344px;
  height: 100%;
  margin: 0 auto;
  padding: 78px 0px 114px 0px;
  @media (max-width: 1440px) {
    width: 100%;
    padding: 78px 48px 114px 48px;
  }
  @media (max-width: 1024px) {
    padding: 78px 24px 114px 24px;
  }
  @media (max-width: 768px) {
    padding: 78px 10px 114px 10px;
  } ;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  padding: 40px 0px;
  letter-spacing: 2px;
  line-height: 32px;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 24px 0px;
  }
`;
const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  @media (max-width: 1440px) {
    height: 75%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;
