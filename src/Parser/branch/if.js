import {
  Token,
  Types as Type,
  TokenList as TT
} from "../../labels";

import Node from "../../nodes";

/**
 * @return {Node}
 */
export function parseIfStatement() {

  let node = new Node.IfStatement();

  if (this.eat(TT.IF)) {
    this.eat(TT.LPAREN);
    node.condition = this.parseExpressionStatement();
    this.eat(TT.RPAREN);
  }

  /** Consequent */
  this.expect(TT.LBRACE);
  this.pushScope(node);
  node.consequent = this.parseBlock();
  this.popScope();
  this.expect(TT.RBRACE);

  /** Consequent */
  if (this.eat(TT.ELSE)) {
    node.alternate = this.parseIfStatement();
  }

  return (node);

}