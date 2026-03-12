import{a as u,S as d,i as f}from"./assets/vendor-Brtjr80A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="54981355-018af070e068b3cf75c2fd7df",m=s=>u.get("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}),n=document.querySelector("div.modal"),y=document.querySelector("ul.gallery");let h=new d(".gallery a",{captionsData:"alt"});function g(){n.classList.add("active")}function L(){n.classList.remove("active")}const b=s=>{g();let t=s.map(o=>`<li class="gallery-item">
                                        <a class="gallery-link" href="${o.largeImageURL}">
                                            <img
                                                class="gallery-image"
                                                src="${o.webformatURL}"
                                                alt="${o.tags}"
                                            />
                                            <ul class="info-container">
                                                <li>
                                                    <p class="info-header">Likes</p>
                                                    <p class="info">${o.likes}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Views</p>
                                                    <p class="info">${o.views}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Comments</p>
                                                    <p class="info">${o.comments}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Downloads</p>
                                                    <p class="info">${o.downloads}</p>
                                                </li>
                                            </ul> 
                                        </a>
                                    </li>`).join("");y.innerHTML=t,h.refresh(),L()},v=document.querySelector(".form"),c=document.querySelector(".form input"),i=document.querySelector('button[type="submit"]');i.disabled=!0;c.addEventListener("input",s=>{s.currentTarget.value.trim()!==""?i.disabled=!1:i.disabled=!0});v.addEventListener("submit",s=>{s.preventDefault(),m(c.value).then(t=>{console.log(t.data.hits),t.data.hits.length===0?f.error({message:"Sorry, there are no images matching your search query. Please try again!"}):b(t.data.hits)}).catch(t=>console.error(t))});
//# sourceMappingURL=index.js.map
