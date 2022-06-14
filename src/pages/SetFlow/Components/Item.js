import styled from "styled-components";
import { BiMinus } from "react-icons/bi";
import { smImageUrl } from "../../../global/constants/urlPath";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";

const Item = ({ id, imagePath, duration, updateData, deleteData }) => {
  const [sec, setSec] = useState(duration);

  useEffect(() => {
    updateData(function (prev) {
      return prev.map((pose) => {
        if (pose.id === id) {
          pose.duration = sec;
        }
        return pose;
      });
    });
  }, [sec]);

  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter((pose) => pose.id !== id);
    });
  }

  function PlusTime() {
    if (sec < 60 && sec >= 5) {
      setSec(() => sec + 5);
    }
  }

  function MinusTime() {
    if (sec <= 60 && sec > 5) {
      setSec(() => sec - 5);
    }
  }

  return (
    <Box>
      <Pose>
        <Image src={smImageUrl + imagePath} />
        <TimeBox>
          <TimeName>Seconds</TimeName>
          <InputBox>
            <TimeInput>{sec}</TimeInput>
            <ButtonBox>
              <Button onClick={PlusTime}>
                <PlusArrow></PlusArrow>
              </Button>
              <Button onClick={MinusTime}>
                <MinusArrow></MinusArrow>
              </Button>
            </ButtonBox>
          </InputBox>
        </TimeBox>
      </Pose>
      {id === 0 ? (
        <Note>default</Note>
      ) : (
        <>
          <CircleButton onClick={deleteItem}>
            <Minus></Minus>
          </CircleButton>
        </>
      )}
    </Box>
  );
};

export default Item;

// styled components
const Box = styled.div`
  width: clac(100%-48px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 8px 16px;
  margin-bottom: 16px;
  margin-right: 16px;
  margin-left: 2px;
`;

const Pose = styled.div`
  width: 148px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 32px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1280px) {
    margin-right: 16px;
  }
`;

const TimeBox = styled.div`
  width: 88px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const TimeName = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #c4c4c4;
  margin-bottom: 4px;
  /* letter-spacing: 1px; */
`;

const TimeInput = styled.p`
  width: 50px;
  font-size: 32px;
  font-weight: 500;
  color: #333333;
  text-align: left;
  border: none;
  transition: 0.5s;
  outline: none;
  &::-webkit-inner-spin-button {
    opacity: 0;
  }
  &::placeholder {
    color: #c4c4c4;
  }
`;

const Note = styled.span`
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 300;
  color: #adadad;
  font-style: italic;
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
`;

const Minus = styled(BiMinus)`
  position: absolute;
  top: 25%;
  left: 25%;
  color: #333333;
  width: 24px;
  height: 24px;
`;
const Button = styled.button`
  position: relative;
  width: 16px;
  height: 24px;
  /* background-color: #F8F8F8; */
`;
const PlusArrow = styled(IoMdArrowDropup)`
  position: absolute;
  font-size: 20px;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;
const MinusArrow = styled(IoMdArrowDropdown)`
  position: absolute;
  font-size: 20px;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

const InputBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  height: 48px;
`;
