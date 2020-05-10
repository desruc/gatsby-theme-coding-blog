/* eslint react/display-name: 0 */
import React from "react";
import { preToCodeBlock } from "mdx-utils";
import CodeBlock from "../components/CodeBlock";

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <CodeBlock {...props} />;
    }
    return <pre {...preProps} />;
  },
  wrapper: ({ children }) => <>{children}</>,
};

export default components;
