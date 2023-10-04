import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion.style";

export const Wrapper = styled.div`
  //border: 1px solid #000;
  font-size: 0.8em;
`;

export const Label = styled.span`
  display: block;
  color: ${Common.color.light_gray};
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Title = styled.h3`
  font-size: 2.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CenterGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${Common.color.light_gray};
`;
export const Profile = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 15px 0;
`;
export const ProfilePhoto = styled.div`
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
`;
export const ProfileName = styled.p`
  color: ${Common.color.light_darkGray};
  font-size: 1.1em;
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ShareBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 5px;
  margin: 15px 0;

  span {
    cursor: pointer;
    display: inline-block;
    width: 30px;
    height: 30px;

    svg {
      color: ${Common.color.light_darkGray};
      width: 100%;
      height: 100%;
    }

    &.Share-p2 {
      padding: 2px;
    }

    &.facebook {
      svg {
        color: #46569b;
      }
    }

    &.kakao {
      svg {
        color: #ffbc1b;
      }
    }

    &.url {
      border-radius: 3px;
      font-size: 0.6em;
      width: 27px;
      height: 27px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      color: #fff;
      background: ${Common.color.light_text};
    }
  }
`;
export const Date = styled.span`
  color: ${Common.color.light_darkGray};
`;

export const Contents = styled.div`
  border-bottom: 1px solid ${Common.color.light_gray};
`;
export const Cont = styled.div`
  //background: rgba(0, 0, 0, 0.3);
  margin: 15px 0;
  height: 300px;
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  gap: 10px;
  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 70px;
    height: 30px;
    border-radius: 5px;
    background: ${Common.color.light_text};
  }
`;

export const DeleteBtn = styled.span``;
export const BackBtn = styled.span``;
export const TopBtn = styled.span``;

export const CommentWrapper = styled.div`
  border-bottom: 1px solid ${Common.color.light_gray};
  padding: 15px 0;
`;

export const PostListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${Common.color.light_gray};
  padding: 5px 0;
`;
export const Post = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px 40px;
  &:nth-of-type(1)::before {
    position: absolute;
    top: 50%;
    transform: rotateY(-50%);
    left: 0;
    content: "이전";
    color: ${Common.color.light_gray};
  }
  &:nth-of-type(2)::before {
    position: absolute;
    top: 50%;
    transform: rotateY(-50%);
    left: 0;
    content: "현재";
    color: ${Common.color.point};
  }
  &:nth-of-type(3)::before {
    position: absolute;
    top: 50%;
    transform: rotateY(-50%);
    left: 0;
    content: "다음";
    color: ${Common.color.light_gray};
  }
`;
