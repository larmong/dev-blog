import { IPropsRadio, radioListType } from "./Radio.types";
import { RadioInput, Wrapper } from "./Radio.style";
import { useState } from "react";

export default function Radio(props: IPropsRadio): JSX.Element {
  return (
    <Wrapper>
      {props.radioList.map((radio: radioListType, index: number) => (
        <RadioInput key={index}>
          <input type="radio" id={radio.value} name={props.name} />
          <label htmlFor={radio.value}></label>
          <span>{radio.name}</span>
        </RadioInput>
      ))}
    </Wrapper>
  );
}
