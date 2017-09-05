// Generated from C:/Users/oviquez.ITCR/WebstormProjects/untitled1\GPParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GPParserVisitor = require('./GPParserVisitor').GPParserVisitor;

var grammarFileName = "GPParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011^\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u001c\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "#\n\u0003\f\u0003\u000e\u0003&\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004,\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u00051\n\u0005\f\u0005\u000e\u00054\u000b\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006;\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007@\n\u0007\f\u0007\u000e",
    "\u0007C\u000b\u0007\u0003\b\u0003\b\u0003\b\u0007\bH\n\b\f\b\u000e\b",
    "K\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\tT\n\t\u0003\n\u0003\n\u0003\n\u0007\nY\n\n\f\n\u000e\n\\\u000b\n\u0003",
    "\n\u0002\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002",
    "\u0002\u0002`\u0002\u001b\u0003\u0002\u0002\u0002\u0004\u001d\u0003",
    "\u0002\u0002\u0002\u0006+\u0003\u0002\u0002\u0002\b-\u0003\u0002\u0002",
    "\u0002\n:\u0003\u0002\u0002\u0002\f<\u0003\u0002\u0002\u0002\u000eD",
    "\u0003\u0002\u0002\u0002\u0010S\u0003\u0002\u0002\u0002\u0012U\u0003",
    "\u0002\u0002\u0002\u0014\u0015\u0005\u0004\u0003\u0002\u0015\u0016\u0005",
    "\b\u0005\u0002\u0016\u0017\u0007\u0002\u0002\u0003\u0017\u001c\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0005\b\u0005\u0002\u0019\u001a\u0007",
    "\u0002\u0002\u0003\u001a\u001c\u0003\u0002\u0002\u0002\u001b\u0014\u0003",
    "\u0002\u0002\u0002\u001b\u0018\u0003\u0002\u0002\u0002\u001c\u0003\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0005\u0006\u0004\u0002\u001e$\u0007",
    "\u0005\u0002\u0002\u001f \u0005\u0006\u0004\u0002 !\u0007\u0005\u0002",
    "\u0002!#\u0003\u0002\u0002\u0002\"\u001f\u0003\u0002\u0002\u0002#&\u0003",
    "\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002",
    "%\u0005\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002\'(\u0007\u0003",
    "\u0002\u0002(,\u0005\u0012\n\u0002)*\u0007\u0004\u0002\u0002*,\u0005",
    "\u0012\n\u0002+\'\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002",
    ",\u0007\u0003\u0002\u0002\u0002-2\u0005\n\u0006\u0002./\u0007\u0005",
    "\u0002\u0002/1\u0005\n\u0006\u00020.\u0003\u0002\u0002\u000214\u0003",
    "\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u0002",
    "3\t\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000256\u0007\r\u0002",
    "\u000267\u0007\u0007\u0002\u00027;\u0005\f\u0007\u00028;\u0005\f\u0007",
    "\u00029;\u0003\u0002\u0002\u0002:5\u0003\u0002\u0002\u0002:8\u0003\u0002",
    "\u0002\u0002:9\u0003\u0002\u0002\u0002;\u000b\u0003\u0002\u0002\u0002",
    "<A\u0005\u000e\b\u0002=>\u0007\n\u0002\u0002>@\u0005\u000e\b\u0002?",
    "=\u0003\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002",
    "\u0002AB\u0003\u0002\u0002\u0002B\r\u0003\u0002\u0002\u0002CA\u0003",
    "\u0002\u0002\u0002DI\u0005\u0010\t\u0002EF\u0007\u000b\u0002\u0002F",
    "H\u0005\u0010\t\u0002GE\u0003\u0002\u0002\u0002HK\u0003\u0002\u0002",
    "\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002J\u000f\u0003",
    "\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002LM\u0007\b\u0002\u0002M",
    "N\u0005\f\u0007\u0002NO\u0007\t\u0002\u0002OT\u0003\u0002\u0002\u0002",
    "PT\u0007\r\u0002\u0002QT\u0007\f\u0002\u0002RT\u0007\u000e\u0002\u0002",
    "SL\u0003\u0002\u0002\u0002SP\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002",
    "\u0002SR\u0003\u0002\u0002\u0002T\u0011\u0003\u0002\u0002\u0002UZ\u0007",
    "\r\u0002\u0002VW\u0007\u0006\u0002\u0002WY\u0007\r\u0002\u0002XV\u0003",
    "\u0002\u0002\u0002Y\\\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002",
    "Z[\u0003\u0002\u0002\u0002[\u0013\u0003\u0002\u0002\u0002\\Z\u0003\u0002",
    "\u0002\u0002\u000b\u001b$+2:AISZ"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'INT'", "'STRING'", "';'", "','", "'='", "'('", 
                     "')'", "'+'", "'*'" ];

var symbolicNames = [ null, "INT", "STRING", "PyCOMA", "COMA", "ASIGN", 
                      "PIZQ", "PDER", "SUMA", "MUL", "NUM", "ID", "STR", 
                      "LINE_COMMENT", "SPECIAL_COMMENT", "WS" ];

var ruleNames =  [ "program", "declarations", "declaration", "statements", 
                   "statement", "expression", "term", "factor", "idlist" ];

function GPParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GPParser.prototype = Object.create(antlr4.Parser.prototype);
GPParser.prototype.constructor = GPParser;

Object.defineProperty(GPParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GPParser.EOF = antlr4.Token.EOF;
GPParser.INT = 1;
GPParser.STRING = 2;
GPParser.PyCOMA = 3;
GPParser.COMA = 4;
GPParser.ASIGN = 5;
GPParser.PIZQ = 6;
GPParser.PDER = 7;
GPParser.SUMA = 8;
GPParser.MUL = 9;
GPParser.NUM = 10;
GPParser.ID = 11;
GPParser.STR = 12;
GPParser.LINE_COMMENT = 13;
GPParser.SPECIAL_COMMENT = 14;
GPParser.WS = 15;

GPParser.RULE_program = 0;
GPParser.RULE_declarations = 1;
GPParser.RULE_declaration = 2;
GPParser.RULE_statements = 3;
GPParser.RULE_statement = 4;
GPParser.RULE_expression = 5;
GPParser.RULE_term = 6;
GPParser.RULE_factor = 7;
GPParser.RULE_idlist = 8;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GPParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;


 
ProgramContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CondeclsContext(parser, ctx) {
	ProgramContext.call(this, parser);
    ProgramContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CondeclsContext.prototype = Object.create(ProgramContext.prototype);
CondeclsContext.prototype.constructor = CondeclsContext;

GPParser.CondeclsContext = CondeclsContext;

CondeclsContext.prototype.declarations = function() {
    return this.getTypedRuleContext(DeclarationsContext,0);
};

CondeclsContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

CondeclsContext.prototype.EOF = function() {
    return this.getToken(GPParser.EOF, 0);
};
CondeclsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitCondecls(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SindeclsContext(parser, ctx) {
	ProgramContext.call(this, parser);
    ProgramContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SindeclsContext.prototype = Object.create(ProgramContext.prototype);
SindeclsContext.prototype.constructor = SindeclsContext;

GPParser.SindeclsContext = SindeclsContext;

SindeclsContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

SindeclsContext.prototype.EOF = function() {
    return this.getToken(GPParser.EOF, 0);
};
SindeclsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitSindecls(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GPParser.ProgramContext = ProgramContext;

GPParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GPParser.RULE_program);
    try {
        this.state = 25;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GPParser.INT:
        case GPParser.STRING:
            localctx = new CondeclsContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 18;
            this.declarations();
            this.state = 19;
            this.statements();
            this.state = 20;
            this.match(GPParser.EOF);
            break;
        case GPParser.EOF:
        case GPParser.PyCOMA:
        case GPParser.PIZQ:
        case GPParser.NUM:
        case GPParser.ID:
        case GPParser.STR:
            localctx = new SindeclsContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 22;
            this.statements();
            this.state = 23;
            this.match(GPParser.EOF);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GPParser.RULE_declarations;
    return this;
}

DeclarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationsContext.prototype.constructor = DeclarationsContext;


 
DeclarationsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DeclsContext(parser, ctx) {
	DeclarationsContext.call(this, parser);
    DeclarationsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeclsContext.prototype = Object.create(DeclarationsContext.prototype);
DeclsContext.prototype.constructor = DeclsContext;

GPParser.DeclsContext = DeclsContext;

DeclsContext.prototype.declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclarationContext);
    } else {
        return this.getTypedRuleContext(DeclarationContext,i);
    }
};

DeclsContext.prototype.PyCOMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GPParser.PyCOMA);
    } else {
        return this.getToken(GPParser.PyCOMA, i);
    }
};

DeclsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitDecls(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GPParser.DeclarationsContext = DeclarationsContext;

GPParser.prototype.declarations = function() {

    var localctx = new DeclarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GPParser.RULE_declarations);
    var _la = 0; // Token type
    try {
        localctx = new DeclsContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.declaration();
        this.state = 28;
        this.match(GPParser.PyCOMA);
        this.state = 34;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GPParser.INT || _la===GPParser.STRING) {
            this.state = 29;
            this.declaration();
            this.state = 30;
            this.match(GPParser.PyCOMA);
            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GPParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;


 
DeclarationContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IntdeclContext(parser, ctx) {
	DeclarationContext.call(this, parser);
    DeclarationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntdeclContext.prototype = Object.create(DeclarationContext.prototype);
IntdeclContext.prototype.constructor = IntdeclContext;

GPParser.IntdeclContext = IntdeclContext;

IntdeclContext.prototype.INT = function() {
    return this.getToken(GPParser.INT, 0);
};

IntdeclContext.prototype.idlist = function() {
    return this.getTypedRuleContext(IdlistContext,0);
};
IntdeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitIntdecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StrdeclContext(parser, ctx) {
	DeclarationContext.call(this, parser);
    DeclarationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StrdeclContext.prototype = Object.create(DeclarationContext.prototype);
StrdeclContext.prototype.constructor = StrdeclContext;

GPParser.StrdeclContext = StrdeclContext;

StrdeclContext.prototype.STRING = function() {
    return this.getToken(GPParser.STRING, 0);
};

StrdeclContext.prototype.idlist = function() {
    return this.getTypedRuleContext(IdlistContext,0);
};
StrdeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitStrdecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GPParser.DeclarationContext = DeclarationContext;

GPParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GPParser.RULE_declaration);
    try {
        this.state = 41;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GPParser.INT:
            localctx = new IntdeclContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 37;
            this.match(GPParser.INT);
            this.state = 38;
            this.idlist();
            break;
        case GPParser.STRING:
            localctx = new StrdeclContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 39;
            this.match(GPParser.STRING);
            this.state = 40;
            this.idlist();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GPParser.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;


 
StatementsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StatsContext(parser, ctx) {
	StatementsContext.call(this, parser);
    StatementsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatsContext.prototype = Object.create(StatementsContext.prototype);
StatsContext.prototype.constructor = StatsContext;

GPParser.StatsContext = StatsContext;

StatsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatsContext.prototype.PyCOMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GPParser.PyCOMA);
    } else {
        return this.getToken(GPParser.PyCOMA, i);
    }
};

StatsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitStats(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GPParser.StatementsContext = StatementsContext;

GPParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GPParser.RULE_statements);
    var _la = 0; // Token type
    try {
        localctx = new StatsContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.statement();
        this.state = 48;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GPParser.PyCOMA) {
            this.state = 44;
            this.match(GPParser.PyCOMA);
            this.state = 45;
            this.statement();
            this.state = 50;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GPParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function EpsstatContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EpsstatContext.prototype = Object.create(StatementContext.prototype);
EpsstatContext.prototype.constructor = EpsstatContext;

GPParser.EpsstatContext = EpsstatContext;

EpsstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitEpsstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprstatContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprstatContext.prototype = Object.create(StatementContext.prototype);
ExprstatContext.prototype.constructor = ExprstatContext;

GPParser.ExprstatContext = ExprstatContext;

ExprstatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExprstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitExprstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdstatContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdstatContext.prototype = Object.create(StatementContext.prototype);
IdstatContext.prototype.constructor = IdstatContext;

GPParser.IdstatContext = IdstatContext;

IdstatContext.prototype.ID = function() {
    return this.getToken(GPParser.ID, 0);
};

IdstatContext.prototype.ASIGN = function() {
    return this.getToken(GPParser.ASIGN, 0);
};

IdstatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
IdstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitIdstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GPParser.StatementContext = StatementContext;

GPParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GPParser.RULE_statement);
    try {
        this.state = 56;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IdstatContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 51;
            this.match(GPParser.ID);
            this.state = 52;
            this.match(GPParser.ASIGN);
            this.state = 53;
            this.expression();
            break;

        case 2:
            localctx = new ExprstatContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 54;
            this.expression();
            break;

        case 3:
            localctx = new EpsstatContext(this, localctx);
            this.enterOuterAlt(localctx, 3);

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GPParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ExprContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprContext.prototype = Object.create(ExpressionContext.prototype);
ExprContext.prototype.constructor = ExprContext;

GPParser.ExprContext = ExprContext;

ExprContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

ExprContext.prototype.SUMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GPParser.SUMA);
    } else {
        return this.getToken(GPParser.SUMA, i);
    }
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GPParser.ExpressionContext = ExpressionContext;

GPParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GPParser.RULE_expression);
    var _la = 0; // Token type
    try {
        localctx = new ExprContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.term();
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GPParser.SUMA) {
            this.state = 59;
            this.match(GPParser.SUMA);
            this.state = 60;
            this.term();
            this.state = 65;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GPParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;


 
TermContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Term1Context(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Term1Context.prototype = Object.create(TermContext.prototype);
Term1Context.prototype.constructor = Term1Context;

GPParser.Term1Context = Term1Context;

Term1Context.prototype.factor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FactorContext);
    } else {
        return this.getTypedRuleContext(FactorContext,i);
    }
};

Term1Context.prototype.MUL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GPParser.MUL);
    } else {
        return this.getToken(GPParser.MUL, i);
    }
};

Term1Context.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitTerm1(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GPParser.TermContext = TermContext;

GPParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, GPParser.RULE_term);
    var _la = 0; // Token type
    try {
        localctx = new Term1Context(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.factor();
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GPParser.MUL) {
            this.state = 67;
            this.match(GPParser.MUL);
            this.state = 68;
            this.factor();
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GPParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;


 
FactorContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NumfactContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumfactContext.prototype = Object.create(FactorContext.prototype);
NumfactContext.prototype.constructor = NumfactContext;

GPParser.NumfactContext = NumfactContext;

NumfactContext.prototype.NUM = function() {
    return this.getToken(GPParser.NUM, 0);
};
NumfactContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitNumfact(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GroupfactContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GroupfactContext.prototype = Object.create(FactorContext.prototype);
GroupfactContext.prototype.constructor = GroupfactContext;

GPParser.GroupfactContext = GroupfactContext;

GroupfactContext.prototype.PIZQ = function() {
    return this.getToken(GPParser.PIZQ, 0);
};

GroupfactContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

GroupfactContext.prototype.PDER = function() {
    return this.getToken(GPParser.PDER, 0);
};
GroupfactContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitGroupfact(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StrfactContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StrfactContext.prototype = Object.create(FactorContext.prototype);
StrfactContext.prototype.constructor = StrfactContext;

GPParser.StrfactContext = StrfactContext;

StrfactContext.prototype.STR = function() {
    return this.getToken(GPParser.STR, 0);
};
StrfactContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitStrfact(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdfactContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdfactContext.prototype = Object.create(FactorContext.prototype);
IdfactContext.prototype.constructor = IdfactContext;

GPParser.IdfactContext = IdfactContext;

IdfactContext.prototype.ID = function() {
    return this.getToken(GPParser.ID, 0);
};
IdfactContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitIdfact(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GPParser.FactorContext = FactorContext;

GPParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, GPParser.RULE_factor);
    try {
        this.state = 81;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GPParser.PIZQ:
            localctx = new GroupfactContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.match(GPParser.PIZQ);
            this.state = 75;
            this.expression();
            this.state = 76;
            this.match(GPParser.PDER);
            break;
        case GPParser.ID:
            localctx = new IdfactContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
            this.match(GPParser.ID);
            break;
        case GPParser.NUM:
            localctx = new NumfactContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 79;
            this.match(GPParser.NUM);
            break;
        case GPParser.STR:
            localctx = new StrfactContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 80;
            this.match(GPParser.STR);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GPParser.RULE_idlist;
    return this;
}

IdlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdlistContext.prototype.constructor = IdlistContext;


 
IdlistContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Idlist1Context(parser, ctx) {
	IdlistContext.call(this, parser);
    IdlistContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Idlist1Context.prototype = Object.create(IdlistContext.prototype);
Idlist1Context.prototype.constructor = Idlist1Context;

GPParser.Idlist1Context = Idlist1Context;

Idlist1Context.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GPParser.ID);
    } else {
        return this.getToken(GPParser.ID, i);
    }
};


Idlist1Context.prototype.COMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GPParser.COMA);
    } else {
        return this.getToken(GPParser.COMA, i);
    }
};

Idlist1Context.prototype.accept = function(visitor) {
    if ( visitor instanceof GPParserVisitor ) {
        return visitor.visitIdlist1(this);
    } else {
        return visitor.visitChildren(this);
    }
};



GPParser.IdlistContext = IdlistContext;

GPParser.prototype.idlist = function() {

    var localctx = new IdlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, GPParser.RULE_idlist);
    var _la = 0; // Token type
    try {
        localctx = new Idlist1Context(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(GPParser.ID);
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GPParser.COMA) {
            this.state = 84;
            this.match(GPParser.COMA);
            this.state = 85;
            this.match(GPParser.ID);
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.GPParser = GPParser;
