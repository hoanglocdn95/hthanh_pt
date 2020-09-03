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
  border: 1px solid orange;
  box-shadow: 4px 4px 2px orange;
  border-radius: 3px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
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
  padding-bottom: 0;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const Title = styled.p`
  font-weight: bold;
  width: 40%;
`;

export const Value = styled.p`
  text-align: right;
  width: 60%;
`;

export const FooterLeft = styled.div``;

export const Button = styled.button`
  margin: 12px auto 0;
  border: 3px solid orange;
  border-radius: 999px;
  color: orange;
  font-weight: bold;
  font-size: 18px;
  background: white;
  padding: 6px 24px;
`;

export const HeaderRight = styled.h1`
  font-weight: bold;
  text-align: center;
  margin: 0 auto 16px;
  background: -webkit-linear-gradient(orange, papayawhip);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 2px solid orange;
  width: fit-content;
  text-transform: uppercase;
  padding: 0 8px;
`;
