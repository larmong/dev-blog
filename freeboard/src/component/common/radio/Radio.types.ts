export interface radioListType {
  name: string;
  value: string;
  state: boolean;
}

export interface IPropsRadio {
  name: string;
  radioList: radioListType[];
}
