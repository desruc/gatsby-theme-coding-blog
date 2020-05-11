/* eslint react/display-name: 0 */
import React from "react";
import { preToCodeBlock } from "mdx-utils";
import { Text } from "@theme-ui/components";
import CodeBlock from "../components/CodeBlock";

const components = {
  Text: ({ children, ...props }) => <Text {...props}>{children}</Text>,
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
