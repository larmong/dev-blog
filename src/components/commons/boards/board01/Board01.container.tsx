import {
  BoardBody,
  BoardBottom,
  BoardHead,
  BoardTitle,
  Wrapper,
} from "./Board01.style";
import { Board01Post } from "../post/Post.container";
import { Board01Search } from "../search/Search.container";
import { Board01Pagination } from "../pagination/Pagination.container";
import { Button01 } from "../../buttons/button01/Button01.container";
import { useState } from "react";

export const Board01 = (props) => {
  const [token, setToken] = useState(false);
  const posts = [
    {
      no: 14,
      id: "14",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 13,
      id: "13",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 12,
      id: "12",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 11,
      id: "11",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 10,
      id: "10",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 9,
      id: "9",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 8,
      id: "8",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 7,
      id: "7",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 6,
      id: "6",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 5,
      id: "5",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 4,
      id: "4",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 3,
      id: "3",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 2,
      id: "2",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
    {
      no: 1,
      id: "1",
      date: "2023.09.24",
      title: "공통 게시글 제목 테스트입니다.",
      content: "공통 게시글 컨텐츠 테스트입니다.",
    },
  ];

  return (
    <Wrapper>
      <BoardTitle>{props.title}</BoardTitle>
      {token ? <Button01 /> : ""}
      <BoardHead>
        <ul>
          <li>번호</li>
          <li>제목</li>
          <li>날짜</li>
        </ul>
      </BoardHead>
      <BoardBody>
        <Board01Post post={posts} />
      </BoardBody>
      <BoardBottom>
        <Board01Pagination />
        <Board01Search />
      </BoardBottom>
    </Wrapper>
  );
};
