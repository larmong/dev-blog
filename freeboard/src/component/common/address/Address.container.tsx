import { AddressBtn, AddressInput, TopGroup, Wrapper } from "./Address.style";

export default function Address(props: IPropsAddress): JSX.Element {
  return (
    <Wrapper>
      <TopGroup>
        <AddressInput
          id="zipcode"
          className="zipcode"
          placeholder="07250"
          maxLength={5}
        />
        <AddressBtn>우편번호 검색</AddressBtn>
      </TopGroup>
      <AddressInput id="addressFirst" className="address-first" />
      <AddressInput id="addressSecond" className="address-second" />
    </Wrapper>
  );
}

interface IPropsAddress {}
