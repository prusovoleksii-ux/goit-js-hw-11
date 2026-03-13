import{a as f,S as p,i as c}from"./assets/vendor-Brtjr80A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="54981355-018af070e068b3cf75c2fd7df",y=s=>f.get("https://pixabay.com/api/",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data),u=document.querySelector("div.modal"),d=document.querySelector("ul.gallery"),h=()=>{u.classList.add("active")},g=()=>{u.classList.remove("active")},L=s=>{let t=s.map(o=>`<li class="gallery-item">
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
                                    </li>`).join(""),a=new p(".gallery a",{captionsData:"alt"});d.innerHTML=t,a.refresh()},b=s=>{d.innerHTML=""},v=document.querySelector(".form"),l=document.querySelector(".form input"),n=document.querySelector('button[type="submit"]');n.disabled=!0;l.addEventListener("input",s=>{s.currentTarget.value.trim()!==""?n.disabled=!1:n.disabled=!0});v.addEventListener("submit",s=>{l.value.trim()!==""&&(s.preventDefault(),h(),b(),y(l.value).then(t=>{console.log(t.hits),t.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!"}):L(t.hits)}).catch(t=>{console.error(t),c.error({message:"An error occurred while trying to fetch images"})}).finally(()=>{g()}))});
//# sourceMappingURL=index.js.map
