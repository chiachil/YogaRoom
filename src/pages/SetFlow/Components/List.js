import styled from "styled-components";
import Item from "./Item";

const List = ({ listData, updateData, deleteData }) => {
  return (
    <SideMenuBox>
      <Title>Your Sequences</Title>
      <ScrollBox>
        {listData.map((item) => {
          const { id, engName, chiName, imagePath, duration } = item;

          return (
            <Item
              key={id}
              id={id}
              engName={engName}
              chiName={chiName}
              imagePath={imagePath}
              duration={duration}
              updateData={updateData}
              deleteData={deleteData}
            />
          );
        })}
      </ScrollBox>
    </SideMenuBox>
  );
};

export default List;

// styled components
const SideMenuBox = styled.div`
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
    height: 400px;
  }
  @media (max-width: 768px) {
    height: 320px;
    padding: 8px 16px;
  }
`;
const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1.5px;
  padding-left: 2px;
  color: #c4c4c4;
  padding-top: 8px;
  padding-bottom: 24px;
  @media (max-width: 768px) {
    padding-bottom: 16px;
  }
`;

const ScrollBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 89%;
  @media (max-width: 1440px) {
    height: 87%;
  }
  @media (max-width: 768px) {
    height: 250px;
  }
`;
