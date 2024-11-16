import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";
import Navbar from "./comp/Navbar";
import Result from "./comp/Result";

function App() {
  const [html_edit, sethtml_edit] = useState("");
  const [css_edit, setcss_edit] = useState("");
  const [js_edit, setjs_edit] = useState("");

  const onChangehtml = useCallback((value) => {
    sethtml_edit(value);
  }, []);

  //* Css onchange handler
  const onChangecss = useCallback((value) => {
    setcss_edit(value);
  }, []);

  //* JavaScript onchange handler
  const onChangejavascript = useCallback((value) => {
    setjs_edit(value);
  }, []);
  const srcCode = `
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
`;

  return (
    <>
      <Navbar />
      <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
            <CodeMirror
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangehtml}
            />
          </div>

          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
            <CodeMirror
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangecss}
            />
          </div>

          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">
              JAVASCRIPT
            </h2>
            <CodeMirror
              value={js_edit} //This sets the initial value of the editor to the content of the js_edit variable.
              height="342px"
              theme="dark"
              extensions={[javascript(true)]} //extensions={[javascript(true)]}: This specifies the language mode for the editor. 
              // The javascript(true) argument enables the JavaScript mode, which provides syntax highlighting and other language-specific
              //  features for JavaScript code.extensions={[javascript(true)]}: This specifies the language mode for the editor.
              //  The javascript(true) argument enables the JavaScript mode, which provides syntax highlighting and other language-specific 
              // features for JavaScript code.
              onChange={onChangejavascript}
            />
          </div>
        </div>
      </div>
      <Result srcCode={srcCode} />
    </>
  );
}

export default App;
