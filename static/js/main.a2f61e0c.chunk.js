(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{50:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},60:function(e,n,t){},61:function(e,n,t){},62:function(e,n,t){},63:function(e,n,t){},64:function(e,n,t){},65:function(e,n,t){},69:function(e,n,t){"use strict";t.r(n);t(50);var i,c,o,a,u,s=t(5),r=(t(51),t(52),t(8)),l=t(1),d=t(0),b=function(){var e="Footer";return Object(d.jsx)("footer",{className:e,children:Object(d.jsxs)("span",{children:["Powered by",Object(d.jsx)("a",{className:"".concat(e,"Link"),href:"https://github.com/FakeMetalFan",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(r.a,{icon:["fab","github"]})}),"\xa9",Object(d.jsx)("span",{children:(new Date).getFullYear()})]})})},f=Object(l.memo)(b),j=(t(60),function(){var e="Header";return Object(d.jsxs)("header",{className:e,children:[Object(d.jsx)("span",{className:"".concat(e,"Title"),children:"Minesweeper"}),Object(d.jsx)("a",{className:"".concat(e,"Link"),href:"https://github.com/FakeMetalFan/minesweeper",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(r.a,{icon:["fab","github"]})})]})}),O=Object(l.memo)(j),m=Object(l.createContext)({mineField:[],mineFieldParams:{},mineFieldStatus:{},setMineFieldParams:function(){},setupMineField:function(){},revealCell:function(){},toggleFlag:function(){},revealNeighbors:function(){},reset:function(){}}),h=t(47),v=t(26),g=t(48),x=function(e){return Object(s.a)(Object(s.a)({},e),{},{id:Object(g.a)()})};!function(e){e[e.SM=9]="SM",e[e.MD=16]="MD",e[e.BG=30]="BG"}(i||(i={})),function(e){e[e.SM=9]="SM",e[e.MD=16]="MD",e[e.BG=16]="BG"}(c||(c={})),function(e){e[e.SM=10]="SM",e[e.MD=40]="MD",e[e.BG=99]="BG"}(o||(o={})),function(e){e[e.Empty=0]="Empty",e[e.One=1]="One",e[e.Two=2]="Two",e[e.Three=3]="Three",e[e.Four=4]="Four",e[e.Five=5]="Five",e[e.Six=6]="Six",e[e.Seven=7]="Seven",e[e.Eight=8]="Eight",e[e.Mine=9]="Mine",e[e.Incorrect=10]="Incorrect",e[e.Busted=11]="Busted"}(a||(a={})),function(e){e[e.Hidden=0]="Hidden",e[e.Visible=1]="Visible",e[e.Flagged=2]="Flagged"}(u||(u={}));var p=x({name:"Beginner",rowsCount:i.SM,columnsCount:c.SM,minesCount:o.SM}),M=[p,x({name:"Intermediate",rowsCount:i.MD,columnsCount:c.MD,minesCount:o.MD}),x({name:"Expert",rowsCount:i.BG,columnsCount:c.BG,minesCount:o.BG})],C=function(e){for(var n=Object(l.useRef)(!1),t=arguments.length,i=new Array(t>1?t-1:0),c=1;c<t;c++)i[c-1]=arguments[c];Object(l.useEffect)((function(){n.current?e():n.current=!0}),i)},F=t(27),w=t(71),k=t(72),y=t(13),S=t(14),B=function(){function e(n){Object(y.a)(this,e),this.cell=n}return Object(S.a)(e,[{key:"isEqual",value:function(e,n){return this.cell[e]===n}},{key:"isEmpty",get:function(){return this.isEqual("value",a.Empty)}},{key:"isMined",get:function(){return this.isEqual("value",a.Mine)}},{key:"isIncorrect",get:function(){return this.isEqual("value",a.Incorrect)}},{key:"isBusted",get:function(){return this.isEqual("value",a.Busted)}},{key:"isHidden",get:function(){return this.isEqual("appearance",u.Hidden)}},{key:"isFlagged",get:function(){return this.isEqual("appearance",u.Flagged)}},{key:"isUnsolved",get:function(){return this.isMined&&!this.isFlagged}},{key:"isSolvedWrong",get:function(){return!this.isMined&&this.isFlagged}}]),e}(),E=t(70),N=function(){function e(n){Object(y.a)(this,e),this.mineField=n}return Object(S.a)(e,[{key:"isBusted",value:function(){return this.mineField.some((function(e){return new B(e).isBusted}))}},{key:"isSolved",value:function(){return!Object(E.a)(this.mineField,(function(e){return new B(e).isMined})).some((function(e){return new B(e).isHidden}))}}]),e}(),I=function(){function e(n){Object(y.a)(this,e),this.length=n}return Object(S.a)(e,[{key:"to2D",value:function(e){var n=e%this.length;return{rowIndex:n,columnIndex:(e-n)/this.length}}},{key:"to1D",value:function(e,n){return n*this.length+e}}]),e}(),D=function(e,n){return e>-1&&e<n},_=function(){function e(n,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new I(n);Object(y.a)(this,e),this.rowsCount=n,this.columnsCount=t,this.indexUtils=i}return Object(S.a)(e,[{key:"getIndexes",value:function(e){for(var n=e.index,t=this.indexUtils.to2D(n),i=t.rowIndex,c=t.columnIndex,o=[],a=-1;a<2;a+=1)for(var u=-1;u<2;u+=1)if(a||u){var s=i+a,r=c+u;D(s,this.rowsCount)&&D(r,this.columnsCount)&&o.push(this.indexUtils.to1D(s,r))}return o}},{key:"canBeFloodFilled",value:function(e,n){return!this.getIndexes(n).some((function(n){return new B(e[n]).isUnsolved}))}},{key:"canBeRevealed",value:function(e,n){return this.countMined(e,n)===this.countBy(e,n,"isFlagged")}},{key:"countMined",value:function(e,n){return this.countBy(e,n,"isMined")}},{key:"countBy",value:function(e,n,t){return this.getIndexes(n).reduce((function(n,i){return new B(e[i])[t]?n+1:n}),0)}}]),e}(),P=function(){var e=Object(l.useState)(p),n=Object(v.a)(e,2),t=n[0],i=n[1],c=t.rowsCount,o=t.columnsCount,r=t.minesCount,d=c*o,b=Object(l.useMemo)((function(){return Array.from({length:d},(function(e,n){return x({index:n,value:a.Empty,appearance:u.Hidden})}))}),[d]),f=Object(l.useMemo)((function(){return{isSetup:!1,isBusted:!1,isSolved:!1,hiddenMinesCount:r}}),[r]),j=Object(l.useMemo)((function(){return new _(c,o)}),[c,o]),O=Object(l.useState)(b),m=Object(v.a)(O,2),g=m[0],M=m[1],y=Object(l.useState)(f),S=Object(v.a)(y,2),E=S[0],I=S[1],D=Object(l.useCallback)((function(e,n,t){return Object(F.a)(e,(function(e){null===t||void 0===t||t(e),e[n.index].appearance=u.Visible,function n(t){j.canBeFloodFilled(e,t)&&j.getIndexes(t).forEach((function(t){var i=e[t],c=new B(i),o=c.isMined,a=c.isHidden,s=c.isFlagged;o||!a||s||(i.appearance=u.Visible,n(i))}))}(n)}))}),[j]),P=Object(l.useCallback)((function(e,n){return Object(F.a)(e,(function(e){n(e),e.forEach((function(n,t){var i=new B(n),c=i.isUnsolved,o=i.isSolvedWrong;c?n.appearance=u.Visible:o&&(e[t]=Object(s.a)(Object(s.a)({},n),{},{value:a.Incorrect,appearance:u.Visible}))}))}))}),[]),H=Object(l.useCallback)((function(e){M((function(n){return D(n,e,(function(n){for(var t=Object(w.a)(Object(k.a)(d),[e.index].concat(Object(h.a)(j.getIndexes(e)))),i=new Set;i.size<r;)i.add(t[Math.floor(Math.random()*t.length)]);i.forEach((function(e){n[e].value=a.Mine})),n.forEach((function(e){new B(e).isMined||(e.value=j.countMined(n,e))}))}))})),I((function(e){return Object(s.a)(Object(s.a)({},e),{},{isSetup:!0})}))}),[D,d,r,j]),G=Object(l.useCallback)((function(e){M((function(n){return new B(e).isMined?P(n,(function(n){n[e.index]=Object(s.a)(Object(s.a)({},e),{},{value:a.Busted,appearance:u.Visible})})):D(n,e)}))}),[P,D]),V=Object(l.useCallback)((function(e){var n=new B(e).isFlagged;M((function(t){return Object(F.a)(t,(function(t){t[e.index].appearance=n?u.Hidden:u.Flagged}))})),I((function(e){return Object(F.a)(e,(function(e){e.hiddenMinesCount+=n?1:-1}))}))}),[]),q=Object(l.useCallback)((function(e){M((function(n){return j.canBeFloodFilled(n,e)?D(n,e):j.canBeRevealed(n,e)?P(n,(function(n){j.getIndexes(e).forEach((function(e){var t=n[e],i=new B(t),c=i.isUnsolved,o=i.isSolvedWrong;c?t.value=a.Busted:o&&(t.value=a.Incorrect),t.appearance=u.Visible}))})):n}))}),[P,D,j]),U=Object(l.useCallback)((function(){M(b),I(f)}),[b,f]);return C((function(){U()}),b),C((function(){var e=new N(g);e.isBusted()?I((function(e){return Object(s.a)(Object(s.a)({},e),{},{isBusted:!0})})):e.isSolved()&&(M((function(e){return Object(F.a)(e,(function(e){e.forEach((function(e){new B(e).isMined&&(e.appearance=u.Flagged)}))}))})),I((function(e){return Object(s.a)(Object(s.a)({},e),{},{isSolved:!0,hiddenMinesCount:0})})))}),g),{mineField:g,mineFieldParams:t,mineFieldStatus:E,setMineFieldParams:i,setupMineField:H,revealCell:G,toggleFlag:V,revealNeighbors:q,reset:U}},H=(t(61),function(e){return e<1?"000":e<10?"00".concat(e):e<100?"0".concat(e):e.toString()}),G=function(e){var n=e.count;return Object(d.jsx)("div",{className:"Counter",children:H(n)})},V=Object(l.memo)(G),q=(t(62),function(e){var n=e.icon,t=void 0===n?Object(d.jsx)(r.a,{icon:["far","meh"]}):n,i=e.onClick;return Object(d.jsx)("button",{type:"button",className:"Face",onClick:i,children:t})}),U=Object(l.memo)(q),R=function(e){var n=e.isSolved,t=e.isBusted;return n?Object(d.jsx)(r.a,{icon:["far","smile"]}):t?Object(d.jsx)(r.a,{icon:["far","frown"]}):void 0},T=function(){var e=Object(l.useContext)(m),n=e.mineFieldStatus,t=e.mineFieldParams,i=e.reset,c=n.isSetup,o=n.isSolved,a=n.isBusted,u=n.hiddenMinesCount,s=Object(l.useState)(0),r=Object(v.a)(s,2),b=r[0],f=r[1],j=Object(l.useCallback)((function(){f(0),i()}),[i]);return function(e,n){var t=Object(l.useRef)();Object(l.useEffect)((function(){t.current=e})),Object(l.useEffect)((function(){if(n){var e=setInterval((function(){var e;null===(e=t.current)||void 0===e||e.call(t)}),n);return function(){clearInterval(e)}}}),[n])}((function(){f(b+1)}),!c||o||a?void 0:1e3),C((function(){f(0)}),t),Object(d.jsxs)("div",{className:"Indicators",children:[Object(d.jsx)(V,{count:u}),Object(d.jsx)(U,{icon:R(n),onClick:j}),Object(d.jsx)(V,{count:b})]})},L=(t(63),t(64),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}),A=function(e){var n=e.className;return Object(d.jsx)("button",{type:"button",className:n,children:Object(d.jsx)(r.a,{icon:["fas","bomb"]})})},W=function(e){var n=e.cell,t=e.onClick,i=e.onMouseDown,c=e.onContextMenu,o=new B(n),a=o.isHidden,u=o.isEmpty,s=o.isFlagged,l=o.isMined,b=o.isIncorrect,f=o.isBusted,j=n.value,O="Cell",m="".concat(O,"__visible"),h=function(){null===c||void 0===c||c(n)};return a?Object(d.jsx)("button",{type:"button","aria-label":"Cell",className:O,onClick:function(){null===t||void 0===t||t(n)},onContextMenu:h}):s?Object(d.jsx)("button",{type:"button",className:O,onContextMenu:h,children:Object(d.jsx)(r.a,{icon:["far","flag"]})}):u?Object(d.jsx)("button",{type:"button","aria-label":"Cell",className:L(O,m)}):l?Object(d.jsx)(A,{className:O}):b?Object(d.jsx)(A,{className:L(O,"".concat(O,"__wrong"))}):f?Object(d.jsx)(A,{className:L(O,"".concat(O,"__busted"))}):Object(d.jsx)("button",{type:"button",className:L(O,"".concat(O,"__").concat(j),m),onMouseDown:function(e){null===i||void 0===i||i(e,n)},children:j})},J=Object(l.memo)(W),z=function(){var e=Object(l.useContext)(m),n=e.mineFieldParams.rowsCount,t=e.mineField,i=e.mineFieldStatus,c=i.isSetup,o=i.isBusted,a=i.isSolved,u=e.setupMineField,s=e.revealCell,r=e.toggleFlag,b=e.revealNeighbors,f="MineField",j="".concat(f,"Row"),O=Object(l.useCallback)((function(e){(c?s:u)(e)}),[c,s,u]),h=Object(l.useCallback)((function(e,n){var t=e.target,i=e.nativeEvent;t.addEventListener("mouseup",(function e(c){i.which!==c.which&&b(n),t.removeEventListener("mouseup",e)}))}),[b]),v=Object(l.useCallback)((function(e){r(e)}),[r]);return Object(d.jsx)("div",{className:f,style:{width:32*n},onContextMenu:function(e){e.preventDefault()},children:Object(d.jsx)("div",{className:L(j,"".concat(j,"__count-").concat(n),"".concat(o||a?"".concat(j,"__disabled"):"")),children:t.map((function(e){return Object(d.jsx)(J,{cell:e,onClick:O,onMouseDown:h,onContextMenu:v},e.id)}))})})},Y=(t(65),function(e){var n=e.item,t=e.name,i=e.checked,c=e.className,o=e.onChange;return Object(d.jsxs)("div",{className:c,children:[Object(d.jsx)("input",{type:"radio",name:t,className:"".concat(c,"Radio"),defaultChecked:i,onChange:function(){null===o||void 0===o||o(n)}}),n.name]})}),K=Object(l.memo)(Y),Q=function(){var e=Object(l.useContext)(m),n=e.mineFieldParams,t=e.setMineFieldParams,i="MineFieldProps",c="".concat(i,"Item"),o=Object(l.useCallback)((function(e){t(e)}),[t]);return Object(d.jsx)("form",{className:i,children:M.map((function(e){var t=e.name,i=e.id;return Object(d.jsx)(K,{item:e,name:"MineFieldProps",className:c,checked:t===n.name,onChange:o},i)}))})},X=function(){return Object(d.jsxs)(m.Provider,{value:Object(s.a)({},P()),children:[Object(d.jsx)(O,{}),Object(d.jsxs)("main",{className:"Minesweeper",children:[Object(d.jsx)(T,{}),Object(d.jsx)(z,{}),Object(d.jsx)(Q,{})]}),Object(d.jsx)(f,{})]})},Z=function(){return Object(d.jsx)(X,{})},$=t(44),ee=t(20),ne=t(45),te=t(30),ie=t(46);ee.b.add(ne.a,ie.a,te.a,te.c,te.b,te.d),Object($.render)(Object(d.jsx)(l.StrictMode,{children:Object(d.jsx)(Z,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a2f61e0c.chunk.js.map