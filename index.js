import{a as b,S as L,i as s}from"./assets/vendor-Cm9gDZN8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const w="https://pixabay.com/api/",x="52768941-bbaed3abbd2034f32756ad176",P="photo",S="horizontal",$="true",O=15;async function q(n,e){return(await b.get(w,{params:{key:x,q:n,image_type:P,orientation:S,safesearch:$,per_page:O,page:e}})).data}const d=document.querySelector(".loader"),m=document.querySelector(".gallery"),f=document.querySelector(".load-button");let v=new L(".gallery li a",{captionsData:"alt",captionscaptionDelay:250});function I(n){m.insertAdjacentHTML("beforeend",n.map(e=>`<li class="gallery-item">
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
      </li>`).join("")),v.refresh()}function B(){m.innerHTML=""}function y(){d.style.display="inline-block"}function p(){d.style.display="none"}function M(){f.style.display="inline-block"}function u(){f.style.display="none"}const T=document.querySelector(".form"),C=document.querySelector(".load-button"),D=15;let l=1,h="",a=0;function g(n,e){y(),q(n,e).then(o=>{if(p(),o.hits.length===0){s.error({color:"",title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});return}I(o.hits),window.scrollBy(pos),a===0&&(a=Math.ceil(o.totalHits/D)),a<=l?(u(),s.warning({color:"",title:"All pages loaded",message:"If you would like to increase the amount of images, consider buying our premium membership",position:"topCenter"})):M()}).catch(o=>{s.error({color:"",title:"Oops!There seems to be an error!",message:`${o}`,position:"topCenter"}),p()})}T.addEventListener("submit",n=>{n.preventDefault();const e=n.target,o=e.elements["search-text"].value.trim();if(o===""){s.error({title:"Error!",message:"The search field cannot be empty!",position:"topCenter"});return}const i=o.split(" ").join("+");u(),B(),e.reset(),a=0,g(i,1),h=i,l=1});C.addEventListener("click",n=>{l+=1,u(),y(),g(h,l)});
//# sourceMappingURL=index.js.map
