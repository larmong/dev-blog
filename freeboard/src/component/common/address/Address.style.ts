import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TopGroup = styled.div`
  display: flex;
  gap: 16px;
`;
export const AddressBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background: #333;
  color: #fff;
  padding: 0 16px;
`;
export const AddressInput = styled.input`
  &.zipcode {
    width: 100px;
    text-align: center;
  }
`;
