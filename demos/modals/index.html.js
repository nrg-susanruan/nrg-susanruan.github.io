(()=>{const t=document.getElementById("modal-containers");function e(e,n){const o=document.getElementById(e);t.style.display=n,o.style.display=n}function n(t){e(t,"block")}function o(t){e(t,"none")}function a(t){document.querySelectorAll("[data-modal]").forEach((e=>{e.addEventListener("click",(function(){const e=this.getAttribute("data-modal");t(e)}))}))}function d(t,e,n){t.forEach((t=>{const o=document.querySelector(`[${n}="${t}"]`);o&&o.addEventListener("click",(()=>e(t)))}))}function c(t,e){l(t);const n=document.createElement("div");n.className="validation-message",n.textContent=e,t.parentNode.insertBefore(n,t.nextSibling)}function l(t){const e=t.nextSibling;e&&"validation-message"===e.className&&t.parentNode.removeChild(e)}a(n),a(o),document.addEventListener("click",(function(t){const n=Array.from(document.querySelectorAll("[data-modal]")),o=n.map((t=>t.id));n.forEach((n=>{const a=n.getAttribute("data-modal"),d=document.getElementById(a);d.contains(t.target)||o.includes(t.target.id)||"none"===d.style.display||e(a,"none")}))})),d(["basic-modal","confirm-modal","form-modal","location-modal","no-service-modal","autopay-modal"],n,"data-modal"),d(["basic-modal","location-modal","autopay-modal"],o,"data-modal-close"),document.getElementById("formValidationButton").addEventListener("click",(function(){const t=document.getElementById("myForm").getElementsByTagName("input");let e=!0;for(let n=0;n<t.length;n++){const o=t[n];o.hasAttribute("required")&&""===o.value?(e=!1,c(o,"Field required")):o.hasAttribute("pattern")&&!o.checkValidity()?(e=!1,c(o,"Invalid input")):l(o)}return e}))})();
//# sourceMappingURL=index.html.js.map