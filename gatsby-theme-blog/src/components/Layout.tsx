/** @jsx jsx */
import React from "react";
import { jsx, Box, Container } from "theme-ui";
import CodeStyles from "../styles/code";

import Seo from "./Seo";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <Seo />
    <Container>
      <Header />
      <Box sx={{ ...CodeStyles }}>{children}</Box>
      <Footer />
    </Container>
  </React.Fragment>
);

export default Layout;
