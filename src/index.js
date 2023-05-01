import { Notify } from "notiflix";
import { loadMore } from "./helpers/loadMoreBtn";
import { gallery } from "./helpers/loadMoreBtn";
import { fetchByPhoto } from "./helpers/fetchPhoto";
import { createMarcupPhoto } from "./helpers/createMarcupPhoto";
import { loadMoreBtn } from "./helpers/loadMoreBtn";
import { modalOpen } from "./helpers/modalOpen";

// const targetEl = document.querySelector('.js-observer');
const form = document.querySelector('#search-form');
form.addEventListener('submit', searchPhoto);
loadMoreBtn.classList.add('is-hidden');
console.log(gallery);

let currentPage = 1;
let searchInput = '';

// Функціонал для кнопки Завантажити більше
loadMoreBtn.addEventListener('click', () => {
    currentPage += 1;
    loadMore(searchInput, currentPage);
});


async function searchPhoto(event) {
    event.preventDefault();

    gallery.innerHTML = '';
    loadMoreBtn.classList.add('is-hidden'); 
    currentPage = 1;
    searchInput = event.currentTarget.elements.searchQuery.value;

    if (!searchInput.trim()) {
        Notify.failure("Please enter your search query!")
        form.reset();
        gallery.innerHTML = '';
        return
    }

    try {
        const { data } = await fetchByPhoto(searchInput, currentPage);

        if (!data.totalHits) {
            Notify.failure("Sorry, there are no images matching your search query. Please try again.")
            form.reset();
            gallery.innerHTML = '';
            return
        }

        gallery.insertAdjacentHTML('beforeend', createMarcupPhoto(data.hits)); 
        Notify.success(`Hooray! We found ${data.totalHits} images.`);
        form.reset();
        // observer.observe(targetEl);
        if (data.hits.length === 40) {
            loadMoreBtn.classList.remove('is-hidden');
        }
        modalOpen();
    } catch (error) {
        console.error(error);
        Notify.failure(`Sorry, an error occurred. Please try again`);
    }
}









// Функція інфініті скрол через обсервер но кнопочка прикольніше =)
// const options = {
//     root: null,
//     threshold: 1.0,
// }

// async function loadMoreScroll (entries) {

//     await entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             currentPage += 1;
//             loadMoreBtn(searchInput, currentPage);
//         }
//     })
// };

// const observer = new IntersectionObserver(loadMoreScroll, options);






