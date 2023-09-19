import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: #333333;
  color: #fff;
  padding: 40px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const Logo = styled.h1`
  width: 120px;
  height: 20px;
  background-image: url("/images/larmong.svg");
  background-size: contain;
  background-repeat: no-repeat;
`;
