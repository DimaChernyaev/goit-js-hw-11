import { Notify } from "notiflix";
import { loadMore } from "./helpers/loadMoreBtn";
import { gallery } from "./helpers/loadMoreBtn";
import { fetchByPhoto } from "./helpers/fetchPhoto";
import { createMarcupPhoto } from "./helpers/createMarcupPhoto";
import { loadMoreBtn } from "./helpers/loadMoreBtn";
// import { modalOpen } from "./helpers/modalOpen";

const targetEl = document.querySelector('.js-observer');
const form = document.querySelector('#search-form');
form.addEventListener('submit', searchPhoto);
loadMoreBtn.classList.add('is-hidden');

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
    } else {
        await fetchByPhoto(searchInput, currentPage).then(({data}) =>     

        {if (!data.totalHits) {
            Notify.failure("Sorry, there are no images matching your search query. Please try again.")
            form.reset();
            gallery.innerHTML = '';
            return
        }
    
        gallery.insertAdjacentHTML('beforeend', createMarcupPhoto(data.hits)); 
        Notify.success(`Hooray! We found ${data.totalHits} images.`);
        form.reset();
        // observer.observe(targetEl); Обсервер працює але чомусь фетч робить і при пустому інпуті
        loadMoreBtn.classList.remove('is-hidden'); 
        }).catch(console.error);
    }
}





// Функція інфініті скрол через обсервер
// const options = {
//     root: null,
//     threshold: 1.0,
// }

// async function loadMoreScroll (entries) {

//     await entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             currentPage += 1;
//             loadMore(searchInput, currentPage);
//         }
//     })
// };

// const observer = new IntersectionObserver(loadMoreScroll, options);





