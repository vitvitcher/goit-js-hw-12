
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector(".loader")
const gallery = document.querySelector(".gallery")
const loadButton = document.querySelector(".load-button")
let lightBoxGallery = new SimpleLightbox('.gallery li a', { captionsData: 'alt', captionscaptionDelay: 250 });

export function createGallery(images) {
  gallery.insertAdjacentHTML("beforeend", images.map(image => {
    return `<li class="gallery-item">
        <a href=${image.largeImageURL}> <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
          <ul class="image-stats-list">
            <li>
              <h3>Likes</h3>
              <p>${image.likes}</p>
            </li>
            <li>
              <h3>Views</h3>
              <p>${image.views}</p>
            </li>
            <li>
              <h3>Comments</h3>
              <p>${image.comments}</p>
            </li>
            <li>
              <h3>Downloads</h3>
              <p>${image.downloads}</p>
            </li>
          </ul>

        </a>
      </li>`
  }).join(""))

  lightBoxGallery.refresh()
}

export function clearGallery() {
  gallery.innerHTML = ""
}

export function showLoader() {
  loader.style.display = 'inline-block'
}
export function hideLoader() {
  loader.style.display = 'none'
}

export function showLoadMoreButton() {
  loadButton.style.display = 'inline-block'
}
export function hideLoadMoreButton() {
  loadButton.style.display = 'none'
}