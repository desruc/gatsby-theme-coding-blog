/** @jsx jsx */
import React from "react";
import { jsx, Box, Container, useColorMode } from "theme-ui";
import { Global } from "@emotion/core";
import CodeStyles from "../styles/code";

import Seo from "./Seo";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  const [colorMode] = useColorMode();
  return (
    <React.Fragment>
      <Global
        styles={() => ({
          body: {
            transition: `all 0.3s ease-in-out`,
          },
        })}
      />
      <Seo />
      <Container>
        <Header />
        <Box sx={{ ...CodeStyles(colorMode) }}>{children}</Box>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Layout;
