import { css } from "@emotion/react";

export const GlobalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap");

  * {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    box-sizing: border-box;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    border: 0;
    cursor: pointer;
    background: #fff;
  }
  input {
    border: 1px solid #bdbdbd;
    height: 52px;
    padding: 14px 16px;
  }
  textarea {
    resize: none;
    border: 1px solid #bdbdbd;
    padding: 14px 16px;
  }
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }
  input::placeholder,
  textarea::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd;
  }
`;
