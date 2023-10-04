import {
  ItemGroup,
  TweenGroup,
  Wrapper,
  Title,
  Contents,
  DefaultButton,
} from "./BoardsNew.style";
import Input from "../../../common/input/Input.container";
import Textarea from "../../../common/textarea/Textarea.container";
import Address from "../../../common/address/Address.container";
import Radio from "../../../common/radio/Radio.container";
import { useState } from "react";

export default function BoardsNew(): JSX.Element {
  const [radioList, setRadioList] = useState([
    {
      name: "유튜브",
      value: "youtube",
      state: true,
    },
    {
      name: "사진",
      value: "photo",
      state: false,
    },
  ]);

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <Contents>
        <TweenGroup>
          <ItemGroup>
            <span>작성자</span>
            <Input id="writer" type="text" placeholder="이름을 입력해주세요." />
          </ItemGroup>
          <ItemGroup>
            <span>비밀번호</span>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </ItemGroup>
        </TweenGroup>
        <ItemGroup>
          <span>제목</span>
          <Input id="title" type="text" placeholder="제목을 입력해주세요." />
        </ItemGroup>
        <ItemGroup>
          <span>내용</span>
          <Textarea
            id="contents"
            placeholder="내용을 작성해주세요."
            height="480"
          />
        </ItemGroup>
        <ItemGroup>
          <span>주소</span>
          <Address />
        </ItemGroup>
        <ItemGroup>
          <span>유튜브</span>
          <Input id="link" type="text" placeholder="링크를 입력해주세요." />
        </ItemGroup>
        <ItemGroup>
          <span>사진첨부</span>
          {/*<ul>*/}
          {/*  <li>1</li>*/}
          {/*  <li>2</li>*/}
          {/*  <li>3</li>*/}
          {/*</ul>*/}
        </ItemGroup>
        <ItemGroup>
          <span>메인 설정</span>
          <Radio name="main" radioList={radioList} />
        </ItemGroup>
      </Contents>
      <DefaultButton className="on">등록하기</DefaultButton>
    </Wrapper>
  );
}
