import React from 'react'
import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import {base16AteliersulphurpoolLight} from 'react-syntax-highlighter/dist/esm/styles/prism'

const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={base16AteliersulphurpoolLight} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }

export default (props) => {
    return <div className="markdown">
            <ReactMarkdown components={components} children={props.children} remarkPlugins={[gfm]} />
    </div>
}