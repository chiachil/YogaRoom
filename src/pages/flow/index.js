import styled from "styled-components";
import Header from "../../components/Header";
import Select from "./Components/Select";
import List from "./Components/List";
import Footer from "./Components/Footer";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { colorArr, voiceArr } from "../../global/constants/room";
import { LoginContext } from "../../context/userContext";

const SetFlow = () => {
  const { state } = useLocation();
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const [listName, setListName] = useState("");
  const [practiceId, setPracticeId] = useState("");
  const [list, setList] = useState([
    {
      id: 0,
      engName: "Easy Pose",
      chiName: "簡易坐式",
      imagePath: "EasyPose.svg",
      duration: 10,
    },
  ]);

  const [background, setBackground] = useState({
    color: colorArr[0],
    language: voiceArr[0],
  });

  useEffect(() => {
    if (state !== null) {
      setList(state.listData);
      setBackground(state.roomData);
      setListName(state.listName);
      setPracticeId(state.practiceId);
    }
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Content>
          <Box>
            <TitleBox>
              <Title>Practice Name:</Title>
              <Input
                type="type"
                placeholder="e.g. 10 min Core Yoga"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
              ></Input>
            </TitleBox>
          </Box>
          <Box primary>
            <Select listData={list} addData={setList} />
            <List listData={list} updateData={setList} deleteData={setList} />
          </Box>
        </Content>
      </Main>
      <Footer
        listData={list}
        roomData={background}
        listName={listName}
        setListName={setListName}
        practiceId={practiceId}
      />
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
  letter-spacing: 1.5px;
  line-height: 32px;
  color: #333;
  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 24px 0px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    letter-spacing: 1px;
    padding: 16px 0px 4px 0px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(prop) => (prop.primary ? "space-between" : "start")};
  align-items: center;
  width: 100%;
  height: ${(prop) => (prop.primary ? "80%" : "15%")};
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: auto;
    align-items: start;
  }
`;

const Input = styled.input`
  width: 30%;
  font-size: 24px;
  border: none;
  border-bottom: 1px solid #e9e9e9;
  padding: 2px;
  margin-left: 16px;
  color: #d7b0a9;
  letter-spacing: 1.5px;
  outline: 0;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #e9e9e9;
    font-weight: 400;
    font-style: italic;
  }
  :-ms-input-placeholder {
    color: #e9e9e9;
  }
  @media (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    font-size: 20px;
  }
`;
const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    margin-bottom: 24px;
  }
`;
