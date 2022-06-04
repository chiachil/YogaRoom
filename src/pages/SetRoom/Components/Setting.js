import styled from "styled-components";
import primaryRoom from "../../../assets/Room/1.jpg";
import secondRoom from "../../../assets/Room/2.jpg";

const Setting = ({ roomData, setRoom }) => {
  const backgroundArr = [primaryRoom, secondRoom];
  const colorArr = ["#d7b0a9", "#81a59a", "#77a0a9", "#81797a"];
  const voiceArr = ["English", "中文"];

  function changeImage(option) {
    setRoom({
      background: option,
      color: roomData.color,
      language: roomData.language,
    });
  }

  function changeColor(option) {
    setRoom({
      background: roomData.background,
      color: option,
      language: roomData.language,
    });
  }

  function changeLanguage(option) {
    setRoom({
      background: roomData.background,
      color: roomData.color,
      language: option,
    });
  }
  return (
    <Container>
      <Title>Your room</Title>
      <SubTitle first>Background</SubTitle>
      <Box first>
        {backgroundArr.map((option, i) => {
          let selected;
          if (roomData.background === option) {
            selected = true;
          }
          return (
            <BackgroundOption
              key={i}
              src={option}
              selected={selected}
              onClick={() => {
                changeImage(option);
              }}
            ></BackgroundOption>
          );
        })}
      </Box>
      <SubTitle>Mat Color</SubTitle>
      <Box>
        {colorArr.map((option, i) => {
          let selected;
          if (roomData.color === option) {
            selected = true;
          }
          return (
            <ColorOption
              key={i}
              style={{ background: option }}
              selected={selected}
              onClick={() => {
                changeColor(option);
              }}
            ></ColorOption>
          );
        })}
      </Box>
      <SubTitle>Voice Guide</SubTitle>
      <Box last>
        {voiceArr.map((option, i) => {
          let selected;
          if (roomData.language === option) {
            selected = true;
          }
          return (
            <VoiceOption
              key={i}
              selected={selected}
              onClick={() => {
                changeLanguage(option, i);
              }}
            >
              {option}
            </VoiceOption>
          );
        })}
      </Box>
    </Container>
  );
};

export default Setting;

// styled components

const Container = styled.div`
  width: 30%;
  height: 100%;
  padding: 16px 24px;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  @media (max-width: 1280px) {
    width: 40%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 16px;
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;
const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  padding-top: 8px;
  padding-bottom: 24px;
  letter-spacing: 1.5px;
  color: #c4c4c4;
  @media (max-width: 768px) {
    padding-bottom: 16px;
  }
`;

const SubTitle = styled(Title)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #999999;
  padding-top: ${(prop) => (prop.first ? "8px" : "16px")};
  @media (max-width: 1440px) {
    padding-bottom: 16px;
  }
`;
const Box = styled.div`
  display: flex;
  height: ${(prop) => (prop.first ? "20%" : "auto")};
  justify-content: ${(prop) => (prop.first ? "space-between" : "start")};
  width: 100%;
  padding-bottom: ${(prop) => (prop.last ? "0px" : "16px")};
  @media (max-width: 1440px) {
    padding-bottom: ${(prop) => (prop.last ? "8px" : "8px")};
  }
  @media (max-width: 1024px) {
    justify-content: start;
  }
`;

const BackgroundOption = styled.img`
  width: 46%;
  height: ${(prop) => (prop.first ? "100%" : "auto")};
  border: 4px solid #ffffff;
  outline: ${(prop) =>
    prop.selected ? "2px solid #adadad" : "2px solid #e9e9e9"};
  border-radius: 8px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: ease-in 0.1s;
  &:hover {
    outline: 2px solid #adadad;
  }
  @media (max-width: 1024px) {
    width: 160px;
    margin-right: ${(prop) => (prop.last ? "0px" : "16px")};
  }
  @media (max-width: 768px) {
    width: 152px;
  }
`;
const ColorOption = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #ffffff;
  outline: ${(prop) =>
    prop.selected ? "2px solid #adadad" : "2px solid #e9e9e9"};
  border-radius: 8px;
  margin-right: 16px;
  transition: ease-in 0.1s;
  cursor: pointer;
  &:hover {
    outline: 2px solid #adadad;
  }
  @media (max-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

const VoiceOption = styled.div`
  width: 96px;
  height: 48px;
  line-height: 48px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  color: #696969;
  background: #ffffff;
  border: ${(prop) =>
    prop.selected ? "2px solid #adadad;" : "2px solid #e9e9e9;"};
  border-radius: 8px;
  text-align: center;
  margin-right: 16px;
  cursor: pointer;
  transition: ease-in 0.1s;
  &:hover {
    border: 2px solid #adadad;
  }
  @media only screen and (max-width: 1440px) {
    height: 40px;
    line-height: 40px;
  }
`;
