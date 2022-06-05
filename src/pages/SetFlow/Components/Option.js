import styled from "styled-components";
import { BiPlus } from "react-icons/bi";
import { smImageUrl } from "../../../global/path";

const Option = ({
  id,
  engName,
  chiName,
  imagePath,
  duration,
  listData,
  addData,
}) => {
  function addItem() {
    if (listData.length > 100) {
      alert("You've reached the limit of 100. Please delete some to add more.");
    } else {
      addData(function (prevData) {
        return [
          ...prevData,
          {
            id: id,
            engName: engName,
            chiName: chiName,
            imagePath: imagePath,
            duration: duration,
          },
        ];
      });
    }
  }

  return (
    <Card primary key={id}>
      <Pose>
        <Image src={smImageUrl + imagePath}></Image>
        <NameBox>
          <EngName>{engName}</EngName>
          <ChiName>{chiName}</ChiName>
        </NameBox>
      </Pose>
      <CircleButton onClick={addItem}>
        <Plus></Plus>
      </CircleButton>
    </Card>
  );
};

export default Option;

// styled components
const Card = styled.div`
  width: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 8px 16px;
  margin: 0px 16px 16px 0px;
  @media (max-width: 1440px) {
    width: 47.5%;
  }
  @media (max-width: 1280px) {
    width: 100%;
    margin: 0px 0px 16px 0px;
  }
`;

const Pose = styled.div`
  width: 80%;
  display: flex;
  justify-content: start;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 16px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;
const NameBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const EngName = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: #333333;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const ChiName = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: #c4c4c4;
  letter-spacing: 2.5px;
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

const Plus = styled(BiPlus)`
  position: absolute;
  top: 25%;
  left: 25%;
  color: #333333;
  width: 24px;
  height: 24px;
`;
