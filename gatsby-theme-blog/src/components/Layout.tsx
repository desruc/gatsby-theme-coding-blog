import React from "react";
import { Box, Container } from "theme-ui";

import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Header />
    <Box>{children}</Box>
    <Footer />
  </Container>
);

export default Layout;
