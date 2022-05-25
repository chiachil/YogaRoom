import styled from "styled-components";
import { BiMinus } from "react-icons/bi";

const Item = ({ id, imagePath, duration, updateData, deleteData }) => {
  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter((pose) => pose.id !== id);
    });
  }

  function setTimer(e) {
    updateData(function (prev) {
      return prev.map((pose) => {
        // validation
        if (e.target.value == "" || e.target.value < 5) {
          e.target.value = 5;
        } else if (e.target.value > 60) {
          e.target.value = 60;
        } else if (e.target.value.length > 2) {
          e.target.value = e.target.value.slice(-1);
        }

        // change time
        if (pose.id == id) {
          let num = parseInt(e.target.value);
          pose.duration = num;
        }
        return pose;
      });
    });
  }

  return (
    <TimeCard>
      <PoseBox>
        <Image src={imagePath} />
        <ClockBox>
          <TimeBox>
            <TimeName>Seconds</TimeName>
            <TimeInput
              id={id}
              type="number"
              placeholder="05"
              value={duration}
              onChange={setTimer}
              min="5"
              max="60"
              step="5"
            ></TimeInput>
          </TimeBox>
        </ClockBox>
      </PoseBox>
      <CircleButton onClick={deleteItem}>
        <Minus></Minus>
      </CircleButton>
    </TimeCard>
  );
};

export default Item;

// styled components
const TimeCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 48px);
  height: ${(props) => (props.primary ? "100px" : "70px")};
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
  @media (max-width: 1280px) {
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
const ClockBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  @media (max-width: 1280px) {
    width: 50%;
  }
`;
const TimeBox = styled(ClockBox)`
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-right: 8px;
`;

const TimeName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 8px;
  @media (max-width: 1280px) {
    font-size: 12px;
  }
`;

const TimeInput = styled.input`
  width: 60px;
  font-size: 40px;
  font-weight: 500;
  color: #333333;
  text-align: center;
  border: none;
  background: #f8f8f8;
  border-bottom: 1px solid #c4c4c4;
  transition: 0.5s;
  outline: none;
  &::placeholder {
    color: #c4c4c4;
  }
  @media (max-width: 1280px) {
    width: 50px;
    font-size: 32px;
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

const Minus = styled(BiMinus)`
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
