(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{129:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(60),c=n(5),l=(n(77),Object(i.memo)((function(e){var t=e.state,n=e.cellRevealHandler,i=e.flagPlantingHandler,r=e.neighborsRevealHandler,l=t.isHidden,s=t.isFlagged,u=t.isEmpty,o=t.isMined,d=t.isIncorrectGuess,f=t.isBustedMine,h=t.value;return l?a.a.createElement("button",{className:"cell",onClick:n,onContextMenu:i}):s?a.a.createElement("button",{className:"cell",onContextMenu:i},a.a.createElement(c.a,{icon:["far","flag"]})):u?a.a.createElement("button",{className:"cell cell__visible"}):o||d||f?a.a.createElement("button",{className:"cell ".concat(d?"cell__incorrect-guess":f?"cell__busted-mine":"")},a.a.createElement(c.a,{icon:["fas","bomb"]})):a.a.createElement("button",{className:"cell cell__visible cell__visible__".concat(h),onMouseDown:r},h)}))),s=(n(78),function(e){var t=e.width,n=e.disabled,i=e.state,r=e.cellRevealHandler,c=e.flagPlantingHandler,s=e.neighborsRevealHandler,u=function(e,t,n){e.preventDefault(),c(t,n)},o=function(e,t){var n=e.target,i=e.nativeEvent.which;n.addEventListener("mouseup",(function e(a){i!==a.which&&s(t),n.removeEventListener("mouseup",e)}))};return a.a.createElement("div",{className:"field".concat(n?" disabled":""),style:{gridTemplateColumns:"repeat(".concat(t,", 1fr)")},onContextMenu:function(e){e.preventDefault()}},i.map((function(e,t){return a.a.createElement(l,{key:t,state:e,cellRevealHandler:function(){r(e,t)},flagPlantingHandler:function(n){u(n,e,t)},neighborsRevealHandler:function(e){o(e,t)}})})))}),u=(n(79),function(){return a.a.createElement("footer",null,a.a.createElement("span",null,"Powered by",a.a.createElement("a",{href:"https://github.com/FakeMetalFan",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(c.a,{icon:["fab","github"]})),"\xa9",a.a.createElement("span",null,(new Date).getFullYear())))}),o=(n(80),function(){return a.a.createElement("header",null,a.a.createElement("span",{className:"title"},"Minesweeper"),a.a.createElement("a",{href:"https://github.com/FakeMetalFan/minesweeper",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(c.a,{icon:["fab","github"]})))}),d=n(2),f=function(e){for(var t=Object(i.useRef)(!1),n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];Object(i.useEffect)((function(){t.current?e():t.current=!0}),a)},h=n(66),g=n(7),m=n(61),b=n.n(m),v=n(62),E=n.n(v),M=-3,j=-2,O=-1,p=0,y={Hidden:0,Visible:1,Flagged:2},F=n(9),_=n(10),k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.Hidden;Object(F.a)(this,e),this[g.b]=!0,this.value=t,this.state=n}return Object(_.a)(e,[{key:"isMined",get:function(){return this.value===O}},{key:"isBustedMine",get:function(){return this.value===M}},{key:"isIncorrectGuess",get:function(){return this.value===j}},{key:"isEmpty",get:function(){return this.value===p}},{key:"isHidden",get:function(){return this.state===y.Hidden}},{key:"isFlagged",get:function(){return this.state===y.Flagged}},{key:"isMisplacedFlag",get:function(){return!this.isMined&&this.isFlagged}},{key:"isUnrevealedMine",get:function(){return this.isMined&&!this.isFlagged}}]),e}(),w=function(){function e(t){Object(F.a)(this,e),this._fieldWidth=t}return Object(_.a)(e,[{key:"to2DAddresses",value:function(e){var t=e%this._fieldWidth;return[t,(e-t)/this._fieldWidth]}},{key:"to1DAddress",value:function(e,t){return t*this._fieldWidth+e}}]),e}(),H=function(){function e(t,n){Object(F.a)(this,e),this._fieldWidth=t,this._fieldHeight=n,this._cellAddressUtils=new w(t)}return Object(_.a)(e,[{key:"canFloodFill",value:function(e,t){return!this.getAddresses(t).some((function(t){return e[t].isUnrevealedMine}))}},{key:"getAddresses",value:function(e){for(var t=this._cellAddressUtils.to2DAddresses(e),n=Object(d.a)(t,2),i=n[0],a=n[1],r=[],c=-1;c<2;c++)for(var l=-1;l<2;l++)if(c||l){var s=i+c,u=a+l;this._doesAddressExist(s,this._fieldWidth)&&this._doesAddressExist(u,this._fieldHeight)&&r.push(this._cellAddressUtils.to1DAddress(s,u))}return r}},{key:"getMinedCount",value:function(e,t){return this._getCountBy(e,t,"isMined")}},{key:"canRevealNeighbors",value:function(e,t){return this.getMinedCount(e,t)===this._getCountBy(e,t,"isFlagged")}},{key:"_getCountBy",value:function(e,t,n){return this.getAddresses(t).reduce((function(t,i){return e[i][n]?t+1:t}),0)}},{key:"_doesAddressExist",value:function(e,t){return-1<e&&e<t}}]),e}(),C=(n(129),function(e){var t=e.minesCount,n=e.smileyFaceClickHandler,r=e.shouldStartCountingSeconds,l=e.isBust,s=e.isVictory,u=Object(i.useState)(0),o=Object(d.a)(u,2),h=o[0],g=o[1],m=Object(i.useState)(null),b=Object(d.a)(m,2),v=b[0],E=b[1],M=function(e){return e<1?"000":e<10?"00".concat(e):e<100?"0".concat(e):"".concat(e)};return f((function(){r&&E(1e3)}),r),f((function(){(l||s)&&E(null)}),l,s),function(e,t){var n=Object(i.useRef)();Object(i.useEffect)((function(){n.current=e}),[e]),Object(i.useEffect)((function(){if(t){var e=setInterval((function(){n.current()}),t);return function(){clearInterval(e)}}}),[t])}((function(){g((function(e){return e+1}))}),v),a.a.createElement("div",{className:"indicators"},a.a.createElement("div",{className:"mines-count"},M(t)),a.a.createElement("div",{className:"smiley-face",onClick:function(){E(null),g(0),n()}},a.a.createElement(c.a,{icon:["far",s?"smile":l?"frown":"meh"]})),a.a.createElement("div",{className:"timer"},M(h)))}),A=n(63),N=n.n(A),S=n(35),R=n.n(S),B=(n(182),function(){var e=function(e){var t=e.width,n=e.height,a=e.minesCount,r=t*n,c=Object(i.useMemo)((function(){return Array(r).fill(new k)}),[r]),l=Object(i.useMemo)((function(){return new H(t,n)}),[t,n]),s=Object(i.useState)(c),u=Object(d.a)(s,2),o=u[0],f=u[1],m=function(e,t,n){return Object(g.a)(e,(function(e){null===n||void 0===n||n(e),e[t].state=y.Visible;!function t(n){l.canFloodFill(e,n)&&l.getAddresses(n).forEach((function(n){var i=e[n],a=i.isMined,r=i.isHidden,c=i.isFlagged;a||!r||c||(i.state=y.Visible,t(n))}))}(t)}))},v=function(e,t){return Object(g.a)(e,(function(e){t(e),e.forEach((function(t,n){var i=t.isUnrevealedMine,a=t.isMisplacedFlag;i&&(t.state=y.Visible),a&&(e[n]=new k(j,y.Visible))}))}))};return{state:o,clear:function(){f(c)},init:function(e){f((function(t){return m(t,e,(function(t){for(var n=b()(E()(r),[e].concat(Object(h.a)(l.getAddresses(e)))),i=new Set;i.size<a;)i.add(n[Math.random()*n.length|0]);i.forEach((function(e){t[e].value=O})),t.forEach((function(e,n){!e.isMined&&(e.value=l.getMinedCount(t,n))}))}))}))},revealCell:function(e,t){var n=e.isMined;f((function(e){return n?v(e,(function(e){e[t]=new k(M,y.Visible)})):m(e,t)}))},plantFlag:function(e,t){var n=e.isFlagged;f((function(e){return Object(g.a)(e,(function(e){e[t].state=y[n?"Hidden":"Flagged"]}))}))},revealNeighbors:function(e){f((function(t){return l.canFloodFill(t,e)?m(t,e):l.canRevealNeighbors(t,e)?v(t,(function(t){l.getAddresses(e).forEach((function(e){var n=t[e],i=n.isUnrevealedMine,a=n.isMisplacedFlag;i&&(n.value=M),a&&(n.value=j),n.state=y.Visible}))})):t}))},markMines:function(){f((function(e){return Object(g.a)(e,(function(e){e.forEach((function(e){e.isMined&&(e.state=y.Flagged)}))}))}))}}}({minesCount:30,width:16,height:16}),t=e.state,n=e.clear,r=e.init,c=e.revealCell,l=e.plantFlag,u=e.revealNeighbors,o=e.markMines,m=Object(i.useState)(30),v=Object(d.a)(m,2),p=v[0],F=v[1],_=Object(i.useState)(!1),w=Object(d.a)(_,2),A=w[0],S=w[1],B=Object(i.useState)(!1),V=Object(d.a)(B,2),D=V[0],x=V[1],U=Object(i.useState)(!1),W=Object(d.a)(U,2),I=W[0],P=W[1];return f((function(){R()(t,"isBustedMine")?x(!0):R()(N()(t,"isMined"),"isHidden")||(o(),F(0),P(!0))}),t),a.a.createElement("div",{className:"minesweeper"},a.a.createElement(C,{minesCount:p,isBust:D,isVictory:I,shouldStartCountingSeconds:A,smileyFaceClickHandler:function(){n(),F(30),S(!1),x(!1),P(!1)}}),a.a.createElement(s,{width:16,disabled:D||I,state:t,cellRevealHandler:function(e,t){A?c(e,t):(r(t),S(!0))},flagPlantingHandler:function(e,t){l(e,t),F(p+(e.isFlagged?1:-1))},neighborsRevealHandler:u}))}),V=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o,null),a.a.createElement(B,null),a.a.createElement(u,null))},D=n(14),x=n(64),U=n(16),W=n(65);n(183);D.b.add(x.a,W.a,U.a,U.c,U.b,U.d),Object(r.render)(a.a.createElement(i.StrictMode,null,a.a.createElement(V,null)),document.getElementById("root"))},67:function(e,t,n){e.exports=n(184)},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.beaed345.chunk.js.map