import styled from "styled-components";
import { IoIosSettings } from "react-icons/io";
import { AiFillSound } from "react-icons/ai";
import { colorArr, voiceArr } from "../../../global/constants/room";
import { useState } from "react";

const Preference = ({ roomData, updateRoom, setSpeech }) => {
  const [popup, setPopup] = useState(false);
  function changeColor(option) {
    updateRoom({
      background: roomData.background,
      color: option,
      language: roomData.language,
    });
  }

  function changeLanguage(option) {
    updateRoom({
      background: roomData.background,
      color: roomData.color,
      language: option,
    });
    if (option === "中文") {
      setSpeech({ text: "點擊 'START'", trigger: false });
    } else {
      setSpeech({
        text: "Click 'START'",
        trigger: false,
      });
    }
  }

  return (
    <>
      <Button onClick={() => setPopup(!popup)}>
        <Icon></Icon>
        PREFERENCE
      </Button>
      {popup ? (
        <>
          <Popup>
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
            <Box last>
              <SubTitle>Voice Guide</SubTitle>
              <SoundIcon></SoundIcon>
            </Box>
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
          </Popup>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Preference;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 152px;
  height: 40px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #333333;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background: #ffffff;
  }
`;

const Icon = styled(IoIosSettings)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const Popup = styled.div`
  position: absolute;
  top: 56px;
  right: 8px;
  width: 240px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 16px;
  border-radius: 8px;
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #999999;
  padding-bottom: 16px;
  margin-right: 4px;
`;

const SoundIcon = styled(AiFillSound)`
  color: #696969;
`;

const Box = styled.div`
  display: flex;
  height: auto;
  justify-content: start;
  width: 100%;
  padding-bottom: ${(prop) => (prop.last ? "0px" : "24px")};
`;

const ColorOption = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #ffffff;
  outline: ${(prop) =>
    prop.selected ? "2px solid #adadad" : "2px solid #e9e9e9"};
  border-radius: 8px;
  margin-right: 16px;
  transition: ease-in 0.1s;
  cursor: pointer;
  &:hover {
    outline: 2px solid #adadad;
  }
`;

const VoiceOption = styled.div`
  width: 96px;
  height: 40px;
  line-height: 40px;
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
`;
