import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: papayawhip;
  display: flex;
  justify-content: space-between;
  padding: 16px 40px;
  height: fit-content;
  align-items: center;
`;
export const Logo = styled.p`
  color: orange;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0;
  padding: 8px;
  font-size: 30px;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`;
export const ItemRight = styled.button`
  background: papayawhip;
  border: 5px solid white;
  text-decoration: none;
  height: fit-content;
  color: lightgray;
  font-weight: 700;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 999px;
  &:hover {
    color: gray;
    border-color: gray;
  }
`;

export const LinkRoute = styled(Link)`
  background: papayawhip;
  border: 5px solid white;
  text-decoration: none;
  height: fit-content;
  margin-right: 16px;
  color: lightgray;
  font-weight: 700;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 999px;
  &:hover {
    color: gray;
    border-color: gray;
  }
`;

export const Name = styled(Link)`
  text-decoration: none;
  height: fit-content;
  margin-right: 16px;
  color: orange;
  font-weight: 700;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 999px;
  &:hover {
    color: gray;
  }
`;
