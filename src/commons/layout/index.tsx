interface ILayoutProps {
  children: JSX.Element;
}

export const Layout = (props: ILayoutProps) => {
  return <>{props.children}</>;
};
