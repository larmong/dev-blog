import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Common } from "./emotion.style";

export const GlobalStyle = css`
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "InkLipquid";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/InkLipquid.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
  body {
    font-family: "GmarketSansMedium", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #333333;
  }
  em {
    font-style: normal;
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
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
    border: 1.3px solid #0d8f68;
    &.bottomBorder {
      border: none;
      border-bottom: 1.3px solid #0d8f68;
    }
  }
  input::placeholder,
  textarea::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #bdbdbd;
  }
  &.highlight {
    color: ${Common.color.point};
  }
`;

export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
`;
