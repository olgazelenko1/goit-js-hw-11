import{a as u,S as p,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="50366360-a8ee66cb63e3deacadb68e28f",g="https://pixabay.com/api/";function h(i){const o={key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12,page:1};return u.get(g,{params:o}).then(r=>r.data).catch(r=>{throw console.error("Error fetching images:",r),r})}const l=document.querySelector(".gallery"),n=document.querySelector(".loader");let y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:a,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <div class="photo-card">
            <img src="${r}" alt="${e}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b> ${t}</p>
              <p class="info-item"><b>Views</b> ${a}</p>
              <p class="info-item"><b>Comments</b> ${d}</p>
              <p class="info-item"><b>Downloads</b> ${f}</p>
            </div>
          </div>
        </a>
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){l.innerHTML=""}function w(){n&&n.classList.remove("hidden")}function v(){n&&n.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",async i=>{i.preventDefault();const o=i.target.elements["search-text"].value.trim();if(o===""){c.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}w(),L();try{const r=await h(o);if(r.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(r.hits)}catch{c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
