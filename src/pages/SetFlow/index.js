import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Select from "./Components/Select";
import List from "./Components/List";
import Footer from "./Components/Footer";
import { EasyPose } from "../../global/ImagePath";
import primaryRoom from "../../assets/Room/1.jpg";

const SetFlow = () => {
  const { state } = useLocation();
  const [list, setList] = useState([
    {
      id: 1,
      engName: "Easy Pose",
      chiName: "簡易坐式",
      imagePath: EasyPose,
      duration: 10,
    },
  ]);
  const [background, setBackground] = useState({
    background: primaryRoom,
    color: "#d7b0a9",
    language: "English",
  });

  useEffect(() => {
    if (state !== null) {
      setList(state.listData);
      setBackground(state.roomData);
    }
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Content>
          <Box>
            <Title>Hi, what would you like to practice today?</Title>
          </Box>
          <Box primary>
            <Select listData={list} add={setList} />
            <List listData={list} updateData={setList} deleteData={setList} />
          </Box>
        </Content>
      </Main>
      <Footer listData={list} roomData={background} />
    </>
  );
};

export default SetFlow;

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
  letter-spacing: 2px;
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
    flex-direction: column-reverse;
    height: auto;
    align-items: start;
  }
`;
