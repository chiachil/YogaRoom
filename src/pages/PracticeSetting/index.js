import styled from "styled-components";
import { useState } from "react";
import Header from "../../components/Header";
import Select from "./Components/Select";
import List from "./Components/List";

const PracticeSetting = () => {
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <>
      <Header />
      <Main>
        <Select add={setData} />
        <List listData={data} updateData={setData} deleteData={setData} />
      </Main>
    </>
  );
};

export default PracticeSetting;

// styled components
const Main = styled.div`
  width: 100%;
  position: relative;
`;
