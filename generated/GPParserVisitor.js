// Generated from C:/Users/oviquez.ITCR/WebstormProjects/untitled1\GPParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by GPParser.

function GPParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

GPParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
GPParserVisitor.prototype.constructor = GPParserVisitor;

// Visit a parse tree produced by GPParser#condecls.
GPParserVisitor.prototype.visitCondecls = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#sindecls.
GPParserVisitor.prototype.visitSindecls = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#decls.
GPParserVisitor.prototype.visitDecls = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#intdecl.
GPParserVisitor.prototype.visitIntdecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#strdecl.
GPParserVisitor.prototype.visitStrdecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#stats.
GPParserVisitor.prototype.visitStats = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#idstat.
GPParserVisitor.prototype.visitIdstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#exprstat.
GPParserVisitor.prototype.visitExprstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#epsstat.
GPParserVisitor.prototype.visitEpsstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#expr.
GPParserVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#term1.
GPParserVisitor.prototype.visitTerm1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#groupfact.
GPParserVisitor.prototype.visitGroupfact = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#idfact.
GPParserVisitor.prototype.visitIdfact = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#numfact.
GPParserVisitor.prototype.visitNumfact = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#strfact.
GPParserVisitor.prototype.visitStrfact = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#idlist1.
GPParserVisitor.prototype.visitIdlist1 = function(ctx) {
  return this.visitChildren(ctx);
};



exports.GPParserVisitor = GPParserVisitor;