// import join from "lodash-es/join";
// import { join } from "lodash-es"; // lodash-es 默认引入单个文件，即使不设置 usedExports 也会进行 tree-shaking
// lodash 包无法进行 tree-shaking。即使设置了 usedExports 也不会
import { join } from "lodash";

function component() {
  const element = document.createElement("div");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
