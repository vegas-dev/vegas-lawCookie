// @vegas-VGLawCookie v1.0.8
class t{constructor(t){this.container=document.getElementById("vg-lawCookie"),this.settings=Object.assign({content:{text:{default:"Используя данный сайт, вы даете согласие на использование файлов cookie.",btn1:"Хорошо",btn2:"Подробнее"},btn:{classes:["btn","btn-primary"]}},privacyLink:""},t),this.init()}privacyLink(){return this.settings.privacyLink?`<a href="${this.settings.privacyLink}" data-lc-more>${this.settings.content.text.btn2}</a>`:""}init(){let t=this,n=localStorage.getItem("lawCookie");if(!t.container){if(t.container=document.createElement("div"),t.container.setAttribute("id","vg-lawCookie"),t.container.classList.add("vg-lawCookie"),t.container.insertAdjacentHTML("beforeend",`\n\t\t\t\t<div class="vg-lawCookie--content">\n\t\t\t\t\t<p class="text-content">\n\t\t\t\t\t\t${t.settings.content.text.default}\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class="btn-area">\n\t\t\t\t\t\t<a href="#" data-lc-confirm>${t.settings.content.text.btn1}</a>\n\t\t\t\t\t\t${t.privacyLink()}\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t`),t.settings.content.btn.classes.length){let n=t.container.querySelector("[data-lc-confirm]");for(let e of t.settings.content.btn.classes)n.classList.add(e)}document.body.appendChild(t.container)}if(!n){setTimeout((()=>{t.container.classList.add("show")}),500),t.container.querySelector("[data-lc-confirm]").onclick=function(){return t.container.classList.remove("show"),localStorage.setItem("lawCookie","yes"),!1}}}}export{t as VGLawCookie};
