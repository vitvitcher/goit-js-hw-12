import axios from "axios";



const pixUrl = "https://pixabay.com/api/"
const pixKey = "52768941-bbaed3abbd2034f32756ad176"
const pixImgType = "photo"
const pixOrientation = "horizontal"
const pixSafeSrch = "true"
const imagesPerPage = 15

export async function getImagesByQuery(query, pageNumber) {

    const returnValue = await axios.get(pixUrl, {
        params: {
            key: pixKey,
            q: query,
            image_type: pixImgType,
            orientation: pixOrientation,
            safesearch: pixSafeSrch,
            per_page: imagesPerPage,
            page: pageNumber
        }
    })
    return returnValue.data
}

