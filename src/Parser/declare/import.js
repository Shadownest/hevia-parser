import {
  Token,
  Types as Type,
  TokenList as TT
} from "../../labels";

import Node from "../../nodes";

/**
 * @return {Node}
 */
export function parseImport() {

  let node = new Node.ImportDeclaration();// done
  node.loc = this.current.loc;

  this.expect(TT.IMPORT);

  node.specifiers = this.parseCommaSeperatedValues();

  return (node);

}