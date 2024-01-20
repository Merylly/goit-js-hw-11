import{S as p}from"./assets/vendor-b41a7778.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="41929630-0ce2e4f7023522073d7143cb8",l={form:document.getElementById("form"),resultContainer:document.getElementById("result-container")};l.form.addEventListener("submit",g);function g(n){n.preventDefault();const r=n.currentTarget,o=r.elements.picture.value;L(o).then(s=>{const t=s.hits.map(({webformatURL:i,largeImageURL:a,tags:c,likes:u,views:f,comments:m,downloads:d})=>`<li class="gallery-item">
            <a href="${a}">
  <img src="${i}" alt="${c}"></a>
  <ul>
    <li>Likes: ${u}</li>
    <li>Views: ${f}</li>
    <li>Comments: ${m}</li>
    <li>Downloads: ${d}</li>
  </ul>
</li>`).join("");l.resultContainer.innerHTML=t}).finally(()=>r.reset())}function L(n){const r=new URLSearchParams({key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${h}?${r}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
