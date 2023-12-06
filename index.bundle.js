(()=>{var e={810:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(537),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"#aboutContent {\n    display: grid;\n    width: 70%;\n    margin: auto;\n    grid-template-columns: repeat(3, 1fr);\n    grid-row: 1fr 5fr;\n    gap: 2rem;\n\n    .heading {\n        grid-row: 1 / 2;\n        grid-column: 1 / -1;\n        font-size: 3rem;\n        align-self: first baseline;\n\n    }\n    .review {\n        grid-row: 2 / 3;\n        grid-column: span 1;\n        width: 30ch;\n\n    }\n\n}\n\nimg {\n    height: auto;\n    width: 100%;\n    margin-bottom: 2rem;\n}","",{version:3,sources:["webpack://./src/styles/about.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,UAAU;IACV,YAAY;IACZ,qCAAqC;IACrC,iBAAiB;IACjB,SAAS;;IAET;QACI,eAAe;QACf,mBAAmB;QACnB,eAAe;QACf,0BAA0B;;IAE9B;IACA;QACI,eAAe;QACf,mBAAmB;QACnB,WAAW;;IAEf;;AAEJ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;AACvB",sourcesContent:["#aboutContent {\n    display: grid;\n    width: 70%;\n    margin: auto;\n    grid-template-columns: repeat(3, 1fr);\n    grid-row: 1fr 5fr;\n    gap: 2rem;\n\n    .heading {\n        grid-row: 1 / 2;\n        grid-column: 1 / -1;\n        font-size: 3rem;\n        align-self: first baseline;\n\n    }\n    .review {\n        grid-row: 2 / 3;\n        grid-column: span 1;\n        width: 30ch;\n\n    }\n\n}\n\nimg {\n    height: auto;\n    width: 100%;\n    margin-bottom: 2rem;\n}"],sourceRoot:""}]);const s=o},996:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(537),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"#contactContent {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n    width: 60%;\n    margin: auto;\n\n    #left {\n        grid-column: 1 / 2;\n\n        #contactImage {\n            height: 80vh;\n            border-radius: 10px;\n        }\n    }\n\n    #right {\n        grid-column: 2 / 3;\n        display: grid;\n        grid-template-rows: repeat(4, 1fr);\n\n        .contactItem {\n            grid-row: span 1;\n            display: grid;\n            grid-template-columns: 1fr 3fr;\n            gap: 2rem\n        }\n\n        .iconDiv {\n            grid-column: 1 / 2;\n            align-self: center;\n            \n            \n        }\n        .iconText {\n            grid-column: 2 / 3;\n            align-self: center;\n        }\n    }\n}","",{version:3,sources:["webpack://./src/styles/contact.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,UAAU;IACV,YAAY;;IAEZ;QACI,kBAAkB;;QAElB;YACI,YAAY;YACZ,mBAAmB;QACvB;IACJ;;IAEA;QACI,kBAAkB;QAClB,aAAa;QACb,kCAAkC;;QAElC;YACI,gBAAgB;YAChB,aAAa;YACb,8BAA8B;YAC9B;QACJ;;QAEA;YACI,kBAAkB;YAClB,kBAAkB;;;QAGtB;QACA;YACI,kBAAkB;YAClB,kBAAkB;QACtB;IACJ;AACJ",sourcesContent:["#contactContent {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n    width: 60%;\n    margin: auto;\n\n    #left {\n        grid-column: 1 / 2;\n\n        #contactImage {\n            height: 80vh;\n            border-radius: 10px;\n        }\n    }\n\n    #right {\n        grid-column: 2 / 3;\n        display: grid;\n        grid-template-rows: repeat(4, 1fr);\n\n        .contactItem {\n            grid-row: span 1;\n            display: grid;\n            grid-template-columns: 1fr 3fr;\n            gap: 2rem\n        }\n\n        .iconDiv {\n            grid-column: 1 / 2;\n            align-self: center;\n            \n            \n        }\n        .iconText {\n            grid-column: 2 / 3;\n            align-self: center;\n        }\n    }\n}"],sourceRoot:""}]);const s=o},497:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(537),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"#tabs {\n    grid-row: 1 / 2;\n    border-radius: var(--b-r);\n    padding: 2rem;\n\n}\n#tabContent {\n    grid-row: 2 / 3;\n    height: 82vh;\n    border-radius: var(--b-r);\n}\n\n#tabBtns {\n    width: 40%;\n    height: 80%;\n    margin: auto;\n    /* border: 2px solid white; */\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: var(--b-r);\n    border-bottom: 4px solid white;\n    padding-bottom: 2rem;\n\n}\n#tabBtns > button {\n    height: 4rem;\n    width: 10rem;\n    font-size: 1.125rem;\n    border-radius: var(--b-r);\n    transition: transform 0.3s ease;\n}\n\nbutton:hover {\n    transform: scale(1.125);\n}\n","",{version:3,sources:["webpack://./src/styles/header.css"],names:[],mappings:"AAAA;IACI,eAAe;IACf,yBAAyB;IACzB,aAAa;;AAEjB;AACA;IACI,eAAe;IACf,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,yBAAyB;IACzB,8BAA8B;IAC9B,oBAAoB;;AAExB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,+BAA+B;AACnC;;AAEA;IACI,uBAAuB;AAC3B",sourcesContent:["#tabs {\n    grid-row: 1 / 2;\n    border-radius: var(--b-r);\n    padding: 2rem;\n\n}\n#tabContent {\n    grid-row: 2 / 3;\n    height: 82vh;\n    border-radius: var(--b-r);\n}\n\n#tabBtns {\n    width: 40%;\n    height: 80%;\n    margin: auto;\n    /* border: 2px solid white; */\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: var(--b-r);\n    border-bottom: 4px solid white;\n    padding-bottom: 2rem;\n\n}\n#tabBtns > button {\n    height: 4rem;\n    width: 10rem;\n    font-size: 1.125rem;\n    border-radius: var(--b-r);\n    transition: transform 0.3s ease;\n}\n\nbutton:hover {\n    transform: scale(1.125);\n}\n"],sourceRoot:""}]);const s=o},309:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(537),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"#homeContent {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 1fr 2fr;\n    padding-left: 8rem;\n\n    #heroTitle {\n        font-size: 4rem;\n        font-weight: bold;\n        grid-row: 1 / 2;\n        grid-column: 1 / 2;\n        align-self: center;\n    }\n    \n    #heroDescription {\n        grid-row: 2 / 3;\n        grid-column: 1 / 2;\n        width: 75ch;\n        line-height: 2rem;\n    \n    }\n    \n    #heroImage {\n        grid-row: 1 / 3;\n        grid-column: 2 / 3;\n    }\n    #heroImage img {\n        height: 80vh;\n        width: 45vw;\n        border-radius: var(--b-r);\n    }\n}\n\n\n","",{version:3,sources:["webpack://./src/styles/home.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,qCAAqC;IACrC,2BAA2B;IAC3B,kBAAkB;;IAElB;QACI,eAAe;QACf,iBAAiB;QACjB,eAAe;QACf,kBAAkB;QAClB,kBAAkB;IACtB;;IAEA;QACI,eAAe;QACf,kBAAkB;QAClB,WAAW;QACX,iBAAiB;;IAErB;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;IACA;QACI,YAAY;QACZ,WAAW;QACX,yBAAyB;IAC7B;AACJ",sourcesContent:["#homeContent {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 1fr 2fr;\n    padding-left: 8rem;\n\n    #heroTitle {\n        font-size: 4rem;\n        font-weight: bold;\n        grid-row: 1 / 2;\n        grid-column: 1 / 2;\n        align-self: center;\n    }\n    \n    #heroDescription {\n        grid-row: 2 / 3;\n        grid-column: 1 / 2;\n        width: 75ch;\n        line-height: 2rem;\n    \n    }\n    \n    #heroImage {\n        grid-row: 1 / 3;\n        grid-column: 2 / 3;\n    }\n    #heroImage img {\n        height: 80vh;\n        width: 45vw;\n        border-radius: var(--b-r);\n    }\n}\n\n\n"],sourceRoot:""}]);const s=o},771:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(537),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    --b-r: 10px;\n    color: white;\n    --primary: #1F85DE;\n    background-color: black;\n}\n.active {\n    border: 8px solid var(--primary);\n}\n\n.contentDiv {\n    background-color: black;\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n    border-collapse: collapse;\n    padding: var(--p-1rem);\n    min-height: 100vh;\n\n}","",{version:3,sources:["webpack://./src/styles/index.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,gCAAgC;AACpC;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,iBAAiB;;AAErB",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    --b-r: 10px;\n    color: white;\n    --primary: #1F85DE;\n    background-color: black;\n}\n.active {\n    border: 8px solid var(--primary);\n}\n\n.contentDiv {\n    background-color: black;\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n    border-collapse: collapse;\n    padding: var(--p-1rem);\n    min-height: 100vh;\n\n}"],sourceRoot:""}]);const s=o},195:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(537),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"#menuContent {\n    display: grid;\n    grid-template-rows: repeat(4, 1fr);\n    grid-auto-rows: 1fr;\n    gap: 1rem;\n    width: 60%;\n    margin: auto;\n\n    .item {\n        height: 10rem;\n        grid-row: span 1;\n        display: grid;\n        grid-template-columns: 4fr 1.5fr;\n        grid-template-rows: 2fr 2fr 1fr;\n        border-radius: var(--b-r);\n        border-bottom: 4px solid white;\n        margin-top: 2rem;\n        padding-bottom: 2rem;\n        background-color: black;\n\n\n\n    .itemTitle {\n        font-size: 3rem;\n        grid-column: 1 / 2;\n        grid-row: 1  / 2;\n    }\n    .itemDescription {\n        grid-row: 2 / 3;\n        grid-column: 1 / 2;\n    }\n    .itemPrice {\n        grid-row: 3 / 4;\n        font-size: 2rem;\n        margin-left: 2rem;\n        font-weight: bold;\n    }\n    .itemImg {\n        grid-column: 2 / 3;\n        grid-row: 1 / -1;\n        height: 10rem;\n        width: auto;\n        justify-self: center;\n    }\n}\n\n}","",{version:3,sources:["webpack://./src/styles/menu.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,YAAY;;IAEZ;QACI,aAAa;QACb,gBAAgB;QAChB,aAAa;QACb,gCAAgC;QAChC,+BAA+B;QAC/B,yBAAyB;QACzB,8BAA8B;QAC9B,gBAAgB;QAChB,oBAAoB;QACpB,uBAAuB;;;;IAI3B;QACI,eAAe;QACf,kBAAkB;QAClB,gBAAgB;IACpB;IACA;QACI,eAAe;QACf,kBAAkB;IACtB;IACA;QACI,eAAe;QACf,eAAe;QACf,iBAAiB;QACjB,iBAAiB;IACrB;IACA;QACI,kBAAkB;QAClB,gBAAgB;QAChB,aAAa;QACb,WAAW;QACX,oBAAoB;IACxB;AACJ;;AAEA",sourcesContent:["#menuContent {\n    display: grid;\n    grid-template-rows: repeat(4, 1fr);\n    grid-auto-rows: 1fr;\n    gap: 1rem;\n    width: 60%;\n    margin: auto;\n\n    .item {\n        height: 10rem;\n        grid-row: span 1;\n        display: grid;\n        grid-template-columns: 4fr 1.5fr;\n        grid-template-rows: 2fr 2fr 1fr;\n        border-radius: var(--b-r);\n        border-bottom: 4px solid white;\n        margin-top: 2rem;\n        padding-bottom: 2rem;\n        background-color: black;\n\n\n\n    .itemTitle {\n        font-size: 3rem;\n        grid-column: 1 / 2;\n        grid-row: 1  / 2;\n    }\n    .itemDescription {\n        grid-row: 2 / 3;\n        grid-column: 1 / 2;\n    }\n    .itemPrice {\n        grid-row: 3 / 4;\n        font-size: 2rem;\n        margin-left: 2rem;\n        font-weight: bold;\n    }\n    .itemImg {\n        grid-column: 2 / 3;\n        grid-row: 1 / -1;\n        height: 10rem;\n        width: auto;\n        justify-self: center;\n    }\n}\n\n}"],sourceRoot:""}]);const s=o},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var A=[].concat(e[d]);r&&o[A[0]]||(void 0!==i&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=i),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),a&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=a):A[4]="".concat(a)),n.push(A))}},n}},537:e=>{"use strict";e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(a," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},957:e=>{e.exports=[["title"," description"," price"],["customers1"," lasdfasfsdfsffafa"," 2500"],["customers1"," afdasfdsafsffadssa"," 55500"],[""]]},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],A=i[d]||0,l="".concat(d," ").concat(A);i[d]=A+1;var m=t(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var p=a(u,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:p,references:1})}o.push(l)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=t(i[o]);n[s].references--}for(var c=r(e,a),d=0;d<i.length;d++){var A=t(i[d]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}i=c}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{"use strict";var e=t(379),n=t.n(e),r=t(795),a=t.n(r),i=t(569),o=t.n(i),s=t(565),c=t.n(s),d=t(216),A=t.n(d),l=t(589),m=t.n(l),u=t(497),p={};p.styleTagTransform=m(),p.setAttributes=c(),p.insert=o().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=A(),n()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals;var g=t(309),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=A(),n()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const C=t.p+"13ef5ce0ecb7874603d4.png";function f(){const e=document.createElement("div");e.classList.add("contentDiv"),e.setAttribute("id","homeContent");const n=document.createElement("div");n.setAttribute("id","heroTitle"),n.textContent="Welcome to Galactic Gastronomy";const t=document.createElement("div");t.setAttribute("id","heroDescription"),t.textContent='Welcome to "Galactic Gastronomy," the extraordinary restaurant nestled in the vast expanse between Earth and Mars, where culinary delights meet the cosmos! Embark on a gastronomic journey like no other, designed exclusively for space travelers exploring the universe. Our cutting-edge eatery offers a stellar fusion of earthly flavors and intergalactic cuisine, ensuring a taste experience that\'s truly out of this world. At Galactic Gastronomy, we not only serve exquisite dishes but also cater to the diverse palates of spacefarers, crafting meals that fuel both body and spirit as you venture through the cosmic unknown. Join us for a dining adventure that transcends boundaries, where the stars align to create an unparalleled dining experience in the depths of space.';const r=document.createElement("div"),a=document.createElement("img");return a.src=C,r.appendChild(a),r.setAttribute("id","heroImage"),e.appendChild(n),e.appendChild(t),e.appendChild(r),e}var B=t(957),b=t.n(B),v=t(195),I={};I.styleTagTransform=m(),I.setAttributes=c(),I.insert=o().bind(null,"head"),I.domAPI=a(),I.insertStyleElement=A(),n()(v.Z,I),v.Z&&v.Z.locals&&v.Z.locals;const y=t.p+"497e43923c37fb3efd52.png";function w(e,n,t){const r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),s=document.createElement("img");return a.classList.add("itemTitle"),i.classList.add("itemDescription"),o.classList.add("itemPrice"),s.classList.add("itemImg"),r.classList.add("item"),a.textContent=e,i.textContent=n,o.textContent=`$@^  ${t}`,s.src=y,r.appendChild(a),r.appendChild(i),r.appendChild(o),r.appendChild(s),r}var E=t(810),x={};x.styleTagTransform=m(),x.setAttributes=c(),x.insert=o().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=A(),n()(E.Z,x),E.Z&&E.Z.locals&&E.Z.locals;var k=t(996),Q={};Q.styleTagTransform=m(),Q.setAttributes=c(),Q.insert=o().bind(null,"head"),Q.domAPI=a(),Q.insertStyleElement=A(),n()(k.Z,Q),k.Z&&k.Z.locals&&k.Z.locals;const T=t.p+"575906c5116c5ee7c80b.png",Z=t.p+"d22ec6aa5672c47b14f3.png",L=t.p+"95b6292c7a0e0c6737c7.png",Y=t.p+"de648ccdbd2e455e6249.png",S=t.p+"13b798d6ec4d62e3e4d2.jpg";var j=t(771),D={};function W(){const e=document.querySelectorAll(".contentDiv"),n=document.querySelectorAll("#tabBtns button");e.forEach((e=>{e.style.display="none"})),n.forEach((e=>{e.classList.remove("active")}))}D.styleTagTransform=m(),D.setAttributes=c(),D.insert=o().bind(null,"head"),D.domAPI=a(),D.insertStyleElement=A(),n()(j.Z,D),j.Z&&j.Z.locals&&j.Z.locals,(()=>{const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","tabs");const n=document.createElement("div");n.setAttribute("id","tabBtns");const t=document.createElement("button");t.textContent="Home",t.classList.add("active");const r=document.createElement("button");r.textContent="Menu";const a=document.createElement("button");a.textContent="Contact";const i=document.createElement("button");return i.textContent="About",n.appendChild(t),n.appendChild(r),n.appendChild(a),n.appendChild(i),e.appendChild(n),e}()),e.appendChild(f())})();const R=document.querySelectorAll("#tabBtns button"),z=document.getElementById("content");R.forEach((e=>{e.addEventListener("click",(()=>{const n=e.textContent.toLocaleLowerCase();"home"==n?(W(),e.classList.add("active"),z.appendChild(f())):"menu"==n?(W(),e.classList.add("active"),z.appendChild(function(){const e=document.createElement("div");e.classList.add("contentDiv"),e.setAttribute("id","menuContent");for(let n=1;n<b().length-1;n++){const t=w(b()[n][0],b()[n][1],b()[n][2]);e.appendChild(t)}return console.log(b()),e}())):"contact"==n?(W(),e.classList.add("active"),z.appendChild(function(){const e=document.createElement("div");e.classList.add("contentDiv"),e.setAttribute("id","contactContent");const n=document.createElement("div");n.setAttribute("id","left");const t=document.createElement("img");t.src=S,t.setAttribute("id","contactImage"),n.appendChild(t);const r=document.createElement("div");r.setAttribute("id","right");const a=document.createElement("div");a.classList.add("contactItem");const i=document.createElement("img");i.classList.add("iconDiv"),i.src=T;const o=document.createElement("p");o.textContent="+91 12345 67890",o.classList.add("iconText"),a.appendChild(i),a.appendChild(o),r.appendChild(a);const s=document.createElement("div");s.classList.add("contactItem");const c=document.createElement("img");c.classList.add("iconDiv"),c.src=Z;const d=document.createElement("p");d.textContent="example@facebook.com",d.classList.add("iconText"),s.appendChild(c),s.appendChild(d),r.appendChild(s);const A=document.createElement("div");A.classList.add("contactItem");const l=document.createElement("img");l.classList.add("iconDiv"),l.src=L;const m=document.createElement("p");m.textContent="example@twitter.com",m.classList.add("iconText"),A.appendChild(l),A.appendChild(m),r.appendChild(A);const u=document.createElement("div");u.classList.add("contactItem");const p=document.createElement("img");p.classList.add("iconDiv"),p.src=Y;const g=document.createElement("p");return g.textContent="example@instagram.com",g.classList.add("iconText"),u.appendChild(p),u.appendChild(g),r.appendChild(u),e.appendChild(n),e.appendChild(r),e}())):"about"==n&&(W(),e.classList.add("active"),z.appendChild(function(){const e=document.createElement("div");e.classList.add("contentDiv"),e.setAttribute("id","aboutContent");const n=document.createElement("p");n.textContent="Our Happy Customers!",n.classList.add("heading"),e.appendChild(n);const t=document.createElement("div");t.classList.add("review");const r=document.createElement("img");r.src=y;const a=document.createElement("p");a.textContent="Absolutely thrilled with my experience at [Restaurant Name]! The ambiance was welcoming, staff attentive, and the culinary journey unmatched. Every dish was a burst of flavor, a testament to the chef's expertise. The presentation, impeccable. Whether it's a special occasion or a casual night out, [Restaurant Name] delivers an unforgettable dining experience. Kudos to the entire team! ⭐⭐⭐⭐⭐",t.appendChild(r),t.appendChild(a);const i=document.createElement("div");i.classList.add("review");const o=document.createElement("img");o.src=y;const s=document.createElement("p");s.textContent="Absolutely thrilled with my experience at [Restaurant Name]! The ambiance was welcoming, staff attentive, and the culinary journey unmatched. Every dish was a burst of flavor, a testament to the chef's expertise. The presentation, impeccable. Whether it's a special occasion or a casual night out, [Restaurant Name] delivers an unforgettable dining experience. Kudos to the entire team! ⭐⭐⭐⭐⭐",i.appendChild(o),i.appendChild(s);const c=document.createElement("div");c.classList.add("review");const d=document.createElement("img");d.src=y;const A=document.createElement("p");return A.textContent="Absolutely thrilled with my experience at [Restaurant Name]! The ambiance was welcoming, staff attentive, and the culinary journey unmatched. Every dish was a burst of flavor, a testament to the chef's expertise. The presentation, impeccable. Whether it's a special occasion or a casual night out, [Restaurant Name] delivers an unforgettable dining experience. Kudos to the entire team! ⭐⭐⭐⭐⭐",c.appendChild(d),c.appendChild(A),e.appendChild(t),e.appendChild(i),e.appendChild(c),e}()))}))}))})()})();
//# sourceMappingURL=index.bundle.js.map