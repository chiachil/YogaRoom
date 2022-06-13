import styled from "styled-components";

export const PopBG = styled.div`
  position: absolute;
  width: 100%;
  height: 400%;
  background-color: rgba(56, 56, 56, 0.5);
  z-index: 3;
  top: 0px;
`;
export const Popup = styled.div`
  position: fixed;
  width: 380px;
  height: auto;
  top: 25%;
  left: 50%;
  transform: translateX(-50%) translateY(-25%);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-radius: 8px;
  z-index: 4;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 25%);
  padding: 32px 16px;
  @media (max-width: 768px) {
    width: 350px;
  }
`;
export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 32px;
  text-align: center;
  letter-spacing: 1.5px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  font-size: 16px;
  border: 1px solid lightgray;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 8px;
  outline: none;
  letter-spacing: 1px;
  color: #333;
`;

export const Button = styled.button`
  background-color: #d7b0a9;
  border: 0px solid #fc9874;
  box-shadow: 0px 4px 0px #b39e99;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 1px;
  cursor: pointer;
  width: 100%;
  height: 48px;
  margin-bottom: 24px;
  border-radius: 8px;
  &:hover {
    background: #dec8b8;
    box-shadow: 0px 4px 0px #b39e99;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0px 0px 0px #69403b;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    height: 40px;
  }
`;
export const Tab = styled.div`
  display: flex;
  margin-top: 32px;
  color: #333;
`;
export const TabLink = styled.a`
  width: fit-content;
  font-size: 16px;
  text-align: left;
  margin-left: 16px;
  color: #b39e99;
  font-weight: 500;
  &:hover {
    color: #d7b0a9;
  }
`;
export const Note = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${(prop) => prop.color};
`;
