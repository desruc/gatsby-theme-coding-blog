import React from "react";

type Props = {
  children: React.ReactNode;
};

const HelloWorld = ({ children }: Props) => <div style={{ fontWeight: `bold` }}>Say: {children}</div>;

export default HelloWorld;
