import {
  Token,
  Types as Type,
  TokenList as TT,
  Operators as OP
} from "../../labels";

import Node from "../../nodes";

import {
  getNameByLabel,
  getLabelByNumber
} from "../../utils";

/**
 * @param  {Node} base
 * @return {Node}
 */
export function parseUnaryExpression(base) {

  let node = new Node.UnaryExpression();// done
  node.loc = this.current.loc;

  node.isPrefix = this.isPrefixOperator(this.current);
  node.operator = TT[this.parseLiteralHead()];
  node.argument = base || this.parseBinaryExpression(0);

  return (node);

}