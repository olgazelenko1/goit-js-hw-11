import{a as u,S as m,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="50366360-a8ee66cb63e3deacadb68e28f",g="https://pixabay.com/api/";function y(i,r=1){const o={key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20,page:r};return u.get(g,{params:o}).then(a=>a.data).catch(()=>{throw new Error("Failed to fetch images from Pixabay")})}const l=document.querySelector(".gallery"),n=document.querySelector(".loader");let h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <div class="photo-card">
            <img src="${o}" alt="${e}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b> ${t}</p>
              <p class="info-item"><b>Views</b> ${s}</p>
              <p class="info-item"><b>Comments</b> ${d}</p>
              <p class="info-item"><b>Downloads</b> ${f}</p>
            </div>
          </div>
        </a>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l.innerHTML=""}function w(){n&&n.classList.remove("hidden")}function v(){n&&n.classList.add("hidden")}const P=document.querySelector(".form");P.addEventListener("submit",async i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(r===""){c.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}w(),L();try{const o=await y(r);if(o.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}catch{c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
