(()=>{"use strict";function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("home"),e.appendChild(t("Established since 2003")),e.appendChild(t("Fast Food chain restaurant")),e.appendChild(t("Order online or visit address to enjoy")),e}())};function n(t,e){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=t;const c=document.createElement("p");c.textContent=e;const d=document.createElement("img");return d.src=`images/${t.toLowerCase()}.jpg`,d.id="lun",d.alt=`${t}`,n.appendChild(d),n.appendChild(a),n.appendChild(c),n}function a(){const t=document.createElement("header");t.classList.add("header");const a=document.createElement("h1");return a.classList.add("restaurant-name"),a.textContent="Rizwan Burger",t.appendChild(a),t.appendChild(function(){const t=document.createElement("nav"),a=document.createElement("button");a.classList.add("button-nav"),a.textContent="Home",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(c(a),e())}));const d=document.createElement("button");d.classList.add("button-nav"),d.textContent="Menu",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(c(d),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(n("Burger","Fresh Buns, Patties, Cheese , Lettuce AND MORE CHEESE")),t.appendChild(n("Pasta","Tomato sauce, Mozarella, Homemade sausage, Mushrooms")),t}())}())}));const o=document.createElement("button");return o.classList.add("button-nav"),o.textContent="Contact",o.addEventListener("click",(t=>{t.target.classList.contains("active")||(c(o),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("p");e.textContent="📞 420 69 69 69";const n=document.createElement("p");n.textContent="🏠 4778 Heavner Avenue, Georgia, USA";const a=document.createElement("img");return a.src="images/address.png",t.appendChild(e),t.appendChild(n),t.appendChild(a),t}())}())})),t.appendChild(a),t.appendChild(d),t.appendChild(o),t}()),t}function c(t){document.querySelectorAll(".button-nav").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(a()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),c(document.querySelector(".button-nav")),e()}()})();