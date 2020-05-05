import React from "react";
import { Box, Container } from "theme-ui";

import Header from "./Header";

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Header />
    <Box>{children}</Box>
  </Container>
);

export default Layout;
