import{a as g,S as b,i as s}from"./assets/vendor-Cm9gDZN8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const L="https://pixabay.com/api/",w="52768941-bbaed3abbd2034f32756ad176",S="photo",x="horizontal",P="true",$=15;async function q(n,e){return(await g.get(L,{params:{key:w,q:n,image_type:S,orientation:x,safesearch:P,per_page:$,page:e}})).data}const d=document.querySelector(".loader"),m=document.querySelector(".gallery"),y=document.querySelector(".load-button");let v=new b(".gallery li a",{captionsData:"alt",captionscaptionDelay:250});function O(n){m.insertAdjacentHTML("beforeend",n.map(e=>`<li class="gallery-item">
        <a href=${e.largeImageURL}> <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
          <ul class="image-stats-list">
            <li>
              <h3>Likes</h3>
              <p>${e.likes}</p>
            </li>
            <li>
              <h3>Views</h3>
              <p>${e.views}</p>
            </li>
            <li>
              <h3>Comments</h3>
              <p>${e.comments}</p>
            </li>
            <li>
              <h3>Downloads</h3>
              <p>${e.downloads}</p>
            </li>
          </ul>

        </a>
      </li>`).join("")),v.refresh()}function B(){m.innerHTML=""}function I(){d.style.display="inline-block"}function p(){d.style.display="none"}function T(){y.style.display="inline-block"}function u(){y.style.display="none"}const C=document.querySelector(".form"),M=document.querySelector(".load-button"),E=15;let l=1,f="",a=0;async function h(n,e){try{I();const r=await q(n,e);if(p(),r.hits.length===0){s.error({color:"",title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});return}O(r.hits),a===0&&(a=Math.ceil(r.totalHits/E)),a<=l?(u(),s.warning({color:"",title:"All pages loaded",message:"If you would like to increase the amount of images, consider buying our premium membership",position:"topCenter"})):T()}catch(r){s.error({color:"",title:"Oops!There seems to be an error!",message:`${r}`,position:"topCenter"}),p()}}C.addEventListener("submit",n=>{n.preventDefault();const e=n.target,r=e.elements["search-text"].value.trim();if(r===""){s.error({title:"Error!",message:"The search field cannot be empty!",position:"topCenter"});return}const i=r.split(" ").join("+");u(),B(),e.reset(),a=0,h(i,1),f=i,l=1});M.addEventListener("click",async n=>{u(),l+=1;try{await h(f,l),setTimeout(()=>{const{height:e}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})},300)}catch{s.error({title:"Error!",message:"The search field cannot be empty!",position:"topCenter"});return}});
//# sourceMappingURL=index.js.map
