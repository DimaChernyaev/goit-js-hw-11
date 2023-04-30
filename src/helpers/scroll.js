export function scroll(gallery) {
    const { height: cardHeight } = gallery
    .firstElementChild.getBoundingClientRect();

window.scrollBy({   
    top: cardHeight * 2,
    behavior: 'smooth',
})
}

// Функція на скрол при довантажені картинок при нажиманні кнопки завантажити більше