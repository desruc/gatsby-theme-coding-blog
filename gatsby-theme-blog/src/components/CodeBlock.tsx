import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";

type CodeBlockProps = {
  codeString: string;
  [key: string]: any;
};

const CodeBlock = ({ codeString, className: codeClassName, ...props }: CodeBlockProps) => {
  const matches = codeClassName.match(/language-(?<lang>.*)/);
  const language = matches && matches.groups && matches.groups.lang ? matches.groups.lang : ``;
  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={nightOwl}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
