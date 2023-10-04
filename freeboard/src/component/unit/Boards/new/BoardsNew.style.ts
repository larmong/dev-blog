import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  padding: 60px 100px 100px 100px;
`;

export const Title = styled.h3`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

export const Contents = styled.div`
  margin-top: 80px;
`;

export const TweenGroup = styled.div`
  display: flex;
  gap: 24px;
`;

export const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-bottom: 40px;
  font-weight: 500;
  span {
    display: block;
  }
`;

export const DefaultButton = styled.button`
  width: 230px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background: #bdbdbd;
  color: #4f4f4f;
  &.on {
    color: #333333;
    background: #ffd600;
  }
`;
