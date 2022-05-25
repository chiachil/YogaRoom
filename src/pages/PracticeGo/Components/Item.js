import styled from "styled-components";

const Item = ({ id, imagePath, duration }) => {
  return (
    <>
      <TimeCard>
        <PoseBox>
          <Image src={imagePath} />
          <ClockBox>
            <TimeBox>
              <TimeName>Seconds</TimeName>
              <TimeInput
                id={id}
                type="number"
                value={duration}
                readOnly
              ></TimeInput>
            </TimeBox>
          </ClockBox>
        </PoseBox>
      </TimeCard>
    </>
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
  transition: 0.5s;
  outline: none;
  @media (max-width: 1280px) {
    width: 50px;
    font-size: 32px;
  }
`;
