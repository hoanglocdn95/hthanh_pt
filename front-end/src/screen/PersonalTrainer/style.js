import styled from "styled-components";

export const Container = styled.div`
  min-width: 768px;
  display: flex;
  max-width: 1000px;
  margin: 32px auto;
`;
export const Left = styled.div`
  width: 40%;
  padding: 16px;
  border: 4px solid orange;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  background: transparent;
  margin: 0 0 16px;
  border: 2px solid orange;
`;
export const ProfileContainer = styled.div`
  border-top: 1px solid lightgray;
  padding-top: 16px;
  width: 100%;
`;

export const Right = styled.div`
  width: 70%;
  padding: 16px;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  font-weight: bold;
`;

export const Value = styled.p`
  text-align: right;
`;

export const HeaderRight = styled.h1`
  /* text-align: right; */
  font-weight: bold;
  color: orange;
  text-align: center;
  margin: 0 0 16px;
  text-decoration: underline;
`;
