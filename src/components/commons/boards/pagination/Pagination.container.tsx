import {
  FirstPage,
  LastPage,
  NextPage,
  Page,
  PrevPage,
  Wrapper,
} from "./Pagination.style";
import {
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useEffect, useState } from "react";

export const Board01Pagination = (props) => {
  const posts = props.posts;

  const totalPosts = 74;
  const isPosts = 10;
  const isPagination = 5;

  const [startPage, setStartPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(totalPosts / isPosts);

  // 중앙 페이지 계산
  const middlePage = startPage + Math.floor(isPagination / 2);

  const onClickPagination = (event) => {
    const selectedPage: number = Number(event.currentTarget.id);
    setCurrentPage(selectedPage);
  };

  const onClickMoveToPagination = (btn: string) => () => {
    if (btn === "prev") {
      if (currentPage > 1) {
        if (currentPage === startPage) {
          setStartPage(startPage - 1);
        }
        setCurrentPage(currentPage - 1);
      }
    } else if (btn === "next") {
      if (currentPage < totalPages) {
        if (currentPage === startPage + isPagination - 1) {
          setStartPage(startPage + 1);
        }
        setCurrentPage(currentPage + 1);
      }
    } else if (btn === "first") {
      setStartPage(1);
      setCurrentPage(1);
    } else if (btn === "last") {
      setStartPage(totalPages);
      setCurrentPage(totalPages);
    }
  };

  // 페이지 범위 계산
  let pageRange = Array.from(
    { length: isPagination },
    (_, index) => startPage + index
  );

  // 현재 페이지를 중앙에 유지하기 위한 보정
  if (currentPage > middlePage) {
    setStartPage(currentPage - Math.floor(isPagination / 2));
  }

  // 페이지 범위가 페이지 수를 벗어나지 않도록 보정
  if (pageRange[0] < 1) {
    pageRange = Array.from({ length: isPagination }, (_, index) => index + 1);
  } else if (pageRange[isPagination - 1] > totalPages) {
    pageRange = Array.from(
      { length: isPagination },
      (_, index) => totalPages - isPagination + index + 1
    );
  }

  return (
    <Wrapper>
      <FirstPage onClick={onClickMoveToPagination("first")}>
        <MdKeyboardDoubleArrowLeft />
      </FirstPage>
      <PrevPage onClick={onClickMoveToPagination("prev")}>
        <MdKeyboardArrowLeft />
      </PrevPage>
      {pageRange.map((pageNumber) => (
        <Page
          key={pageNumber}
          id={String(pageNumber)}
          isActive={pageNumber === currentPage}
          onClick={onClickPagination}
        >
          {pageNumber}
        </Page>
      ))}
      <NextPage onClick={onClickMoveToPagination("next")}>
        <MdOutlineKeyboardArrowRight />
      </NextPage>
      <LastPage onClick={onClickMoveToPagination("last")}>
        <MdOutlineKeyboardDoubleArrowRight />
      </LastPage>
    </Wrapper>
  );
};
