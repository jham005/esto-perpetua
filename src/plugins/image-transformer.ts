import { visit } from "unist-util-visit";
import type { Parent } from "unist";
import type { Image } from "mdast";

export function remarkImageTransformer() {
  return function transformer(tree: Parent) {
    visit(tree, "image", (node: Image) => {
      if (!node.url.startsWith("../images/"))
        node.url = "../images/" + node.url;
      const align =
        node.title == "R" ? "right" : node.title == "L" ? "left" : null;
      if (align) {
        delete node.title;
        if (!node.data) node.data = {};
        node.data.hProperties = Object.assign({}, node.data.hProperties, {
          className: align,
        });
      }
    });

    return tree;
  };
}
