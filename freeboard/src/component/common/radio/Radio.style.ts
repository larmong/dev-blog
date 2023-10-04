import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const RadioInput = styled.div`
  display: flex;
  gap: 8px;
  span {
    font-weight: 500;
  }
  input {
    display: none;
    & + label {
      width: 24px;
      height: 24px;
      border: 1px solid #333;
      border-radius: 50%;
      cursor: pointer;
    }
    &:checked + label {
      position: relative;
      border: 1px solid #ffd600;
      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #ffd600;
      }
    }
  }
`;
