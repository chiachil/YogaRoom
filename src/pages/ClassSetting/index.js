import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Select from "../../components/Select";
import List from "../../components/List";

const ClassSetting = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Select add={setData} />
        <List listData={data} deleteData={setData} />
      </Main>
    </>
  );
};

export default ClassSetting;

// styled components
const Main = styled.div`
  width: 100%;
  position: relative;
`;
