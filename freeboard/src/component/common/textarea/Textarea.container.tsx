export default function Textarea(props: IPropsTextarea): JSX.Element {
  return (
    <textarea
      id={props.id}
      placeholder={props.placeholder}
      style={{ height: `${props.height}px` }}
    />
  );
}

interface IPropsTextarea {
  id: string;
  placeholder: string;
  height: string;
}
