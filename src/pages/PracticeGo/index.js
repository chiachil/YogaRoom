// import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import List from "./Components/List";
import Show from "./Components/Show";
import { EasyPose } from "../../global/ImagePath";
import { useState } from "react";

const PracticeGo = () => {
  const [poseList, setList] = useState([]);
  const [pose, setPose] = useState({
    engName: "Easy Pose",
    chiName: "簡易坐式",
    imagePath: EasyPose,
  });

  return (
    <>
      <Header />
      <Main>
        <Show pose={pose} updatePose={setPose} setList={setList} />
        <List poseList={poseList} />
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
