import styled from "styled-components";

export const Container = styled.div`
  min-width: 768px;
  display: flex;
  max-width: 1000px;
  margin: 32px auto;
`;
export const Left = styled.div`
  width: 30%;
  padding: 16px;
  border: 3px solid papayawhip;
  border-right-width: 0;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  background: lightgray;
  margin: 0 auto 16px;
`;
export const ProfileContainer = styled.div`
  padding-top: 16px;
`;

export const Right = styled.div`
  width: 70%;
  padding: 16px;
  border: 3px solid orange;
  border-left-width: 0;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  font-weight: bold;
`;

export const Value = styled.p``;
