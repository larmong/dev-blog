import {
  BackBtn,
  BtnGroup,
  CenterGroup,
  CommentWrapper,
  Cont,
  Contents,
  Date,
  DeleteBtn,
  Label,
  Post,
  PostListWrapper,
  Profile,
  ProfileName,
  ProfilePhoto,
  ShareBtn,
  Title,
  TopBtn,
  Wrapper,
} from "./Detail.types";
import { FaFacebookSquare } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";

export default function Detail() {
  // 최근게시물
  const postList = [
    {
      title: "다음 게시물 제목입니다 1",
      date: "2023.09.26",
    },
    {
      title: "현재 게시물 제목입니다 2",
      date: "2023.09.25",
    },
    {
      title: "이전 게시물 제목입니다 3",
      date: "2023.09.24",
    },
  ];

  return (
    <Wrapper>
      <Label className="cursor_point">REACT</Label>
      <Title>게시글 제목 게시글 제목 게시글 제목</Title>
      <CenterGroup>
        <Profile>
          <ProfilePhoto></ProfilePhoto>
          <ProfileName>닉네임</ProfileName>
        </Profile>
        <Date>2023.09.26 20:32</Date>
      </CenterGroup>
      <Contents>
        <ShareBtn>
          <span className="facebook">
            <FaFacebookSquare />
          </span>
          <span className="kakao Share-p2">
            <SiKakaotalk />
          </span>
          <span className="url Share-p2">url</span>
        </ShareBtn>
        <Cont></Cont>
        <BtnGroup>
          <BackBtn>뒤로가기</BackBtn>
          <DeleteBtn>삭제하기</DeleteBtn>
          <TopBtn>TOP</TopBtn>
        </BtnGroup>
      </Contents>
      <CommentWrapper>댓글 Container</CommentWrapper>
      <PostListWrapper>
        {postList.map((post, index: number) => (
          <Post key={index}>
            <span>{post.title}</span>
            <span>{post.date}</span>
          </Post>
        ))}
      </PostListWrapper>
    </Wrapper>
  );
}
