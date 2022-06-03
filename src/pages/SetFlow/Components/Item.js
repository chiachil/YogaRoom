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
        if (e.target.value === "" || e.target.value < 5) {
          e.target.value = 5;
        } else if (e.target.value > 60) {
          e.target.value = 60;
        } else if (e.target.value.length > 2) {
          e.target.value = e.target.value.slice(-1);
        }

        // change time
        if (pose.id === id) {
          let num = parseInt(e.target.value);
          pose.duration = num;
        }
        return pose;
      });
    });
  }

  return (
    <Box>
      <Pose>
        <Image src={imagePath} />
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
      </Pose>
      {id === 1 ? (
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
  width: 60%;
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
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const TimeName = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 400;
  color: #c4c4c4;
  margin-bottom: 4px;
`;

const TimeInput = styled.input`
  font-family: "Poppins";
  font-size: 32px;
  font-weight: 500;
  color: #333333;
  text-align: left;
  border: none;
  transition: 0.5s;
  outline: none;
  &::-webkit-inner-spin-button {
    opacity: 1;
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
