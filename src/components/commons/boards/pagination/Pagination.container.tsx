import {
  FirstPage,
  LastPage,
  NextPage,
  Page,
  page,
  PrevPage,
  Wrapper,
} from "./Pagination.style";
import {
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

export const Board01Pagination = (props) => {
  return (
    <Wrapper>
      <FirstPage>
        <MdKeyboardDoubleArrowLeft />
      </FirstPage>
      <PrevPage>
        <MdKeyboardArrowLeft />
      </PrevPage>
      <Page>11</Page>
      <Page>12</Page>
      <Page className="on">13</Page>
      <Page>14</Page>
      <Page>15</Page>
      <NextPage>
        <MdOutlineKeyboardArrowRight />
      </NextPage>
      <LastPage>
        <MdOutlineKeyboardDoubleArrowRight />
      </LastPage>
    </Wrapper>
  );
};
