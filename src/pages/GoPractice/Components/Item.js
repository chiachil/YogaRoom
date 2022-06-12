import styled from "styled-components";
import { smImageUrl } from "../../../global/constants/urlPath";

const Item = ({ engName, chiName, imagePath, duration }) => {
  return (
    <Card>
      <Image src={smImageUrl + imagePath}></Image>
      <Name>{duration + "sec" + " · " + engName}</Name>
    </Card>
  );
};

export default Item;

// styled components
const Card = styled.div`
  width: 98%;
  display: flex;
  justify-content: start;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  padding: 8px;
  margin-bottom: 8px;
  @media (max-width: 1440px) {
    width: 96%;
  }
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Name = styled.h2`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: #333333;
  letter-spacing: 1px;
`;
