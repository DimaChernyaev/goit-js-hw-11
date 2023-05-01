import { fetchByPhoto } from "./fetchPhoto";
import { Notify } from "notiflix";
import { createMarcupPhoto } from "./createMarcupPhoto";
import { scroll } from "./scroll";
import { modalOpen } from "./modalOpen";


const loadMoreBtn = document.querySelector('.load-more')
const gallery = document.querySelector('.gallery');

async function loadMore(name, currentPage) {

    const { data } = await fetchByPhoto(name, currentPage);

        if (currentPage * 40 > data.totalHits && data.totalHits) {
            Notify.success("We're sorry, but you've reached the end of search results");
            loadMoreBtn.classList.add('is-hidden');
        }

        gallery.insertAdjacentHTML('beforeend', createMarcupPhoto(data.hits))
        await scroll(gallery); 
        modalOpen()
}

export {loadMoreBtn, gallery, loadMore}


// Функція для кнопки Завантажити більше + використовується для інфініті скрол