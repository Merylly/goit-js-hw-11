import{i as u,S as f}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",d="41929630-0ce2e4f7023522073d7143cb8",a={form:document.getElementById("form"),resultContainer:document.getElementById("result-container")};a.form.addEventListener("submit",h);function h(n){n.preventDefault();const r=n.currentTarget,o=r.elements.picture.value;p(o).then(i=>{const e=i.hits;e.length===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),g(e)}).finally(()=>r.reset())}function p(n){const r=new URLSearchParams({key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${m}?${r}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}let y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const r=n.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:s,comments:l,downloads:c})=>`<li class="gallery-item">
            <a href="${i}">
  <img src="${o}" alt="${e}"></a>
  <ul>
    <li>Likes: ${t}</li>
    <li>Views: ${s}</li>
    <li>Comments: ${l}</li>
    <li>Downloads: ${c}</li>
  </ul>
</li>`).join("");a.resultContainer.innerHTML=r,refresh(),y.refresh()}
//# sourceMappingURL=commonHelpers.js.map
