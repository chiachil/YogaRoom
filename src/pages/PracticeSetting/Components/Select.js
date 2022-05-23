import styled from "styled-components";
import { BiPlus } from "react-icons/bi";
import { Poses } from "../../../global/Poses";
import { v4 } from "uuid";

const Select = ({ add }) => {
  return (
    <>
      <Section autoHeight>
        <Container primary>
          <Title left>Hi, Name! What would you like to practice today?</Title>
          <CardBox>
            {Poses.map((pose) => {
              function addItem() {
                add(function (prevData) {
                  return [
                    ...prevData,
                    {
                      id: v4(),
                      engName: pose.engName,
                      chiName: pose.chiName,
                      imagePath: pose.imagePath,
                      minute: pose.minute,
                      second: pose.second,
                    },
                  ];
                });
              }
              return (
                <PoseCard primary key={v4()}>
                  <PoseBox>
                    <Image primary src={pose.imagePath}></Image>
                    <NameBox>
                      <EngName>{pose.engName}</EngName>
                      <ChiName>{pose.chiName}</ChiName>
                    </NameBox>
                  </PoseBox>
                  <CircleButton onClick={addItem}>
                    <Plus></Plus>
                  </CircleButton>
                </PoseCard>
              );
            })}
          </CardBox>
        </Container>
      </Section>
    </>
  );
};

export default Select;

// styled components
const Section = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: ${(props) => (props.autoHeight ? "1100px" : "100vh")};
  @media (max-width: 1440px) {
    width: 65%;
  }
  @media (max-width: 1280px) {
    width: 55%;
  }
  @media (max-width: 768px) {
    width: 90%;
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

const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 48px 48px 48px;
  @media (max-width: 1280px) {
    padding: 0px 24px 48px 24px;
  }
  @media (max-width: 768px) {
    padding: 0px 10px 48px 10px;
  }
`;

const PoseCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: ${(props) => (props.primary ? "100px" : "70px")};
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
  @media (max-width: 1280px) {
    width: 100%;
    height: ${(props) => (props.primary ? "80px" : "60px")};
  }
  @media (max-width: 768px) {
    height: 60px;
  }
`;

const PoseBox = styled.div`
  width: 85%;
  display: flex;
  justify-content: start;
`;

const Image = styled.img`
  width: ${(props) => (props.primary ? "90px" : "70px")};
  height: ${(props) => (props.primary ? "90px" : "70px")};
  margin-right: 16px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1280px) {
    width: ${(props) => (props.primary ? "80px" : "60px")};
    height: ${(props) => (props.primary ? "80px" : "60px")};
  }
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;
const NameBox = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const EngName = styled(Title)`
  font-size: 18px;
  letter-spacing: 1px;
  padding: 0px;
  line-height: 24px;
  margin-bottom: 8px;
  text-align: left;
  @media (max-width: 768px) {
    line-height: 20px;
    font-size: 16px;
  }
`;

const ChiName = styled(Title)`
  font-size: 18px;
  font-weight: 400;
  color: #c4c4c4;
  padding: 0px;
  margin-bottom: 0px;
  text-align: left;
  @media (max-width: 768px) {
    line-height: 20px;
    font-size: 16px;
  }
`;
const CircleButton = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
  background: #ffffff;
  border: none;
  border-radius: 50%;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: ease 0.5s;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
    box-shadow: inset 0 0 4px 1px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

const Plus = styled(BiPlus)`
  position: absolute;
  top: 25%;
  left: 25%;
  color: #333333;
  width: 24px;
  height: 24px;
  @media (max-width: 1440px) {
    width: 20px;
    height: 20px;
  }
`;
