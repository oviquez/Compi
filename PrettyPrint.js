var parser = require('generated/GPParser');
var parserVisitor = require('generated/GPParserVisitor').GPParserVisitor;
var componente = null;

function PrettyPrint (msg) {
    parserVisitor.call(this);
    componente=msg;
    return this;
};

PrettyPrint.prototype = Object.create(parserVisitor.prototype);
PrettyPrint.prototype.constructor = PrettyPrint;

var cont=0;

function printtab(n)
{
    for(num=n; num != 0; num--)
        componente.value += "+++";
    componente.value += ">";
};

// Visit a parse tree produced by GPParser#condecls.
PrettyPrint.prototype.visitCondecls = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.declarations());
    this.visit(ctx.statements());
    cont--;

    return null;
};


// Visit a parse tree produced by GPParser#sindecls.
PrettyPrint.prototype.visitSindecls = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.statements());
    cont--;

    return null;
};


// Visit a parse tree produced by GPParser#decls.
PrettyPrint.prototype.visitDecls = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.declaration(0));
    for (i=1; i <= ctx.declaration().length-1; i++)
    {
        this.visit(ctx.declaration(i));
    }
    cont--;

    return null;
};


// Visit a parse tree produced by GPParser#intdecl.
PrettyPrint.prototype.visitIntdecl = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';
    cont++;
    this.visit(ctx.idlist());
    //console.log('/n');
    cont--;
    return null;
};


// Visit a parse tree produced by GPParser#strdecl.
PrettyPrint.prototype.visitStrdecl = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.idlist());
    //console.log('/n');
    cont--;

    return null;
};


// Visit a parse tree produced by GPParser#stats.
PrettyPrint.prototype.visitStats = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;

    for (i=1; i <= ctx.statement().length-1; i++) {
        this.visit(ctx.statement(i));
    }

    cont--;

    return null;
};


// Visit a parse tree produced by GPParser#idstat.
PrettyPrint.prototype.visitIdstat = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#exprstat.
PrettyPrint.prototype.visitExprstat = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#epsstat.
PrettyPrint.prototype.visitEpsstat = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#expr.
PrettyPrint.prototype.visitExpr = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#term1.
PrettyPrint.prototype.visitTerm1 = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#groupfact.
PrettyPrint.prototype.visitGroupfact = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#idfact.
PrettyPrint.prototype.visitIdfact = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#numfact.
PrettyPrint.prototype.visitNumfact = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#strfact.
PrettyPrint.prototype.visitStrfact = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by GPParser#idlist1.
PrettyPrint.prototype.visitIdlist1 = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    for (i = 0; i <= ctx.ID().length-1; i++)
    {
        printtab(cont + 1);
        componente.value += " TokenID --> " + ctx.ID(i).getSymbol().text + '\n';
    }
    cont--;
    return null;
};



exports.PrettyPrint = PrettyPrint;

/*

@Override public Object visitDecls(GPParser.DeclsContext ctx) {

}

@Override public Object visitIntdecl(GPParser.IntdeclContext ctx) {

}

@Override public Object visitStrdecl(GPParser.StrdeclContext ctx) {

}

@Override public Object visitStats(GPParser.StatsContext ctx) {

}

@Override public Object visitAsignstat(GPParser.AsignstatContext ctx) {
    return null;
}

@Override public Object visitExprstat(GPParser.ExprstatContext ctx) {
    return null;
}

@Override public Object visitEpsstat(GPParser.EpsstatContext ctx) {
    return null;
}

@Override public Object visitExpr(GPParser.ExprContext ctx) {
    return null;
}

@Override public Object visitTerm1(GPParser.Term1Context ctx) {
    return null;
}

@Override public Object visitGroupfact(GPParser.GroupfactContext ctx) {
    return null;
}

@Override public Object visitIdfact(GPParser.IdfactContext ctx) {
    return null;
}

@Override public Object visitNumfact(GPParser.NumfactContext ctx) {
    return null;
}

@Override public Object visitStrfact(GPParser.StrfactContext ctx) {
    return null;
}

@Override public Object visitIdlist1(GPParser.Idlist1Context ctx) {

}*/


