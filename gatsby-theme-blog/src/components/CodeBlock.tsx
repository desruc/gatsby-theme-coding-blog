import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";

type CodeBlockProps = {
  codeString: string;
  [key: string]: any;
};

const CodeBlock = ({ codeString, noLineNumbers = false, className: codeClassName, ...props }: CodeBlockProps) => {
  const matches = codeClassName.match(/language-(?<lang>.*)/);
  const language = matches && matches.groups && matches.groups.lang ? matches.groups.lang : ``;
  const hasLineNumbers = !noLineNumbers && language !== `noLineNumbers`;

  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={nightOwl}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style} data-linenumber={hasLineNumbers}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {hasLineNumbers && <span className="line-number-style">{i + 1}</span>}
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default CodeBlock;
