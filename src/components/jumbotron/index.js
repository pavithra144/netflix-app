import React from "react";
import {
  Container,
  Item,
  Title,
  SubTitle,
  Pane,
  Image,
  Inner,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  //important UI rendering part for jumbotron
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
    //important UI rendering part for jumbotron
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}> {children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}> {children}</SubTitle>;
};
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}> {children}</Pane>;
};
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
