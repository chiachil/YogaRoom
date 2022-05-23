import styled from "styled-components";
import Item from "./Item";
import { Link } from "react-router-dom";
import firestore from "../../../Firebase";
import { doc, setDoc } from "@firebase/firestore";

const List = ({ listData, deleteData }) => {
  function writeData() {
    listData.map((item) => {
      setDoc(doc(firestore, "practices", item.engName), item);
      return item;
    });
    alert("Ready?");
  }
  return (
    <>
      <SideSection>
        <Container>
          <Title>Your Practice Today</Title>
          <SideMenuBox>
            <ScrollBox>
              {listData.map((item) => {
                const { id, engName, chiName, imagePath, minute, second } =
                  item;

                return (
                  <Item
                    key={id}
                    id={id}
                    engName={engName}
                    chiName={chiName}
                    imagePath={imagePath}
                    deleteData={deleteData}
                    minute={minute}
                    second={second}
                  />
                );
              })}
            </ScrollBox>
            <Link to="/PracticeGo">
              <RectangleButton primary onClick={writeData}>
                START
              </RectangleButton>
            </Link>
          </SideMenuBox>
        </Container>
      </SideSection>
    </>
  );
};

export default List;

// styled components
const SideSection = styled.div`
  background: #fdf2f0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30%;
  height: 100vh;
  @media (max-width: 1440px) {
    width: 35%;
  }
  @media (max-width: 1280px) {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 10%;
  }
`;

const Container = styled.div`
  padding: 140px 0px;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    display: ${(props) => (props.primary ? "block" : "none")};
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #333333;
  line-height: 30px;
  letter-spacing: 1.25px;
  padding: 0px 48px;
  margin-bottom: 40px;
  text-align: ${(props) => (props.left ? "left" : "center")};
  @media (max-width: 1280px) {
    padding: 0px 24px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0px 10px;
    margin-bottom: 24px;
  }
`;

const SideMenuBox = styled.div`
  padding: 0px 48px;
  @media (max-width: 1280px) {
    padding: 0px 24px;
  }
  @media (max-width: 768px) {
    padding: 0px 10px;
  }
`;

const ScrollBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 60vh;
  margin-bottom: 32px;
`;
const RectangleButton = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  color: #ffffff;
  line-height: 56px;
  letter-spacing: 2px;
  text-align: center;
  background-color: ${(props) => (props.primary ? "#ED8462" : "#333333")};
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: ease-in 0.1s;
  &:hover {
    background: ${(props) => (props.primary ? "#E8714A" : "#1C1C1C")};
  }
  &:active {
    box-shadow: inset 0 0 10px 1px rgba(0, 0, 0, 0.2);
  }
`;
