import { getImagesByQuery } from './js/pixabay-api'
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions'
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector(".form")
const loadButton = document.querySelector(".load-button")

const imagesPerPage = 15 //9+10
let currentPageNumber = 1
let savedInput = ""
let maxPages = 0

function makeQuery(formattedInput, pageNumber) {
    showLoader()
    getImagesByQuery(formattedInput, pageNumber).then(searchResults => {
        hideLoader()
        if (searchResults.hits.length === 0) {
            iziToast.error({
                color: "",
                title: "Oops!",
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topCenter"
            });
            return
        }

        createGallery(searchResults.hits)

        window.scrollBy(pos)
        if (maxPages === 0) {
            maxPages = Math.ceil(searchResults.totalHits / imagesPerPage)
        }
        if (maxPages <= currentPageNumber) {
            hideLoadMoreButton()
            iziToast.warning({
                color: "",
                title: "All pages loaded",
                message: "If you would like to increase the amount of images, consider buying our premium membership",
                position: "topCenter"
            });
        } else {
            showLoadMoreButton()
        }
    }).catch(error => {
        iziToast.error({
            color: "",
            title: "Oops!There seems to be an error!",
            message: `${error}`,
            position: "topCenter"
        });
        hideLoader()
        return
    })
}

searchForm.addEventListener("submit", event => {
    event.preventDefault();

    const form = event.target
    const searchInput = form.elements["search-text"].value.trim()

    if (searchInput === "") {
        iziToast.error({
            title: "The search field cannot be empty!",
            message: `${error}`,
            position: "topCenter"
        });
        return
    }

    const formattedInput = searchInput.split(" ").join("+")
    hideLoadMoreButton()
    clearGallery()
    form.reset()
    maxPages = 0


    makeQuery(formattedInput, 1)

    savedInput = formattedInput
    currentPageNumber = 1

})

loadButton.addEventListener("click", event => {
    currentPageNumber += 1
    hideLoadMoreButton()
    showLoader()
    makeQuery(savedInput, currentPageNumber)
})