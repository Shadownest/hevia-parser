import {
  Token,
  Types as Type,
  TokenList as TT
} from "../../labels";

import Node from "../../nodes";

/**
 * @return {Node}
 */
export function parsePseudoProperty() {

  // WillSet, didSet, set can have parameters
  let allowParameters = (
    this.peek(TT.SET) ||
    this.peek(TT.WILLSET) ||
    this.peek(TT.DIDSET)
  );

  let node = new Node.PseudoProperty;// done
  node.loc = this.current.loc;

  node.name = this.current.name;

  this.next();

  if (this.peek(TT.LPAREN) && allowParameters) {
    node.arguments = this.parseArguments();
  }

  // Pseudos dont explicit need a body
  if (this.eat(TT.LBRACE)) {
    node.body = this.parseBlock();
    this.expect(TT.RBRACE);
  }

  return (node);

}