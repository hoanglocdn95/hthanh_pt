import styled, { css } from "styled-components";

export const Frame = styled.div`
  border: 1px solid orange;
  box-shadow: 4px 4px 2px orange;
  border-radius: 3px;
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: papayawhip;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 999px;
  position: relative;

  ${(props) =>
    props.isToday &&
    css`
      color: orange;
      font-weight: bold;
      ::after {
        content: "today";
        position: absolute;
        bottom: 0;
        font-size: 10px;
        text-transform: uppercase;
      }
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: papayawhip;
      color: orange;
      font-weight: bold;
    `}
    ${(props) =>
    props.cannotSelected &&
    css`
      background-color: #eee;
      color: lightgrey;
    `}
`;
