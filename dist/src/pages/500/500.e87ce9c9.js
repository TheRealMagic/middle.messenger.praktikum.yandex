function e(e,t,n){const c=t.split(".");let o=e;for(let e of c)if(o=o[e],void 0===o)return n;return o??n}const t=/\{\{(.*?)\}\}/gi,n={id:"id",classes:"class",handleClick:"onсlick",style:"style",placeholder:"placeholder",type:"type",value:"value",path:"href",name:"name",onclick:"onclick",alt:"alt",src:"src"};class c{_template="";constructor(e){this._template=e}_compileTemplate(c){let o=this._template,s=null;for(;s=t.exec(o);)if(s[1]){const t=s[1].trim(),l=e(c,t);if(l){const e=s[0].replace(/[{,}, ]/gi,"");let c="";if("function"==typeof l){window[t]=l,c=n[e]?`${n[e]}='window.${t}()'`:`window.${t}()`,o=o.replace(new RegExp(s[0],"gi"),c);continue}c=n[e]?`${n[e]}='${l}'`:l,o=o.replace(new RegExp(s[0],"gi"),c)}}return o=o.replace(t,""),o}compile(e){return this._compileTemplate(e)}}function o(e){return new c("<{{ tag }} {{ }} {{ src }} {{ style }} {{ classes }} {{ alt }}>{{ textContent }}</{{ tag }}>").compile(e)}const s=["base-link"];!function(){const e={tag:"main",classes:"main-container"},t=document.querySelector("body"),n=o(e);t.insertAdjacentHTML("beforeend",n)}(),function(){const e={tag:"div",classes:"error-number",textContent:"500"},t=document.querySelector(".main-container"),n=o(e);t.insertAdjacentHTML("beforeend",n)}(),function(){const e={tag:"div",classes:"error-text",textContent:"Мы уже фиксим"},t=document.querySelector(".main-container"),n=o(e);t.insertAdjacentHTML("beforeend",n)}(),function(){const e={textContent:"Назад к чатам",classes:"base-link sign-link error-link",path:"../"},t=document.querySelector(".main-container"),n=((o=e).classes=(o.classes||"")+" "+s.join(" "),new c("<a {{ classes }} {{ style }} {{ path }}>{{textContent}}</a>").compile(o));var o;t.insertAdjacentHTML("beforeend",n)}();
//# sourceMappingURL=500.e87ce9c9.js.map
