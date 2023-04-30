import { Notify } from "notiflix";
import { loadMore } from "./helpers/loadMoreBtn";
import { gallery } from "./helpers/loadMoreBtn";
import { fetchByPhoto } from "./helpers/fetchPhoto";
import { createMarcupPhoto } from "./helpers/createMarcupPhoto";
import { loadMoreBtn } from "./helpers/loadMoreBtn";
import { modalOpen } from "./helpers/modalOpen";


const form = document.querySelector('#search-form');
form.addEventListener('submit', searchPhoto);

let currentPage = 1;
let searchInput = '';

loadMoreBtn.addEventListener('click', () => {
    currentPage += 1;
    loadMore(searchInput, currentPage);
});
loadMoreBtn.classList.add('is-hidden');

// gallery.addEventListener('click', (event) => {
//     event.preventDefault();

//     modalOpen();
// })




async function searchPhoto(event) {
    event.preventDefault();

    gallery.innerHTML = '';
    loadMoreBtn.classList.add('is-hidden')
    currentPage = 1;
    searchInput = event.currentTarget.elements.searchQuery.value;

    if (!searchInput.trim()) {
        Notify.failure("Sorry, enter your query in the search box. Please try again.")
        form.reset();
        gallery.innerHTML = '';
        return
    } 

    await fetchByPhoto(searchInput, currentPage).then(({data}) =>     

    {if (!data.totalHits) {
        Notify.failure("Sorry, there are no images matching your search query. Please try again.")
        form.reset();
        gallery.innerHTML = '';
        return
    }

    if (data.totalHits === data.hits) {
        Notify.success(`Hooray! We found totalHits images`);
    }

    gallery.insertAdjacentHTML('beforeend', createMarcupPhoto(data.hits)); 
    loadMoreBtn.classList.remove('is-hidden');
    form.reset();
    Notify.success(`Hooray! We found ${data.totalHits} images.`);
    }).catch(console.error)
}










