export default function Input(props: IPropsInput): JSX.Element {
  return (
    <input id={props.id} type={props.type} placeholder={props.placeholder} />
  );
}

interface IPropsInput {
  id: string;
  type: string;
  placeholder: string;
}
