import styled from "styled-components";
import { smImageUrl } from "../../../global/constants/urlPath";
import { useContext } from "react";
import { LanguageContext } from "../../../context/preferenceContext";

const Item = ({ engName, chiName, imagePath, duration }) => {
  const { chinese } = useContext(LanguageContext);

  return (
    <Card>
      <Image src={smImageUrl + imagePath}></Image>
      <Number>{duration + "s"}</Number>
      {chinese ? <Name>{chiName}</Name> : <Name>{engName}</Name>}
    </Card>
  );
};

export default Item;

// styled components
const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  padding: 8px;
  margin-bottom: 8px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Name = styled.p`
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: #333333;
  letter-spacing: 1px;
  @media (max-width: 1280px) {
    width: 270px;
  }
  @media (max-width: 1024px) {
    width: calc(100%-48px);
  }
`;

const Number = styled(Name)`
  width: 48px;
  font-size: 18px;
  font-weight: 500;
`;
