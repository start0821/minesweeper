(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{126:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(55),c=n(4),l=-3,s=-2,u=-1,o=0,f={Hidden:0,Visible:1,Flagged:2},d=function(e,t,n){return e[t]===n},m=function(e){return d(e,"value",u)},v=function(e){return d(e,"state",f.Hidden)},h=function(e){return d(e,"state",f.Flagged)},b=function(e){return d(e,"value",l)},g=(n(73),Object(a.memo)((function(e){var t=e.state,n=e.cellRevealHandler,a=e.flagPlantingHandler,r=e.neighborsRevealHandler,l=t.value,u=l===s,f=b(t);return v(t)?i.a.createElement("div",{className:"cell",onClick:n,onContextMenu:a}):h(t)?i.a.createElement("div",{className:"cell",onContextMenu:a},i.a.createElement(c.a,{icon:["far","flag"]})):l===o?i.a.createElement("div",{className:"cell cell__visible"}):m(t)||u||f?i.a.createElement("div",{className:"cell ".concat(u?"cell__incorrect-guess":f?"cell__busted-mine":"")},i.a.createElement(c.a,{icon:["fas","bomb"]})):i.a.createElement("div",{className:"cell cell__visible cell__visible__".concat(l),onMouseDown:r},l)}))),E=(n(74),function(e){var t=e.width,n=e.disabled,a=e.state,r=e.cellRevealHandler,c=e.flagPlantingHandler,l=e.neighborsRevealHandler,s=function(e,t){var a=e.target,i=e.nativeEvent.which;if(!n){a.addEventListener("mouseup",(function e(n){i!==n.which&&l(t),a.removeEventListener("mouseup",e)}))}};return i.a.createElement("div",{className:"field".concat(n?" disabled":""),style:{gridTemplateColumns:"repeat(".concat(t,", 1fr)")},onContextMenu:function(e){e.preventDefault()}},a.map((function(e,t){return i.a.createElement(g,{key:t,state:e,cellRevealHandler:function(){!n&&r(e,t)},flagPlantingHandler:function(){!n&&c(e,t)},neighborsRevealHandler:function(e){s(e,t)}})})))}),p=(n(75),function(){return i.a.createElement("footer",null,i.a.createElement("span",null,"Powered by",i.a.createElement("a",{href:"https://github.com/FakeMetalFan",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(c.a,{icon:["fab","github"]})),"\xa9",i.a.createElement("span",null,(new Date).getFullYear())))}),y=(n(76),function(){return i.a.createElement("header",null,i.a.createElement("span",{className:"title"},"Minesweeper"),i.a.createElement("a",{href:"https://github.com/FakeMetalFan/minesweeper",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(c.a,{icon:["fab","github"]})))}),_=n(5),j=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(!1);Object(a.useEffect)((function(){t.current=e}),[e]);for(var i=arguments.length,r=new Array(i>1?i-1:0),c=1;c<i;c++)r[c-1]=arguments[c];Object(a.useEffect)((function(){n.current?t.current():n.current=!0}),r)},O=n(61),C=n(7),k=n(56),w=n.n(k),F=n(57),H=n.n(F),M=n(24),A=n(25),N=function(){function e(t){Object(M.a)(this,e),this._fieldWidth=t}return Object(A.a)(e,[{key:"to2DAddresses",value:function(e){var t=e%this._fieldWidth;return[t,(e-t)/this._fieldWidth]}},{key:"to1DAddress",value:function(e,t){return t*this._fieldWidth+e}}]),e}(),R=function(){function e(t,n){Object(M.a)(this,e),this._fieldWidth=t,this._fieldHeight=n,this._cellAddressUtils=new N(t)}return Object(A.a)(e,[{key:"canFloodFill",value:function(e,t){return!this.getAddresses(t).some((function(t){var n=e[t];return m(n)&&!h(n)}))}},{key:"getAddresses",value:function(e){for(var t=this._cellAddressUtils.to2DAddresses(e),n=Object(_.a)(t,2),a=n[0],i=n[1],r=[],c=-1;c<2;c++)for(var l=-1;l<2;l++)if(c||l){var s=a+c,u=i+l;this._doesAddressExist(s,this._fieldWidth)&&this._doesAddressExist(u,this._fieldHeight)&&r.push(this._cellAddressUtils.to1DAddress(s,u))}return r}},{key:"getMinedCount",value:function(e,t){return this._getCountBy(e,t,m)}},{key:"canRevealNeighbors",value:function(e,t){return this.getMinedCount(e,t)===this._getCountBy(e,t,h)}},{key:"_getCountBy",value:function(e,t,n){return this.getAddresses(t).reduce((function(t,a){return n(e[a])?t+1:t}),0)}},{key:"_doesAddressExist",value:function(e,t){return-1<e&&e<t}}]),e}(),V=(n(126),function(e){var t=e.minesCount,n=e.smileyFaceClickHandler,r=e.shouldStartCountingSeconds,l=e.isBust,s=e.isVictory,u=Object(a.useState)(0),o=Object(_.a)(u,2),f=o[0],d=o[1],m=Object(a.useState)(!1),v=Object(_.a)(m,2),h=v[0],b=v[1],g=function(e){return e<1?"000":e<10?"00".concat(e):e<100?"0".concat(e):"".concat(e)};return j((function(){r&&b(!0)}),r),j((function(){(l||s)&&b(!1)}),l,s),function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(t){var e=setInterval((function(){n.current()}),t);return function(){clearInterval(e)}}}),[t])}((function(){d(f+1)}),h?1e3:null),i.a.createElement("div",{className:"indicators"},i.a.createElement("div",{className:"mines-count"},g(t)),i.a.createElement("div",{className:"smiley-face",onClick:function(){b(!1),d(0),n()}},i.a.createElement(c.a,{icon:["far",s?"smile":l?"frown":"meh"]})),i.a.createElement("div",{className:"timer"},g(f)))}),B=n(62),D=n(58),S=n.n(D),x=(n(181),"update-is-init"),I="update-remaining-mines-count",W="reset",P="update-is-bust",U="update-is-victory",J=function(e,t){var n=t.type,a=t.payload;return n===W?Object(B.a)({},a):Object(C.a)(e,(function(e){switch(n){case x:e.isInit=!0;break;case I:e.remainingMinesCount+=a.increment;break;case P:e.isBust=!0;break;case U:e.remainingMinesCount=0,e.isVictory=!0}}))},L=function(e){var t=e.minesCount,n=e.fieldDimension,r={remainingMinesCount:t,isInit:!1,isBust:!1,isVictory:!1},c=Object(a.useReducer)(J,r),d=Object(_.a)(c,2),g=d[0],p=g.remainingMinesCount,y=g.isInit,k=g.isBust,F=g.isVictory,M=d[1],A=function(e){var t=e.width,n=e.height,i=e.minesCount,r=t*n,c=new R(t,n),d=Object(a.useMemo)((function(){return Array(r).fill({value:o,state:f.Hidden})}),[r]),b=Object(a.useState)(d),g=Object(_.a)(b,2),E=g[0],p=g[1],y=function(e,t){return Object(C.a)(E,(function(n){null===t||void 0===t||t(n),n[e].state=f.Visible;!function e(t){c.canFloodFill(n,t)&&c.getAddresses(t).forEach((function(t){var a=n[t];m(a)||!v(a)||h(a)||(a.state=f.Visible,e(t))}))}(e)}))},j=function(e){return Object(C.a)(E,(function(t){e(t),t.forEach((function(e,n){m(e)&&!h(e)&&(e.state=f.Visible),!m(e)&&h(e)&&(t[n]={value:s,state:f.Visible})}))}))};return{field:E,reset:function(){p(d)},init:function(e){p(y(e,(function(t){for(var n=w()(H()(r),[e].concat(Object(O.a)(c.getAddresses(e)))),a=new Set;a.size<i;)a.add(n[Math.random()*n.length|0]);a.forEach((function(e){t[e].value=u})),t.forEach((function(e,n){!m(e)&&(e.value=c.getMinedCount(t,n))}))})))},revealCell:function(e,t){p(m(e)?j((function(e){e[t]={value:l,state:f.Visible}})):y(t))},plantFlag:function(e,t){p(Object(C.a)(E,(function(n){n[t].state=f[h(e)?"Hidden":"Flagged"]})))},revealNeighbors:function(e){c.canFloodFill(E,e)?p(y(e)):c.canRevealNeighbors(E,e)&&p(j((function(t){c.getAddresses(e).forEach((function(e){var n=t[e];m(n)&&!h(n)&&(n.value=l),!m(n)&&h(n)&&(n.value=s),n.state=f.Visible}))})))},markMines:function(){p(Object(C.a)(E,(function(e){e.forEach((function(e){m(e)&&(e.state=f.Flagged)}))})))}}}({minesCount:t,width:n,height:n}),N=A.field,B=A.reset,D=A.init,L=A.revealCell,z=A.plantFlag,T=A.revealNeighbors,Y=A.markMines;return j((function(){N.some(b)?M({type:P}):S()(N,m).some(v)||(Y(),M({type:U}))}),N),i.a.createElement("div",{className:"minesweeper"},i.a.createElement(V,{minesCount:p,isBust:k,isVictory:F,shouldStartCountingSeconds:y,smileyFaceClickHandler:function(){B(),M({type:W,payload:r})}}),i.a.createElement(E,{width:n,disabled:k||F,state:N,cellRevealHandler:function(e,t){y?L(e,t):(D(t),M({type:x}))},flagPlantingHandler:function(e,t){z(e,t),M({type:I,payload:{increment:h(e)?1:-1}})},neighborsRevealHandler:T}))},z=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,null),i.a.createElement(L,{minesCount:30,fieldDimension:16}),i.a.createElement(p,null))},T=n(12),Y=n(59),q=n(14),G=n(60);n(182);T.b.add(Y.a,G.a,q.a,q.c,q.b,q.d),Object(r.render)(i.a.createElement(a.StrictMode,null,i.a.createElement(z,null)),document.getElementById("root"))},63:function(e,t,n){e.exports=n(183)},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.d5e68d92.chunk.js.map