function e(e,t,n){const c=t.split(".");let o=e;for(let e of c)if(o=o[e],void 0===o)return n;return o??n}const t=/\{\{(.*?)\}\}/gi,n={id:"id",classes:"class",handleClick:"onсlick",style:"style",placeholder:"placeholder",type:"type",value:"value",path:"href",name:"name",onclick:"onclick",alt:"alt",src:"src"};class c{_template="";constructor(e){this._template=e}_compileTemplate(c){let o=this._template,s=null;for(;s=t.exec(o);)if(s[1]){const t=s[1].trim(),l=e(c,t);if(l){const e=s[0].replace(/[{,}, ]/gi,"");let c="";if("function"==typeof l){window[t]=l,c=n[e]?`${n[e]}='window.${t}()'`:`window.${t}()`,o=o.replace(new RegExp(s[0],"gi"),c);continue}c=n[e]?`${n[e]}='${l}'`:l,o=o.replace(new RegExp(s[0],"gi"),c)}}return o=o.replace(t,""),o}compile(e){return this._compileTemplate(e)}}function o(e){return new c("<{{ tag }} {{ }} {{ src }} {{ style }} {{ classes }} {{ alt }}>{{ textContent }}</{{ tag }}>").compile(e)}const s="<input {{ name }} {{ type }} {{ placeholder }} {{ classes }} {{ style }} {{ value }} {{ onclick }} {{ disabled }}>{{ textContent }}</input>",l=["base-input"],i={tag:"div",classes:"input-container"};function a(e){let t;if(e.classes=(e.classes||"")+" "+l.join(" "),e.type&&"text"!==e.type&&"password"!==e.type?"button"===e.type&&function(e){e.classes+=" base-input-button"}(e):(!function(e){e.classes+=" base-input-text"}(e),t=function(e){const t=new c(s),n=e.containerConfig||i;n.textContent=n.textContent||"",e&&e.labelConfig&&(n.textContent+=(l=e.labelConfig,o(l)));var l;return n.textContent+=t.compile(e),o(n)}(e)),!t){t=new c(s).compile(e)}return t}const r=["base-link"];!function(){const e={tag:"div",classes:"left-container"},t=document.querySelector("body"),n=o(e);t.insertAdjacentHTML("beforeend",n),function(){const e={classes:"left-container__profile-link",textContent:"Профиль ❯",path:"../Profile/Profile.html"},t=document.querySelector(".left-container"),n=((o=e).classes=(o.classes||"")+" "+r.join(" "),new c("<a {{ classes }} {{ style }} {{ path }}>{{textContent}}</a>").compile(o));var o;t.insertAdjacentHTML("beforeend",n)}(),function(){const e="left-container__search",t={classes:`${e} ${e}_empty`,placeholder:"&#128270 Поиск"},n=document.querySelector(".left-container"),c=a(t);n.insertAdjacentHTML("beforeend",c)}(),function(){const e={tag:"div",classes:"chat-list-container",textContent:"Нет чатов"},t=document.querySelector(".left-container"),n=o(e);t.insertAdjacentHTML("beforeend",n)}()}(),function(){const e={tag:"div",classes:"chat-container",textContent:"Выберите чат чтобы отправить сообщение"},t=document.querySelector("body"),n=o(e);t.insertAdjacentHTML("beforeend",n)}();
//# sourceMappingURL=Chats.69b41888.js.map
