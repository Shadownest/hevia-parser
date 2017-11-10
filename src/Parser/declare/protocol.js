import {
  Token,
  Types as Type,
  TokenList as TT
} from "../../labels";

import Node from "../../nodes";

/**
 * @return {Node}
 */
export function parseProtocol() {

  let node = new Node.ProtocolDeclaration();// done
  node.loc = this.current.loc;

  this.expect(TT.PROTOCOL);

  if (this.peek(Token.Identifier)) {
    node.name = this.extract(Token.Identifier).value;
  }

  if (this.peek(TT.COLON)) {
    node.extend = this.parseTypeInheritance();
  }

  if (this.eat(TT.LBRACE)) {
    node.body = this.parseBlock();
    this.expect(TT.RBRACE);
  }

  return (node);

}