import { fetchByPhoto } from "./fetchPhoto";
import { Notify } from "notiflix";
import { createMarcupPhoto } from "./createMarcupPhoto";
import { scroll } from "./scroll";


const loadMoreBtn = document.querySelector('.load-more')
const gallery = document.querySelector('.gallery');

async function loadMore(name, currentPage) {

    await fetchByPhoto(name, currentPage).then(({ data }) => {

        if (currentPage * 40 > data.totalHits && data.totalHits) {
            Notify.success("We're sorry, but you've reached the end of search results");
            loadMoreBtn.classList.add('is-hidden');
            return
        }

        gallery.insertAdjacentHTML('beforeend', createMarcupPhoto(data.hits))}).catch(console.error);
        await scroll(gallery); 
}

export {loadMoreBtn, gallery, loadMore}


// Функція для кнопки Завантажити більше + використовується для інфініті скрол