import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Demo from "./Components/Demo";
import Schedule from "./Components/Schedule";
import Footer from "./Components/Footer";

const GoPractice = () => {
  const { state } = useLocation();
  const { listData, roomData, listName, practiceId, isEnter } = state;
  const [speech, setSpeech] = useState({
    text: "Click 'START'",
    trigger: false,
  });
  const [slide, setSlide] = useState(listData[0]);
  const [duration, setDuration] = useState(slide.duration);
  const [room, setRoom] = useState(roomData);
  const [started, setStarted] = useState(false);

  return (
    <>
      <Header />
      <Main>
        <Content>
          <Box>
            <Title primary>{speech.text}</Title>
          </Box>
          <Box primary>
            <Demo
              slide={slide}
              roomData={room}
              updateRoom={setRoom}
              setSpeech={setSpeech}
              started={started}
            />
            <Schedule
              slide={slide}
              duration={duration}
              setDuration={setDuration}
              listData={listData}
              started={started}
              listName={listName}
            />
          </Box>
        </Content>
      </Main>
      <Footer
        speech={speech}
        setSpeech={setSpeech}
        listData={listData}
        setSlide={setSlide}
        roomData={room}
        setDuration={setDuration}
        started={started}
        setStarted={setStarted}
        listName={listName}
        practiceId={practiceId}
        isEnter={isEnter}
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
    padding: 62px 10px 114px 10px;
  } ;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 1.5px;
  line-height: 32px;
  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 24px 0px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    letter-spacing: 1px;
    padding: 16px 0px;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.primary ? "80%" : "15%")};
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    align-items: start;
  }
`;
