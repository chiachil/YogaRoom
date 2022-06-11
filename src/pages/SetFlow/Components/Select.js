import styled from "styled-components";
import Option from "./Option";
import { poses } from "../../../global/constants/poses";
import { v4 } from "uuid";

const Select = ({ listData, addData }) => {
  return (
    <Box>
      {poses.map((pose) => {
        const { engName, chiName, imagePath, duration = 10 } = pose;

        return (
          <Option
            key={v4()}
            id={v4()}
            engName={engName}
            chiName={chiName}
            imagePath={imagePath}
            duration={duration}
            listData={listData}
            addData={addData}
          />
        );
      })}
    </Box>
  );
};

export default Select;

// styled components
const Box = styled.div`
  width: 70%;
  height: 100%;
  background: #ffffff;
  padding: 2px;
  border-radius: 8px;
  margin-right: 32px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: scroll;
  @media (max-width: 1280px) {
    width: 60%;
    padding-right: 16px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0px;
    margin-top: 16px;
    padding-right: 2px;
  }
`;
